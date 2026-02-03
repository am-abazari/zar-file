// api
import api from "@axios/axiosServer";

const download = async (batchID) => {
  return await api.post(`/download/`, { batchID });
};
export default download;
