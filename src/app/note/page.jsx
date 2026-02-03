// components
import MD from "@components/MD/MD";

// functions
import previewValidate from "@functions/previewValidate";

const Page = async ({ searchParams }) => {
  let preview = previewValidate((await searchParams).show);
  return (
    <div className="w-full grow pt-10">
      <MD preview={preview}></MD>
    </div>
  );
};

export default Page;
