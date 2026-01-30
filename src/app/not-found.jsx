import Image from "next/image";

// images
import find from "@images/404.png";

//components
import CircleShadow from "@components/CircleShadow";
import Button from "@components/Button";
const Page = () => {
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
            <span className={"font-bold"}>404</span> ERROR
          </h3>
          <div style={{ fontSize: "var(--size-medium)" }}>
            <p className={"font-bold italic"}>
              Ooops, you{"'"}ve lost in Space!{" "}
            </p>
            <p>
              This page you are trying to access doesn{"'"}t exist or has been
              moved;
              <br />
              Try going back to our Homepage
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
