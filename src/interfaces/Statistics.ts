import Section from "./Section";

export default interface Statistics {
  mostVisitedSections: Array<Section>;
  errorSections: Array<Section>;
  requestNumberAlert: number | null;
}