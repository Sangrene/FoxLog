import chai, {expect} from "chai";
import "mocha";
import statsGeneration, {isStatusError, getSectionPath} from "../src/analysis/statsGeneration";
import { fakeEntries } from "./fakeLog"

describe("statistics generation", () => {
  it("Detects error in status code", () => {
    expect(isStatusError("200")).to.be.false;
    expect(isStatusError("304")).to.be.false;
    expect(isStatusError("400")).to.be.true;
    expect(isStatusError("500")).to.be.true;
  });
  it("Get section from path", () => {
    expect(getSectionPath("/jambon/mie/sans/?q=\"couenne\"")).to.eqls("/jambon")
  });
  it("Returns the 3 most visited paths", () => {
    const stats = statsGeneration({last10Seconds: fakeEntries, last2Minutes: fakeEntries}, 10);
    expect(stats.mostVisitedSections).to.eql([
      {
        path: "/users",
        requestsNumber: 4,
        errorsNumber: 1
      },
      {
        path: "/shops",
        requestsNumber: 1,
        errorsNumber: 0
      }
    ]);
  });
  it("Returns an alert when last 2 minutes trafic is higher than threshold", () => {
    const { requestNumberAlert } = statsGeneration({last10Seconds: fakeEntries, last2Minutes: fakeEntries}, 4);
    expect(requestNumberAlert).to.eqls(5);
  });
  it("Doesn't alert when last 2 minutes trafic is lower than threshold", () => {
    const { requestNumberAlert } = statsGeneration({last10Seconds: fakeEntries, last2Minutes: fakeEntries}, 6);
    expect(requestNumberAlert).to.be.null;
  });
})