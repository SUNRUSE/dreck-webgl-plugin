import type { Vec2 } from "../../math/Vec2";
import type { Vec3 } from "../../math/Vec3";
import type { Vec4 } from "../../math/Vec4";
import type { Mat2 } from "../../math/Mat2";
import type { Mat3 } from "../../math/Mat3";
import type { Mat4 } from "../../math/Mat4";
import type { AttributeDefinition } from "../AttributeDefinition";
import type { AttributeDefinitionSet } from "../AttributeDefinitionSet";
import { Constants } from "../Constants";
import type { ContextInterface } from "../ContextInterface";
import { shaderPrimitiveArity } from "../shaderPrimitiveArity";
import type { UniformDefinition } from "../UniformDefinition";
import type { UniformDefinitionSet } from "../UniformDefinitionSet";
import type { ResourceInterface } from "../ResourceInterface";
import type { VertexBufferInstance } from "../VertexBufferInstance";
import type { ProgramInstance } from "../ProgramInstance";
import type { PackedAttributeDefinitionSet } from "../PackedAttributeDefinitionSet";
import type { UniformValueSet } from "../UniformValueSet";
import type { IndexBufferInstance } from "../IndexBufferInstance";

/**
 * Renders an indexed batch.
 * @template TAttributeDefinitionSet The vertex attributes within the vertex buffer.
 * @template TUniformDefinitionSet The uniforms passed to the program.
 * @param context The context udner which to render.
 * @param vertexBuffer The vertex buffer to render.
 * @param indexBuffer The index buffer to render.
 * @param program The program to use to render.
 * @param uniforms The uniforms to provide to the program while rendering.
 */
export function renderIndexed<
  TAttributeDefinitionSet extends AttributeDefinitionSet,
  TUniformDefinitionSet extends UniformDefinitionSet
>(
  context: ContextInterface<
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
  vertexBuffer: ResourceInterface<VertexBufferInstance> & {
    readonly packedAttributeDefinitionSet: PackedAttributeDefinitionSet<TAttributeDefinitionSet>;
    readonly mode:
      | Constants.Points
      | Constants.LineStrip
      | Constants.LineLoop
      | Constants.Lines
      | Constants.TriangleStrip
      | Constants.TriangleFan
      | Constants.Triangles;
  },
  indexBuffer: ResourceInterface<IndexBufferInstance>,
  program: ResourceInterface<
    ProgramInstance<TAttributeDefinitionSet, TUniformDefinitionSet>
  > & {
    readonly vertexShader: {
      readonly uniformDefinitionSet: TUniformDefinitionSet;
    };
  },
  uniforms: UniformValueSet<TUniformDefinitionSet>
): void {
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
            Constants.ArrayBuffer,
            vertexBufferInstance.buffer
          );

          context.gl.bindBuffer(
            Constants.ElementArrayBuffer,
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
                .attributeDefinitionSet[key] as AttributeDefinition;

              context.gl.vertexAttribPointer(
                location,
                shaderPrimitiveArity[details.shaderPrimitive],
                details.binaryType,
                details.binaryType === Constants.Float
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
              ] as UniformDefinition;

              switch (details.shaderPrimitive) {
                case Constants.Float:
                  if (details.quantity === 1) {
                    context.gl.uniform1f(location, uniforms[key] as number);
                  } else {
                    context.gl.uniform1fv(
                      location,
                      uniforms[key] as Float32List
                    );
                  }
                  break;

                case Constants.Vec2:
                  if (details.quantity === 1) {
                    context.gl.uniform2f(location, ...(uniforms[key] as Vec2));
                  } else {
                    context.gl.uniform2fv(
                      location,
                      (uniforms[key] as ReadonlyArray<Vec2>).flat()
                    );
                  }
                  break;

                case Constants.Vec3:
                  if (details.quantity === 1) {
                    context.gl.uniform3f(location, ...(uniforms[key] as Vec3));
                  } else {
                    context.gl.uniform3fv(
                      location,
                      (uniforms[key] as ReadonlyArray<Vec3>).flat()
                    );
                  }
                  break;

                case Constants.Vec4:
                  if (details.quantity === 1) {
                    context.gl.uniform4f(location, ...(uniforms[key] as Vec4));
                  } else {
                    context.gl.uniform4fv(
                      location,
                      (uniforms[key] as ReadonlyArray<Vec4>).flat()
                    );
                  }
                  break;

                case Constants.Mat2:
                  if (details.quantity === 1) {
                    context.gl.uniformMatrix2fv(
                      location,
                      false,
                      uniforms[key] as Mat2
                    );
                  } else {
                    context.gl.uniformMatrix2fv(
                      location,
                      false,
                      (uniforms[key] as Mat2).flat()
                    );
                  }
                  break;

                case Constants.Mat3:
                  if (details.quantity === 1) {
                    context.gl.uniformMatrix3fv(
                      location,
                      false,
                      uniforms[key] as Mat3
                    );
                  } else {
                    context.gl.uniformMatrix3fv(
                      location,
                      false,
                      (uniforms[key] as Mat3).flat()
                    );
                  }
                  break;

                case Constants.Mat4:
                  if (details.quantity === 1) {
                    context.gl.uniformMatrix4fv(
                      location,
                      false,
                      uniforms[key] as Mat4
                    );
                  } else {
                    context.gl.uniformMatrix4fv(
                      location,
                      false,
                      (uniforms[key] as Mat4).flat()
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
