import { Point } from "./point.types";


export function magnitude(point: Point): number {
  return Math.hypot(point.x, point.y);
}

export function direction(point: Point): number {
  return Math.atan2(point.y, point.x);
}

export function add(point1: Point, point2: Point): Point {
  return {
    x: point1.x + point2.x,
    y: point1.y + point2.y
  };
}

export function subtract(point1: Point, point2: Point): Point {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y
  };
}
