import { observable, action, makeAutoObservable } from "mobx";
import { getBaseReport, getPrReports } from "../actions/reports";

export class ReportStore {
  baseReport: Array<any> = [];
  prReports: Array<any> = [];

  constructor() {
    makeAutoObservable(this);
  }
  loadBaseReport = async () => {
    const baseReport = await getBaseReport();
    // console.log(baseReport);
    this.baseReport = baseReport;
  };
  loadPrReports = async () => {
    const prReports = await getPrReports();
    this.prReports = prReports;
  };
}
