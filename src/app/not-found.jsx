// images
import find from "@images/404.png";

//components
import Button from "@components/Button";

// layouts
import MessageLayout from "@layouts/MessageLayout";

const Page = () => {
  return (
    <MessageLayout img={find}>
      <h3
        style={{ fontSize: "var(--size-extra-large)" }}
        className={"text-(--text-primary) text-[80px] font-extralight"}
      >
        <span className={"font-bold"}>404</span> ERROR
      </h3>
      <div style={{ fontSize: "var(--size-medium)" }}>
        <p className={"font-bold italic"}>Ooops, you{"'"}ve lost in Space! </p>
        <p className={"mt-4"}>
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
    </MessageLayout>
  );
};

export default Page;
