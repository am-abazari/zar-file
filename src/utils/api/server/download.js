// api
import api from "@axios/axiosServer";

const download = async (batchId) => {
  return await api.get(`/download/${batchId}`);
};
export default download;
