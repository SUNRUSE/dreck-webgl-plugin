import type { ShaderType } from "../ShaderType";

/**
 * Describes information which is output from the vertex shader, interpolated and fed into the fragment shader.
 */
export type VaryingDefinition = {
  /**
   * The type of the value within the shader.
   */
  readonly shaderType: keyof ShaderType;

  /**
   * When 1, the varying is NOT an array.  When greater than 1, the varying is an array of the specified length.
   */
  readonly quantity: number;
};
