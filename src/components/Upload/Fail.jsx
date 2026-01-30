import Button from "@components/Button";

const Fail = ({ response, close }) => {
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

      <Button
        variant={"border"}
        status={"danger"}
        className={"m-auto mt-10"}
        onClick={close}
      >
        Back
      </Button>
    </div>
  );
};
export default Fail;
