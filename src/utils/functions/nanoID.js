import { customAlphabet } from "nanoid";
const alphabet =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const NanoID = (len = 6) => {
  const nanoid6 = customAlphabet(alphabet, 6);
  return nanoid6();
};

export default NanoID;
