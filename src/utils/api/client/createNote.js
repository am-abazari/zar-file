// api
import api from "@axios/axiosClient";

const createNote = async (noteID, content) => {
  return await api.post(`/note/${noteID}`, {
    content,
  });
};
export default createNote;
