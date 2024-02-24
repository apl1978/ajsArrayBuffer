import getBuffer from './getbuffer';

export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = getBuffer(buffer);
  }

  toString() {
    let result = "";
    const bufferView = new Uint16Array(this.buffer);
    for (let i = 0; i < bufferView.length; i++) {
      result += String.fromCharCode(bufferView[i]);
    }
    return result;
  }
}
