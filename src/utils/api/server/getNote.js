// api
import api from "@axios/axiosServer";

const getNote = async (noteID) => {
  return await api.get(`/note/${noteID}`);
};
export default getNote;
