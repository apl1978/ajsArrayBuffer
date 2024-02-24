import ArrayBufferConverter from '../arraybufferconverter';

test('return known error', () => {
  const buffer = new ArrayBufferConverter();
  const value = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  buffer.load(value);
  expect(buffer.toString()).toBe(value);

});
