import { v4 as uuidv4 } from "uuid";

const UUIDSetter = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    array[i].uuid = uuidv4();
    output.push(array[i]);
  }

  return output;
};

export default UUIDSetter;
