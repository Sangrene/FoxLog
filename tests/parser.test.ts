import {expect} from "chai";
import "mocha";
import parser, {getRequestInfos, formatDateTime} from "../src/services/parser";

describe("parser", () => {
  it("Parses request string correctly", () => {
    expect(getRequestInfos("GET /report HTTP/1.0")).to.eqls({
      method: "GET",
      path: "/report",
      protocol: "HTTP/1.0",
    });
  });
  it("Parses date correctly", () => {
    expect(formatDateTime("Ø9/May/2018:16:00:39 +0000")).to.eqls(new Date(Date.UTC(2018, 4, 9, 16, 0, 39)));
  });
  it("Parses line in W3C format correctly", () => {
    const line = '127.0.0.1 - james [Ø9/May/2018:16:00:39 +0000] "GET /report HTTP/1.0" 200 123'
    expect(parser.parse(line)).to.eqls({
      address: "127.0.0.1",
      user: "james",
      time: formatDateTime("Ø9/May/2018:16:00:39 +0000"),
      method: "GET",
      path: "/report",
      protocol: "HTTP/1.0",
      status: "200",
      bytes: "123"
    })
  });
  it("Ignores wrongly formatted line", () => {
    const line = '127.0.0.1 gfdf james rsfdvxcezfsd'
    expect(parser.parse(line)).to.be.null;
  })
})