import { direction, magnitude } from "./point";
import { Point, Polar } from "./types/point";

export function toPolar(point: Point): Polar {
  return {
    radius: magnitude(point),
    angle: direction(point)
  };
}

export function toXY(point: Polar): Point {
  return {
    x: point.radius * Math.cos(point.angle),
    y: point.radius * Math.sin(point.angle)
  };
}
