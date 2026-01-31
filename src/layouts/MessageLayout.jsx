import Image from "next/image";

//components
import CircleShadow from "@components/CircleShadow";

const MessageLayout = ({ children, img, ...props }) => {
  return (
    <div className={"grow self-stretch flex justify-center items-center"}>
      <div className="flex  justify-center bg-(--color-white-blur) w-full lg:p-20 p-5 rounded-4xl shadow-lg backdrop-blur-xl items-center flex-wrap-reverse gap-5">
        <div
          {...props}
          className={
            "grid gap-5 relative text-(--text-secondary) lg:text-left text-center"
          }
        >
          {children}
          <CircleShadow className={"bg-blue-500 inset-y-0 left-0 m-auto"} />
        </div>
        <div className={"relative"}>
          <Image className={""} width={500} src={img} alt={""} />
          <CircleShadow
            size={"small"}
            className={"bg-yellow-600 inset-y-0 left-0 m-auto"}
          />
        </div>
      </div>
    </div>
  );
};
export default MessageLayout;
