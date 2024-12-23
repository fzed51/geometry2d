import { Vector } from "./vector.types";

export function distance(vector: Vector): number {
  return Math.hypot(vector.to.x - vector.from.x, vector.to.y - vector.from.y);
}

export function scale(vector: Vector, factor: number): Vector {
  return {
    from: {
      x: vector.from.x * factor,
      y: vector.from.y * factor
    },
    to: {
      x: vector.to.x * factor,
      y: vector.to.y * factor
    }
  };
}

export function normalize(vector: Vector): Vector {
  const length = distance(vector);
  return scale(vector, 1 / length);
}

export function dotProduct(vector1: Vector, vector2: Vector): number {
  return (vector1.to.x - vector1.from.x) * (vector2.to.x - vector2.from.x)
    + (vector1.to.y - vector1.from.y) * (vector2.to.y - vector2.from.y);
}
