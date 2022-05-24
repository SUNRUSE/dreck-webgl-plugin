/**
 * Renders an unindexed batch.
 * @template TAttributeDefinitionSet The vertex attributes within the vertex buffer.
 * @template TUniformDefinitionSet The uniforms passed to the program.
 * @param context The context under which to render.
 * @param vertexBuffer The vertex buffer to render.
 * @param program The program to use to render.
 * @param uniforms The uniforms to provide to the program while rendering.
 */
function webGlRender<
  TAttributeDefinitionSet extends WebGlAttributeDefinitionSet,
  TUniformDefinitionSet extends WebGlUniformDefinitionSet
>(
  context: WebGlContextInterface<
    | `useProgram`
    | `bindBuffer`
    | `vertexAttribPointer`
    | `enableVertexAttribArray`
    | `disableVertexAttribArray`
    | `drawArrays`
    | `uniform1f`
    | `uniform1fv`
    | `uniform2f`
    | `uniform2fv`
    | `uniform3f`
    | `uniform3fv`
    | `uniform4f`
    | `uniform4fv`
    | `uniformMatrix2fv`
    | `uniformMatrix3fv`
    | `uniformMatrix4fv`
  >,
  vertexBuffer: WebGlResourceInterface<WebGlVertexBufferInstance> & {
    readonly packedAttributeDefinitionSet: WebGlPackedAttributeDefinitionSet<TAttributeDefinitionSet>;
    readonly mode:
      | WebGlConstants.Points
      | WebGlConstants.LineStrip
      | WebGlConstants.LineLoop
      | WebGlConstants.Lines
      | WebGlConstants.TriangleStrip
      | WebGlConstants.TriangleFan
      | WebGlConstants.Triangles;
  },
  program: WebGlResourceInterface<
    WebGlProgramInstance<TAttributeDefinitionSet, TUniformDefinitionSet>
  > & {
    readonly vertexShader: {
      readonly uniformDefinitionSet: TUniformDefinitionSet;
    };
  },
  uniforms: WebGlUniformValueSet<TUniformDefinitionSet>
): void {
  function flat<T>(input: ReadonlyArray<ReadonlyArray<T>>): T[] {
    const output: T[] = [];

    for (const a of input) {
      output.push(...a);
    }

    return output;
  }

  if (vertexBuffer.context !== context) {
    throw new Error(`The vertex buffer must be of the given context.`);
  } else if (program.context !== context) {
    throw new Error(`The program must be of the given context.`);
  } else {
    const vertexBufferInstance = vertexBuffer.getInstance();

    if (vertexBufferInstance !== null) {
      const programInstance = program.getInstance();

      if (programInstance !== null) {
        context.gl.useProgram(programInstance.program);

        context.gl.bindBuffer(
          WebGlConstants.ArrayBuffer,
          vertexBufferInstance.buffer
        );

        for (const key in programInstance.attributeLocations) {
          const location = programInstance.attributeLocations[key];

          if (location !== -1) {
            context.gl.enableVertexAttribArray(location);
          }
        }

        for (const key in programInstance.attributeLocations) {
          const location = programInstance.attributeLocations[key];

          if (location !== -1) {
            const details = vertexBuffer.packedAttributeDefinitionSet
              .attributeDefinitionSet[key] as WebGlAttributeDefinition;

            context.gl.vertexAttribPointer(
              location,
              webGlShaderPrimitiveArity[details.shaderPrimitive],
              details.binaryType,
              details.binaryType === WebGlConstants.Float
                ? false
                : details.normalized,
              vertexBuffer.packedAttributeDefinitionSet.stride,
              vertexBuffer.packedAttributeDefinitionSet.offsets[key]
            );
          }
        }

        for (const key in programInstance.uniformLocations) {
          const location = programInstance.uniformLocations[key];

          if (location !== null) {
            const details = program.vertexShader.uniformDefinitionSet[
              key
            ] as WebGlUniformDefinition;

            switch (details.shaderPrimitive) {
              case WebGlConstants.Float:
                if (details.quantity === 1) {
                  context.gl.uniform1f(location, uniforms[key] as number);
                } else {
                  context.gl.uniform1fv(location, uniforms[key] as Float32List);
                }
                break;

              case WebGlConstants.Vec2:
                if (details.quantity === 1) {
                  context.gl.uniform2f(
                    location,
                    ...(uniforms[key] as WebGlVec2)
                  );
                } else {
                  context.gl.uniform2fv(
                    location,
                    flat(uniforms[key] as ReadonlyArray<WebGlVec2>)
                  );
                }
                break;

              case WebGlConstants.Vec3:
                if (details.quantity === 1) {
                  context.gl.uniform3f(
                    location,
                    ...(uniforms[key] as WebGlVec3)
                  );
                } else {
                  context.gl.uniform3fv(
                    location,
                    flat(uniforms[key] as ReadonlyArray<WebGlVec3>)
                  );
                }
                break;

              case WebGlConstants.Vec4:
                if (details.quantity === 1) {
                  context.gl.uniform4f(
                    location,
                    ...(uniforms[key] as WebGlVec4)
                  );
                } else {
                  context.gl.uniform4fv(
                    location,
                    flat(uniforms[key] as ReadonlyArray<WebGlVec4>)
                  );
                }
                break;

              case WebGlConstants.Mat2:
                if (details.quantity === 1) {
                  context.gl.uniformMatrix2fv(
                    location,
                    false,
                    uniforms[key] as WebGlMat2
                  );
                } else {
                  context.gl.uniformMatrix2fv(
                    location,
                    false,
                    uniforms[key] as WebGlMat2
                  );
                }
                break;

              case WebGlConstants.Mat3:
                if (details.quantity === 1) {
                  context.gl.uniformMatrix3fv(
                    location,
                    false,
                    uniforms[key] as WebGlMat3
                  );
                } else {
                  context.gl.uniformMatrix3fv(
                    location,
                    false,
                    uniforms[key] as WebGlMat3
                  );
                }
                break;

              case WebGlConstants.Mat4:
                if (details.quantity === 1) {
                  context.gl.uniformMatrix4fv(
                    location,
                    false,
                    uniforms[key] as WebGlMat4
                  );
                } else {
                  context.gl.uniformMatrix4fv(
                    location,
                    false,
                    uniforms[key] as WebGlMat4
                  );
                }
                break;
            }
          }
        }

        context.gl.drawArrays(
          vertexBuffer.mode,
          0,
          vertexBufferInstance.data.numberOfVertices
        );

        for (const key in programInstance.attributeLocations) {
          const location = programInstance.attributeLocations[key];

          if (location !== -1) {
            context.gl.disableVertexAttribArray(location);
          }
        }
      }
    }
  }
}
