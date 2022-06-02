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
    | `uniform1i`
    | `uniform1iv`
    | `activeTexture`
    | `bindTexture`
  >,
  vertexBuffer: WebGlResourceInterface<WebGlVertexBufferInstance> & {
    readonly WebGlPackedAttributeDefinitionSet: WebGlPackedAttributeDefinitionSet<TAttributeDefinitionSet>;
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
  if (vertexBuffer.context !== context) {
    throw new Error(`The vertex buffer must be of the given context.`);
  } else if (indexBuffer.context !== context) {
    throw new Error(`The index buffer must be of the given context.`);
  } else if (program.context !== context) {
    throw new Error(`The program must be of the given context.`);
  } else {
    const textureInstances: [
      null | WebGLTexture,
      null | WebGLTexture,
      null | WebGLTexture,
      null | WebGLTexture,
      null | WebGLTexture,
      null | WebGLTexture,
      null | WebGLTexture,
      null | WebGLTexture
    ] = [null, null, null, null, null, null, null, null];

    for (const key in program.vertexShader.uniformDefinitionSet) {
      const value = program.vertexShader.uniformDefinitionSet[
        key
      ] as WebGlUniformDefinition;

      switch (value.shaderPrimitive) {
        case WebGlConstants.Sampler2D:
        case WebGlConstants.SamplerCube:
          if (value.quantity === 1) {
            if (
              (uniforms[key] as WebGlResourceInterface<WebGLTexture>)
                .context !== context
            ) {
              throw new Error(`Texture uniforms must be of the given context.`);
            }
          } else {
            for (const value of uniforms[key] as ReadonlyArray<
              WebGlResourceInterface<WebGLTexture>
            >) {
              if (value.context !== context) {
                throw new Error(
                  `Texture uniforms must be of the given context.`
                );
              }
            }
          }
          break;
      }
    }

    const vertexBufferInstance = vertexBuffer.getInstance();

    if (vertexBufferInstance !== null) {
      const indexBufferInstance = indexBuffer.getInstance();

      if (indexBufferInstance !== null) {
        const programInstance = program.getInstance();

        if (programInstance !== null) {
          for (const key in programInstance.uniforms) {
            const uniform = programInstance.uniforms[key];

            if (uniform !== null) {
              const details = program.vertexShader.uniformDefinitionSet[
                key
              ] as WebGlUniformDefinition;

              switch (details.shaderPrimitive) {
                case WebGlConstants.Sampler2D:
                case WebGlConstants.SamplerCube:
                  if (details.quantity === 1) {
                    const mapped = uniform as {
                      readonly location: WebGLUniformLocation;
                      readonly index: WebGlTextureIndex;
                    };

                    const textureInstance = (
                      uniforms[key] as WebGlResourceInterface<WebGLTexture>
                    ).getInstance();

                    if (textureInstance === null) {
                      return;
                    }

                    textureInstances[mapped.index] = textureInstance;
                  } else {
                    const mapped = uniform as {
                      readonly location: WebGLUniformLocation;
                      readonly indices: WebGlTextureIndex[];
                    };

                    const resources = uniforms[key] as ReadonlyArray<
                      WebGlResourceInterface<WebGLTexture>
                    >;

                    for (let i = 0; i < resources.length; i++) {
                      const resource = resources[
                        i
                      ] as WebGlResourceInterface<WebGLTexture>;

                      const textureInstance = resource.getInstance();

                      if (textureInstance === null) {
                        return;
                      }

                      textureInstances[mapped.indices[i] as WebGlTextureIndex] =
                        textureInstance;
                    }
                  }
                  break;
              }
            }
          }

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
              const details = vertexBuffer.WebGlPackedAttributeDefinitionSet
                .attributeDefinitionSet[key] as WebGlAttributeDefinition;

              context.gl.vertexAttribPointer(
                location,
                webGlShaderPrimitiveArity[details.shaderPrimitive],
                details.binaryType,
                details.binaryType === WebGlConstants.Float
                  ? false
                  : details.normalized,
                vertexBuffer.WebGlPackedAttributeDefinitionSet.stride,
                vertexBuffer.WebGlPackedAttributeDefinitionSet.offsets[key]
              );
            }
          }

          for (const key in programInstance.uniforms) {
            const uniform = programInstance.uniforms[key];

            if (uniform !== null) {
              const details = program.vertexShader.uniformDefinitionSet[
                key
              ] as WebGlUniformDefinition;

              switch (details.shaderPrimitive) {
                case WebGlConstants.Float:
                  if (details.quantity === 1) {
                    context.gl.uniform1f(uniform, uniforms[key] as number);
                  } else {
                    context.gl.uniform1fv(
                      uniform,
                      uniforms[key] as Float32List
                    );
                  }
                  break;

                case WebGlConstants.Vec2:
                  if (details.quantity === 1) {
                    context.gl.uniform2f(
                      uniform,
                      ...(uniforms[key] as WebGlVec2)
                    );
                  } else {
                    context.gl.uniform2fv(
                      uniform,
                      (uniforms[key] as ReadonlyArray<WebGlVec2>).flat()
                    );
                  }
                  break;

                case WebGlConstants.Vec3:
                  if (details.quantity === 1) {
                    context.gl.uniform3f(
                      uniform,
                      ...(uniforms[key] as WebGlVec3)
                    );
                  } else {
                    context.gl.uniform3fv(
                      uniform,
                      (uniforms[key] as ReadonlyArray<WebGlVec3>).flat()
                    );
                  }
                  break;

                case WebGlConstants.Vec4:
                  if (details.quantity === 1) {
                    context.gl.uniform4f(
                      uniform,
                      ...(uniforms[key] as WebGlVec4)
                    );
                  } else {
                    context.gl.uniform4fv(
                      uniform,
                      (uniforms[key] as ReadonlyArray<WebGlVec4>).flat()
                    );
                  }
                  break;

                case WebGlConstants.Mat2:
                  if (details.quantity === 1) {
                    context.gl.uniformMatrix2fv(
                      uniform,
                      false,
                      uniforms[key] as WebGlMat2
                    );
                  } else {
                    context.gl.uniformMatrix2fv(
                      uniform,
                      false,
                      (uniforms[key] as WebGlMat2).flat()
                    );
                  }
                  break;

                case WebGlConstants.Mat3:
                  if (details.quantity === 1) {
                    context.gl.uniformMatrix3fv(
                      uniform,
                      false,
                      uniforms[key] as WebGlMat3
                    );
                  } else {
                    context.gl.uniformMatrix3fv(
                      uniform,
                      false,
                      (uniforms[key] as WebGlMat3).flat()
                    );
                  }
                  break;

                case WebGlConstants.Mat4:
                  if (details.quantity === 1) {
                    context.gl.uniformMatrix4fv(
                      uniform,
                      false,
                      uniforms[key] as WebGlMat4
                    );
                  } else {
                    context.gl.uniformMatrix4fv(
                      uniform,
                      false,
                      (uniforms[key] as WebGlMat4).flat()
                    );
                  }
                  break;

                case WebGlConstants.Sampler2D:
                  if (details.quantity === 1) {
                    const mapped = uniform as {
                      readonly location: WebGLUniformLocation;
                      readonly index: WebGlTextureIndex;
                    };

                    context.gl.uniform1i(mapped.location, mapped.index);
                    context.gl.activeTexture(
                      webGlTextureSlotsByIndices[mapped.index]
                    );

                    context.gl.bindTexture(
                      WebGlConstants.Texture2D,
                      textureInstances[mapped.index]
                    );
                    textureInstances[mapped.index] = null;
                  } else {
                    const mapped = uniform as {
                      readonly location: WebGLUniformLocation;
                      readonly indices: WebGlTextureIndex[];
                    };

                    context.gl.uniform1iv(mapped.location, mapped.indices);

                    for (const index of mapped.indices) {
                      context.gl.activeTexture(
                        webGlTextureSlotsByIndices[index]
                      );

                      context.gl.bindTexture(
                        WebGlConstants.Texture2D,
                        textureInstances[index]
                      );

                      textureInstances[index] = null;
                    }
                  }
                  break;

                case WebGlConstants.SamplerCube:
                  if (details.quantity === 1) {
                    const mapped = uniform as {
                      readonly location: WebGLUniformLocation;
                      readonly index: WebGlTextureIndex;
                    };

                    context.gl.uniform1i(mapped.location, mapped.index);
                    context.gl.activeTexture(
                      webGlTextureSlotsByIndices[mapped.index]
                    );

                    context.gl.bindTexture(
                      WebGlConstants.TextureCubeMap,
                      textureInstances[mapped.index]
                    );

                    textureInstances[mapped.index] = null;
                  } else {
                    const mapped = uniform as {
                      readonly location: WebGLUniformLocation;
                      readonly indices: WebGlTextureIndex[];
                    };

                    context.gl.uniform1iv(mapped.location, mapped.indices);

                    for (const index of mapped.indices) {
                      context.gl.activeTexture(
                        webGlTextureSlotsByIndices[index]
                      );

                      context.gl.bindTexture(
                        WebGlConstants.TextureCubeMap,
                        textureInstances[index]
                      );

                      textureInstances[index] = null;
                    }
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

          for (const key in programInstance.uniforms) {
            const uniform = programInstance.uniforms[key];

            if (uniform !== null) {
              const details = program.vertexShader.uniformDefinitionSet[
                key
              ] as WebGlUniformDefinition;

              switch (details.shaderPrimitive) {
                case WebGlConstants.Sampler2D:
                  if (details.quantity === 1) {
                    const mapped = uniform as {
                      readonly location: WebGLUniformLocation;
                      readonly index: WebGlTextureIndex;
                    };

                    context.gl.activeTexture(
                      webGlTextureSlotsByIndices[mapped.index]
                    );
                    context.gl.bindTexture(WebGlConstants.Texture2D, null);
                  } else {
                    const mapped = uniform as {
                      readonly location: WebGLUniformLocation;
                      readonly indices: WebGlTextureIndex[];
                    };

                    for (const index of mapped.indices) {
                      context.gl.activeTexture(
                        webGlTextureSlotsByIndices[index]
                      );
                      context.gl.bindTexture(WebGlConstants.Texture2D, null);
                    }
                  }
                  break;

                case WebGlConstants.SamplerCube:
                  if (details.quantity === 1) {
                    const mapped = uniform as {
                      readonly location: WebGLUniformLocation;
                      readonly index: WebGlTextureIndex;
                    };

                    context.gl.activeTexture(
                      webGlTextureSlotsByIndices[mapped.index]
                    );
                    context.gl.bindTexture(WebGlConstants.TextureCubeMap, null);
                  } else {
                    const mapped = uniform as {
                      readonly location: WebGLUniformLocation;
                      readonly indices: WebGlTextureIndex[];
                    };

                    for (const index of mapped.indices) {
                      context.gl.activeTexture(
                        webGlTextureSlotsByIndices[index]
                      );
                      context.gl.bindTexture(
                        WebGlConstants.TextureCubeMap,
                        null
                      );
                    }
                  }
                  break;
              }
            }
          }
        }
      }
    }
  }
}
