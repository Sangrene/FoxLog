import moment from "moment";
import LogEntry from "../interfaces/LogEntry";

const selectLinesForAnalysis = (lines: Array<string>, atTime: moment.Moment, parse: (line: string) => LogEntry)  => {
  const entries : {
    last10Seconds: Array<LogEntry>;
    last2Minutes: Array<LogEntry>;
  } = lines.reduce(({last10Seconds, last2Minutes}, line) => {
    const entry = parse(line);
    if(entry){
      const diff = atTime.diff(entry.time, "second");
      if(diff >= 0){
        if(diff <= 10)
          last10Seconds.push(entry);
        if(diff <= 120)
          last2Minutes.push(entry); 
      }
    }
    
    return {
      last10Seconds,
      last2Minutes
    }
  }, {last10Seconds: [], last2Minutes: []});

  return entries;
}

export default selectLinesForAnalysis;