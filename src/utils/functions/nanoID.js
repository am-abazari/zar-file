import { customAlphabet } from "nanoid";
const alphabet =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const NanoID = (len = 6) => {
  const nanoid6 = customAlphabet(alphabet, len);
  return nanoid6();
};

export default NanoID;
