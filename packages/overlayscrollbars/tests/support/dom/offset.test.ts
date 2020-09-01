import { isNumber, isPlainObject } from 'support/utils/types';
import { offset, position } from 'support/dom/offset';

describe('dom offset', () => {
  describe('offset', () => {
    test('DOM element', () => {
      const result = offset(document.body);
      expect(isPlainObject(result)).toBe(true);
      expect(isNumber(result.x)).toBe(true);
      expect(isNumber(result.y)).toBe(true);
    });

    test('null', () => {
      const result = offset(null);
      expect(isPlainObject(result)).toBe(true);
      expect(result.x).toBe(0);
      expect(result.y).toBe(0);
    });
  });

  describe('position', () => {
    test('DOM element', () => {
      const result = position(document.body);
      expect(isPlainObject(result)).toBe(true);
      expect(isNumber(result.x)).toBe(true);
      expect(isNumber(result.y)).toBe(true);
    });

    test('null', () => {
      const result = position(null);
      expect(isPlainObject(result)).toBe(true);
      expect(result.x).toBe(0);
      expect(result.y).toBe(0);
    });
  });
});
