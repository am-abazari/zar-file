// api
import api from "@axios/axiosClient";

const upload = async (files) => {
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
export default upload;
