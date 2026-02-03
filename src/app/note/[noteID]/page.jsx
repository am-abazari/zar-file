// components
import MD from "@components/MD/MD";

// functions
import previewValidate from "@functions/previewValidate";

const Page = async ({ searchParams, params }) => {
  let preview = previewValidate((await searchParams).show);
  let noteID = (await params).noteID;
  console.log(noteID);
  return (
    <div className="w-full grow pt-10">
      <MD preview={preview} noteID={noteID}></MD>
    </div>
  );
};

export default Page;
