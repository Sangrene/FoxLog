require('dotenv').config()
import logger from "./services/logger";
import statsGeneration from "./analysis/statsGeneration";
import lineSelection from "./analysis/lineSelection";
import reader from "./services/reader";
import parser from "./services/parser";
import moment from "moment";
import Terminal from "./services/terminal";
import path from "path";

const foxlog = () => {
  const filePath = path.resolve(process.env.FILE);
  const threshold = Number(process.env.THRESHOLD);
  const terminal = new Terminal();
  setInterval(async() => {
    const lines = [];
    await reader.read(filePath, (line) => lines.push(line));
    const entries = lineSelection(lines, moment(), parser.parse);
    const stats = statsGeneration(entries, threshold*120);
    logger.logInfos(stats.mostVisitedSections, stats.errorSections, stats.requestNumberAlert, terminal.log, terminal.updateStatus);
  }, 10000);
}

foxlog();