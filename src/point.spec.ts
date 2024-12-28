import { magnitude, direction, add, subtract } from './point';
import { Point } from './point.types';

describe('Geometry Utilities', () => {
  describe('magnitude', () => {
    it('should calculates the magnitude of a point', () => {
      const point: Point = { x: 3, y: 4 };
      expect(magnitude(point)).toBe(5);
    });

    it('should returns 0 for the origin', () => {
      const point: Point = { x: 0, y: 0 };
      expect(magnitude(point)).toBe(0);
    });

    it('should works with negative coordinates', () => {
      const point: Point = { x: -3, y: -4 };
      expect(magnitude(point)).toBe(5);
    });
  });

  describe('direction', () => {
    it('should calculates the direction (magnitude) of a point', () => {
      const point: Point = { x: 1, y: 1 };
      expect(direction(point)).toBe(Math.PI / 4);
    });

    it('should returns 0 for the origin', () => {
      const point: Point = { x: 0, y: 0 };
      expect(direction(point)).toBe(0);
    });
  });

  describe('add', () => {
    it('should adds two points together', () => {
      const point1: Point = { x: 1, y: 2 };
      const point2: Point = { x: 3, y: 4 };
      expect(add(point1, point2)).toEqual({ x: 4, y: 6 });
    });

    it('should works with negative coordinates', () => {
      const point1: Point = { x: -1, y: -2 };
      const point2: Point = { x: 3, y: 4 };
      expect(add(point1, point2)).toEqual({ x: 2, y: 2 });
    });
  });

  describe('subtract', () => {
    it('should subtracts one point from another', () => {
      const point1: Point = { x: 3, y: 4 };
      const point2: Point = { x: 1, y: 2 };
      expect(subtract(point1, point2)).toEqual({ x: 2, y: 2 });
    });

    it('should works with negative coordinates', () => {
      const point1: Point = { x: -3, y: -4 };
      const point2: Point = { x: 1, y: 2 };
      expect(subtract(point1, point2)).toEqual({ x: -4, y: -6 });
    });
  });
});
