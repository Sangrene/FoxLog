import Section from "../interfaces/Section";
import { isNumber } from "util";

const formatMostVisitedSectionsInfo = (sections: Array<Section>) => {
  if(sections.length > 0){
    return sections.reduce((acc, section) =>  acc + `${section.path}: ${section.requestsNumber} requests `, "Most visited sections -> ");
  }else{
    return "No traffic for the past 10 seconds...";
  }
}

const formatErrorSectionsInfo = (sections: Array<Section>) => {
  if(sections.length > 0){
    return sections.reduce((acc, section) => acc + `${section.path}: ${section.errorsNumber} `, "Section errors -> ");
  }else{
    return "No errors in the last 10 seconds...";
  }
}

const formatTraficThresholdAlert = (traficThresholdAlert: number) => {
  if(traficThresholdAlert){
    return `ALERT : ${traficThresholdAlert} requests in the last 2 minutes !`
  }else{
    return "No traffic alert for the past 2 minutes";
  }
}


const logInfos = (mostVisitedSections: Array<Section>, errorSections: Array<Section>, traficThresholdAlert: number | null, log: (text: string) => void, setStatus: (text: string, isAlert: boolean) => void) => {

  log(formatMostVisitedSectionsInfo(mostVisitedSections));
  log(formatErrorSectionsInfo(errorSections));
  setStatus(formatTraficThresholdAlert(traficThresholdAlert), isNumber(traficThresholdAlert));

}

export default {
  logInfos
}