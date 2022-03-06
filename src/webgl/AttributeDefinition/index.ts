import type { Constants } from "../Constants";

/**
 * Describes how an attribute maps between an array buffer and a shader.
 */
export type AttributeDefinition =
  | {
      /**
       * The type of the attribute within the array buffer.
       */
      readonly binaryType: Constants.UnsignedByte;

      /**
       * The type of the attribute within the shader.
       */
      readonly shaderPrimitive:
        | Constants.Float
        | Constants.Vec2
        | Constants.Vec3
        | Constants.Vec4;

      /**
       * When true, the value is normalized, meaning that 0 is 0 and 255 is 1.  When false, the value ranges from 0 to 255 as normal.
       */
      readonly normalized: boolean;
    }
  | {
      /**
       * The type of the attribute within the array buffer.
       */
      readonly binaryType: Constants.UnsignedShort;

      /**
       * The type of the attribute within the shader.
       */
      readonly shaderPrimitive:
        | Constants.Float
        | Constants.Vec2
        | Constants.Vec3
        | Constants.Vec4;

      /**
       * When true, the value is normalized, meaning that 0 is 0 and 65535 is 1.  When false, the value ranges from 0 to 65535 as normal.
       */
      readonly normalized: boolean;
    }
  | {
      /**
       * The type of the attribute within the array buffer.
       */
      readonly binaryType: Constants.Byte;

      /**
       * The type of the attribute within the shader.
       */
      readonly shaderPrimitive:
        | Constants.Float
        | Constants.Vec2
        | Constants.Vec3
        | Constants.Vec4;

      /**
       * When true, the value is normalized, meaning that -128 is - and 255 is 1.  When false, the value ranges from 0 to 255 as normal.
       */
      readonly normalized: boolean;
    }
  | {
      /**
       * The type of the attribute within the array buffer.
       */
      readonly binaryType: Constants.Short;

      /**
       * The type of the attribute within the shader.
       */
      readonly shaderPrimitive:
        | Constants.Float
        | Constants.Vec2
        | Constants.Vec3
        | Constants.Vec4;

      /**
       * When true, the value is normalized, meaning that -32768 is -1 and 32767 is 1.  When false, the value ranges from -32768 to 32767 as normal.
       */
      readonly normalized: boolean;
    }
  | {
      /**
       * The type of the attribute within the array buffer.
       */
      readonly binaryType: Constants.Float;

      /**
       * The type of the attribute within the shader.
       */
      readonly shaderPrimitive:
        | Constants.Float
        | Constants.Vec2
        | Constants.Vec3
        | Constants.Vec4;
    };
