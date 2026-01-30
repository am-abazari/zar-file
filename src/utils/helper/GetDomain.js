const GetDomain = () => {
  return typeof window !== "undefined" ? window.location.origin : "";
};
export default GetDomain;
