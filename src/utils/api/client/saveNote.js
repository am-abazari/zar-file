// api
import api from "@axios/axiosClient";

const saveNote = async (noteID, content, signal) => {
  return await api.post(
    `/note/${noteID}`,
    {
      content,
    },
    { signal },
  );
};
export default saveNote;
