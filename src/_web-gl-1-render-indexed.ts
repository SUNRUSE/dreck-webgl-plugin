/**
 * Renders an indexed batch.
 * @template TAttributeDefinitionSet The vertex attributes within the vertex buffer.
 * @template TUniformDefinitionSet The uniforms passed to the program.
 * @param context The context under which to render.
 * @param vertexBuffer The vertex buffer to render.
 * @param indexBuffer The index buffer to render.
 * @param program The program to use to render.
 * @param uniforms The uniforms to provide to the program while rendering.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function webGlRenderIndexed<
  TAttributeDefinitionSet extends WebGlAttributeDefinitionSet,
  TUniformDefinitionSet extends WebGlUniformDefinitionSet
>(
  context: WebGlContextInterface<
    | `useProgram`
    | `bindBuffer`
    | `vertexAttribPointer`
    | `enableVertexAttribArray`
    | `disableVertexAttribArray`
    | `drawElements`
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
  indexBuffer: WebGlResourceInterface<WebGlIndexBufferInstance>,
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
  } else if (indexBuffer.context !== context) {
    throw new Error(`The index buffer must be of the given context.`);
  } else if (program.context !== context) {
    throw new Error(`The program must be of the given context.`);
  } else {
    const vertexBufferInstance = vertexBuffer.getInstance();

    if (vertexBufferInstance !== null) {
      const indexBufferInstance = indexBuffer.getInstance();

      if (indexBufferInstance !== null) {
        const programInstance = program.getInstance();

        if (programInstance !== null) {
          context.gl.useProgram(programInstance.program);

          context.gl.bindBuffer(
            WebGlConstants.ArrayBuffer,
            vertexBufferInstance.buffer
          );

          context.gl.bindBuffer(
            WebGlConstants.ElementArrayBuffer,
            indexBufferInstance.buffer
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
                    context.gl.uniform1fv(
                      location,
                      uniforms[key] as Float32List
                    );
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
                      flat(uniforms[key] as ReadonlyArray<WebGlMat2>)
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
                      flat(uniforms[key] as ReadonlyArray<WebGlMat3>)
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
                      flat(uniforms[key] as ReadonlyArray<WebGlMat4>)
                    );
                  }
                  break;
              }
            }
          }

          context.gl.drawElements(
            vertexBuffer.mode,
            indexBufferInstance.data.count,
            indexBufferInstance.data.type,
            0
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
}
