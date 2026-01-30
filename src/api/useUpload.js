// api
import api from "@api/api";

const useUpload = async (files) => {
  const formData = new FormData();
  files.forEach((f) => {
    formData.append("file", f);
  });
  return await api.post("/upload/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export default useUpload;
