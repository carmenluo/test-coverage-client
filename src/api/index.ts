import axios from "axios";

const url = "https://test-coverage-report.herokuapp.com/reports";

export const getReport = () => axios.get(url);

export const getPrReports = () => axios.get(`${url}/prs`);

export const getBaseReports = () => axios.get(`${url}/base`);
