"use client";

// images
import error from "@images/error.png";

//components
import Button from "@components/Button";

// layouts
import MessageLayout from "@layouts/MessageLayout";

const Page = () => {
  return (
    <MessageLayout img={error}>
      <h3
        style={{ fontSize: "var(--size-extra-large)" }}
        className={"text-(--text-danger-light) text-[80px] font-bold"}
      >
        ERROR
      </h3>
      <div style={{ fontSize: "var(--size-medium)" }}>
        <p className={"font-bold italic"}>
          Ooops, Some unexpected error occurred in Server...!
        </p>
        <p className={"mt-4"}>
          Please report this issue to support and try again later
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
    </MessageLayout>
  );
};

export default Page;
