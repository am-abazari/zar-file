import { useRef, useState } from "react";
import clsx from "clsx";

//styles
import styles from "./File.module.css";

// helper
import IconMaker from "@helper/IconMaker";

// icons
import BitcoinIconsCrossOutline from "@icons/BitcoinIconsCrossOutline";

// functions
import sleep from "@functions/sleep";

const File = ({ file, deleteHandler, ...props }) => {
  const split = file.name.split(".");
  const type = split[split.length - 1].toLowerCase();
  const [theme, setTheme] = useState("");
  let link = useRef(null);

  const clickHandler = async () => {
    link.current.style.transform = "translateX(-100px)";
    link.current.style.opacity = "0";
    await sleep(200);
    deleteHandler(file.uuid);
  };

  return (
    <button
      ref={link}
      onClick={clickHandler}
      style={{ borderColor: theme }}
      className={clsx(
        styles.file,
        " cursor-pointer flex justify-between items-center basis-72 grow min-w-max p-5 rounded-lg backdrop-blur-xl shadow-lg bg-(--color-white-blur) border border-dashed md:text-base text-sm ",
      )}
      {...props}
    >
      <div className={"flex items-center gap-3"}>
        <span className={"text-xl "}>
          <IconMaker setTheme={setTheme} type={type} />
        </span>
        <p>{file.name}</p>
      </div>
      <div
        className={clsx(
          styles.delete,
          "text-(--color-danger) border border-(--color-danger) rounded-md p-0.5 text-sm",
        )}
      >
        <BitcoinIconsCrossOutline />
      </div>
    </button>
  );
};

export default File;
