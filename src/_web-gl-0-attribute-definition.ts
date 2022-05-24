/**
 * Describes how an attribute maps between an array buffer and a shader.
 */
type WebGlAttributeDefinition =
  | {
      /**
       * The type of the attribute within the array buffer.
       */
      readonly binaryType: WebGlConstants.UnsignedByte;

      /**
       * The type of the attribute within the shader.
       */
      readonly shaderPrimitive:
        | WebGlConstants.Float
        | WebGlConstants.Vec2
        | WebGlConstants.Vec3
        | WebGlConstants.Vec4;

      /**
       * When true, the value is normalized, meaning that 0 is 0 and 255 is 1.  When false, the value ranges from 0 to 255 as normal.
       */
      readonly normalized: boolean;
    }
  | {
      /**
       * The type of the attribute within the array buffer.
       */
      readonly binaryType: WebGlConstants.UnsignedShort;

      /**
       * The type of the attribute within the shader.
       */
      readonly shaderPrimitive:
        | WebGlConstants.Float
        | WebGlConstants.Vec2
        | WebGlConstants.Vec3
        | WebGlConstants.Vec4;

      /**
       * When true, the value is normalized, meaning that 0 is 0 and 65535 is 1.  When false, the value ranges from 0 to 65535 as normal.
       */
      readonly normalized: boolean;
    }
  | {
      /**
       * The type of the attribute within the array buffer.
       */
      readonly binaryType: WebGlConstants.Byte;

      /**
       * The type of the attribute within the shader.
       */
      readonly shaderPrimitive:
        | WebGlConstants.Float
        | WebGlConstants.Vec2
        | WebGlConstants.Vec3
        | WebGlConstants.Vec4;

      /**
       * When true, the value is normalized, meaning that -128 is - and 255 is 1.  When false, the value ranges from 0 to 255 as normal.
       */
      readonly normalized: boolean;
    }
  | {
      /**
       * The type of the attribute within the array buffer.
       */
      readonly binaryType: WebGlConstants.Short;

      /**
       * The type of the attribute within the shader.
       */
      readonly shaderPrimitive:
        | WebGlConstants.Float
        | WebGlConstants.Vec2
        | WebGlConstants.Vec3
        | WebGlConstants.Vec4;

      /**
       * When true, the value is normalized, meaning that -32768 is -1 and 32767 is 1.  When false, the value ranges from -32768 to 32767 as normal.
       */
      readonly normalized: boolean;
    }
  | {
      /**
       * The type of the attribute within the array buffer.
       */
      readonly binaryType: WebGlConstants.Float;

      /**
       * The type of the attribute within the shader.
       */
      readonly shaderPrimitive:
        | WebGlConstants.Float
        | WebGlConstants.Vec2
        | WebGlConstants.Vec3
        | WebGlConstants.Vec4;
    };
