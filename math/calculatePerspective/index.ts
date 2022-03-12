import type { Mat4 } from "../Mat4";

/**
 * Calculates a projection matrix for a perspective camera matching that which would be generated by Blender.
 * @param width The width of the viewport.
 * @param height The height of the viewport.
 * @param focalLength The focal length of the camera, in millimeters.
 * @param shiftX The amount of horizontal shift, where negative values are left and positive values are right.
 * @param shiftY The amount of vertical shift, where negative values are down and positive values are up.
 * @param clipStart The distance between the camera and the near clip plane.
 * @param clipEnd The distance between the camera and the far clip plane.
 * @param sensorSize The size of the sensor, in millimeters.
 * @param mat4 The matrix to which to write the result.
 */
export function calculatePerspective(
  width: number,
  height: number,
  focalLength: number,
  shiftX: number,
  shiftY: number,
  clipStart: number,
  clipEnd: number,
  sensorSize: number,
  mat4: Mat4
): void {
  const greatestDimension = Math.max(width, height);

  const pixelSize = (sensorSize * clipStart) / focalLength / greatestDimension;

  const xOffset = shiftX * greatestDimension;
  const yOffset = shiftY * greatestDimension;

  const left = (width / -2 + xOffset) * pixelSize;
  const bottom = (height / -2 + yOffset) * pixelSize;
  const right = (width / 2 + xOffset) * pixelSize;
  const top = (height / 2 + yOffset) * pixelSize;

  const frustumWidth = right - left;
  const frustumHeight = top - bottom;
  const frustumDepth = clipEnd - clipStart;

  mat4[0] = (clipStart * 2) / frustumWidth;
  mat4[1] = 0;
  mat4[2] = (right + left) / frustumWidth;
  mat4[3] = 0;
  mat4[4] = 0;
  mat4[5] = (clipStart * 2) / frustumHeight;
  mat4[6] = (top + bottom) / frustumHeight;
  mat4[7] = 0;
  mat4[8] = 0;
  mat4[9] = 0;
  mat4[10] = -(clipEnd + clipStart) / frustumDepth;
  mat4[11] = (clipStart * clipEnd * -2) / frustumDepth;
  mat4[12] = 0;
  mat4[13] = 0;
  mat4[14] = -1;
  mat4[15] = 0;
}
