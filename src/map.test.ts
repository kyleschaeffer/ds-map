import { Map } from './map';

test('empty map is instantiated', () => {
  const map = new Map();
  expect(map.keys()).toEqual([]);
});

test('key/value is added to map', () => {
  const map = new Map();
  map.set('a', 1);
  expect(map.get('a')).toEqual(1);
});

test('key/value is updated in map', () => {
  const map = new Map();
  map.set('a', 2);
  expect(map.get('a')).toEqual(2);
});

test('unset key is undefined', () => {
  const map = new Map();
  expect(map.get('a')).toBeUndefined();
});

test('map has key', () => {
  const map = new Map();
  map.set('a', 1);
  expect(map.has('a')).toBe(true);
  expect(map.has('b')).toBe(false);
});

test('map is cleared', () => {
  const map = new Map();
  map.set('a', 1);
  map.clear();
  expect(map.keys()).toEqual([]);
});

test('map has keys array', () => {
  const map = new Map();
  map.set('a', 1);
  map.set('b', 2);
  expect(map.keys()).toEqual(['a', 'b']);
});

test('map has values array', () => {
  const map = new Map();
  map.set('a', 1);
  map.set('b', 2);
  expect(map.values()).toEqual([1, 2]);
});
