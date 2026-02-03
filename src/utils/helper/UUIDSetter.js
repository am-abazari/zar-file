import NanoID from "@functions/nanoID";

const UUIDSetter = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    array[i].uuid = NanoID(8);
    output.push(array[i]);
  }

  return output;
};

export default UUIDSetter;
