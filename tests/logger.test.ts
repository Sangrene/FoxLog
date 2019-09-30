import chai, {expect} from "chai";
import 'mocha';
import spy from "chai-spies";
import logger from "../src/services/logger";

describe("logger", () => {
  chai.use(spy);
  const logSpy = chai.spy((text: string) => {});
  const updateStatusSpy = chai.spy((text: string, isAlert: boolean) => {});
  it("Format logs correctly when no traffic", () => {
    logger.logInfos([], [], null, logSpy, updateStatusSpy);
    expect(logSpy).to.have.been.called.with.exactly("No traffic for the past 10 seconds...");
    expect(logSpy).to.have.been.called.with.exactly("No errors in the last 10 seconds...");
  });
  it("Format logs correctly with traffic", () => {
    logger.logInfos([
    {
      path: "/log",
      requestsNumber: 200,
      errorsNumber: 0
    }, {
      path: "/bill",
      requestsNumber: 25,
      errorsNumber: 1
    }, {
      path: "/user",
      requestsNumber: 15,
      errorsNumber: 2
    }], [{
      path: "/log",
      requestsNumber: 200,
      errorsNumber: 12
    }, {
      path: "/bill",
      requestsNumber: 25,
      errorsNumber: 4
    }, {
      path: "/user",
      requestsNumber: 15,
      errorsNumber: 3
    }], null, logSpy, updateStatusSpy);
    expect(logSpy).to.have.been.called.with.exactly("Most visited sections -> /log: 200 requests /bill: 25 requests /user: 15 requests ");
    expect(logSpy).to.have.been.called.with.exactly("Section errors -> /log: 12 /bill: 4 /user: 3 ")
  });
  it("Alerts correctly on threshold reached", () => {
    logger.logInfos([], [], 25, logSpy, updateStatusSpy);
    expect(updateStatusSpy).to.have.been.called.with.exactly("ALERT : 25 requests in the last 2 minutes !", true)
  });
  it("Doesn't alert on no threshold reached", () => {
    logger.logInfos([], [], null, logSpy, updateStatusSpy);
    expect(updateStatusSpy).to.have.been.called.with.exactly("No traffic alert for the past 2 minutes", false);
  })
});