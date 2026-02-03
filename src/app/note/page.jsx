// components
import MD from "@components/MD/MD";

const Page = async ({ searchParams }) => {
  const preview = (await searchParams).preview;
  console.log(preview);
  return (
    <div className="w-full grow pt-10">
      <MD></MD>
    </div>
  );
};

export default Page;
