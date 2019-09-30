import LogEntry from "../interfaces/LogEntry";
import Section from "../interfaces/Section";
import Statistics from "../interfaces/Statistics";

export const isStatusError = (status: string) => {
  return Number(status) >= 400;
}

export const getSectionPath = (path: string) => {
  return `/${path.split("/")[1]}`;
}

const generateSectionsArr = (entries: Array<LogEntry>) => {
  const sections: Array<Section> = entries.reduce<Array<Section>>((arr, entry) => {
    const sectionPath = getSectionPath(entry.path);
    const idx = arr.findIndex((section) => section.path === sectionPath);
    if(idx !== -1){
      arr[idx].requestsNumber += 1;
      if(isStatusError(entry.status)) arr[idx].errorsNumber += 1;
    }else{
      arr.push({
        path: sectionPath,
        requestsNumber: 1,
        errorsNumber: isStatusError(entry.status) ? 1 : 0
      })
    }
    return arr;
  }, []);
  return sections;
}

const generateTresholdTrafficAlert = (entries: Array<LogEntry>, requestsThreshold : number) : number | null => {
  if(entries.length >= requestsThreshold) return entries.length;
  else return null;
}


const generate = ({last10Seconds, last2Minutes} : {last10Seconds: Array<LogEntry>, last2Minutes: Array<LogEntry>}, threshold: number) : Statistics => {
  const sections = generateSectionsArr(last10Seconds);
  return {
    mostVisitedSections: sections.sort((a, b) => b.requestsNumber - a.requestsNumber).filter((sec, idx) => idx < 3),
    errorSections: sections.filter((sec) => sec.errorsNumber > 0).sort((a, b) => b.errorsNumber - a.errorsNumber),
    requestNumberAlert: generateTresholdTrafficAlert(last2Minutes, threshold)
  }
}

export default generate;