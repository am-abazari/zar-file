const Fail = ({ response }) => {
  return (
    <div>
      <p
        className={
          "text-xl text-(--text-danger-light) font-bold text-center mb-10 mt-15"
        }
      >
        An Error Occurred While Uploading Files
      </p>
      <p className={"text-center font-bold "}>{response}</p>
    </div>
  );
};
export default Fail;
