import { notFound } from "next/navigation";

// images
import find from "@images/404.png";

// api
import useDownload from "@api/useDownload";

// layouts
import MessageLayout from "@layouts/MessageLayout";

//components
import Button from "@components/Button";

const Page = async ({ params }) => {
  const { batchId } = await params;

  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useDownload(batchId);
  } catch (error) {
    return notFound();
  }

  return (
    <MessageLayout img={find}>
      <h3
        style={{ fontSize: "var(--size-extra-large)" }}
        className={"text-(--text-primary) text-[80px] font-extralight"}
      >
        <span>Downloading</span>
      </h3>
      <div style={{ fontSize: "var(--size-medium)" }} className={"grid gap-3"}>
        <p className={"font-bold italic"}>Your File Started Downloading ...</p>
        <p>
          You Can Click on{" "}
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_VERSION}/download/${batchId}`}
            className={"font-bold text-(--text-primary)"}
          >
            ME
          </a>{" "}
          to Manual Download
        </p>
      </div>
      <Button
        style={{ fontSize: "var(--size-medium)" }}
        type={"link"}
        href={"/"}
        className={"lg:ml-0 m-auto lg:mt-20 mt-10"}
      >
        Go Home
      </Button>
    </MessageLayout>
  );
};
export default Page;
