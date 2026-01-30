// api
import api from "@api/api";

const useDownload = async (batchId) => {
  return await api.get(`/download/${batchId}`);
};
export default useDownload;
