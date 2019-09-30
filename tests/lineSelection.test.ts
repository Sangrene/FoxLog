import chai, {expect} from "chai";
import "mocha";
import { fakeLogs } from "./fakeLog";
import lineSelection from "../src/analysis/lineSelection";
import moment from "moment";
import parser from "../src/services/parser";

describe("line selection", () => {
  const lines = fakeLogs.split("\n");

  it("Can extract lines in the last 10 seconds", () => {
    
    const { last10Seconds } = lineSelection(lines, moment().utc().set({
      year: 2019,
      month: 7,
      date: 2,
      hour: 12,
      minute: 53,
      second: 49
    }), parser.parse);
    expect(last10Seconds).to.have.lengthOf(4);
  });
  it("Can extract lines in the last 2 minutes", () => {
    const { last2Minutes } = lineSelection(lines, moment().utc().set({
      year: 2019,
      month: 7,
      date: 2,
      hour: 12,
      minute: 56,
      second: 6
    }), parser.parse);
    expect(last2Minutes).to.have.lengthOf(12);
  });
});
