import { notFound } from "next/navigation";
import Image from "next/image";

// api
import useDownload from "@api/useDownload";

// images
import find from "@images/404.png";

//components
import CircleShadow from "@components/CircleShadow";
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
    <div className={"grow self-stretch flex justify-center items-center"}>
      <div className="flex  bg-(--color-white-blur) w-full lg:p-20 p-5 rounded-4xl shadow-lg backdrop-blur-xl justify-center items-center flex-wrap-reverse gap-5">
        <div
          className={
            "grid gap-5 relative text-(--text-secondary) lg:text-left text-center"
          }
        >
          <h3
            style={{ fontSize: "var(--size-extra-large)" }}
            className={"text-(--text-primary) text-[80px] font-extralight"}
          >
            <span>Downloading</span>
          </h3>
          <div
            style={{ fontSize: "var(--size-medium)" }}
            className={"grid gap-3"}
          >
            <p className={"font-bold italic"}>
              Your File Started Downloading ...
            </p>
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
          <CircleShadow className={"bg-blue-500 inset-y-0 left-0 m-auto"} />
        </div>
        <div className={"relative"}>
          <Image src={find} alt={""} />
          <CircleShadow
            size={"small"}
            className={"bg-yellow-600 inset-y-0 left-0 m-auto"}
          />
        </div>
      </div>
    </div>
  );
};
export default Page;
