import * as api from "../api/index";

export const getMostRecentReport = async () => {
  try {
    const { data } = await api.getReport();
    return data[data.length - 1];
  } catch (error) {
    console.log(error.message);
  }
};

export const getPrReports = async () => {
  try {
    const { data } = await api.getPrReports();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getBaseReport = async () => {
  try {
    const { data } = await api.getBaseReports();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// export const postReport = async () => {
//   try {
//     const data = await api.postReport();
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
