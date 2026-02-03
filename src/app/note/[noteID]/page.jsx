// components
import MD from "@components/MD/MD";

// functions
import previewValidate from "@functions/previewValidate";

// api
import getNote from "@api/server/getNote";

// Constants
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const Page = async ({ searchParams, params }) => {
  if (!API_URL || !API_VERSION)
    throw new Error("No API BASE Or API VERSION variable");

  let preview = previewValidate((await searchParams).show);
  let noteID = (await params).noteID;

  let content;
  try {
    content = await getNote(noteID);
  } catch (error) {
    console.warn(error);
  }

  return (
    <div className="w-full grow pt-10">
      <MD
        preview={preview}
        content={content?.data?.content}
        noteID={noteID}
      ></MD>
    </div>
  );
};

export default Page;
