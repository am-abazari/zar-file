const previewValidate = (preview) => {
  switch (preview) {
    case "preview":
      return preview;
    case "live":
      return preview;
    case "edit":
      return preview;
    default:
      return "live";
  }
};

export default previewValidate;
