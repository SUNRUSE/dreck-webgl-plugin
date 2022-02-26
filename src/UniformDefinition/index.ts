import type { ShaderType } from "..";

/**
 * Describes an input to a shader which is uniform across all vertices and fragments of a draw call.
 */
export type UniformDefinition = {
  /**
   * The type of the value within the shader.
   */
  readonly shaderType: keyof ShaderType;

  /**
   * When 1, the uniform is NOT an array.  When greater than 1, the uniform is an array of the specified length.
   */
  readonly quantity: number;
};
