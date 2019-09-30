// INTEGRATION TEST

import chai, {expect} from "chai";
import "mocha";
import reader from "../src/services/reader";
import path from "path";

describe("reader", () => {
  /*const linesInFile = [`127.0.0.1 - - [07/Jul/2018:17:37:28 +0200] "GET /7d32ce87648a4050faca.hot-update.json HTTP/1.1" 200 43`, `127.0.0.1 - a [07/Jul/2018:17:37:28 +0200] "GET /7d32ce87648a4050faca.hot-update.json HTTP/1.1" 200 43`];
  
  it("Stops when no line left", async() => {
    const lines = [];
    await reader.read(path.resolve("tmp/access.log"), (line) => {
      lines.push(line);
      return true;
    });
    expect(lines).to.deep.equal([linesInFile[1], linesInFile[0]]);

  });*/
})