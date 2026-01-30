import clsx from "clsx";
import { useState } from "react";

//icons
import MaterialSymbolsContentCopy from "@icons/MaterialSymbolsContentCopy";
import MaterialSymbolsCheck from "@icons/MaterialSymbolsCheck";

// styles
import styles from "./Success.module.css";

// functions
import sleep from "@functions/sleep";

// helper
import copyText from "@helper/CopyText";

const Success = ({ response, domain }) => {
  const DOWNLOAD_URL = `${domain}/download/${response}`;

  const [copied, setCopied] = useState(false);

  const copyHandler = async () => {
    try {
      await copyText(DOWNLOAD_URL);
      setCopied(true);
      await sleep(2000);
      setCopied(false);
    } catch (error) {
      console.warn(error);
      setCopied(false);
    }
  };
  return (
    <div className="md:p-10 p-3">
      <p className={clsx(`font-bold text-(--text-success)`, styles.message)}>
        Files Uploaded Successfully !
      </p>
      <button className={"mt-14 w-full"}>
        <p className={clsx("font-bold mb-4 text-left", styles.share)}>
          Share URL :{" "}
        </p>
        <div className={"flex gap-2 w-full items-center"} onClick={copyHandler}>
          <div
            className={clsx(
              " cursor-pointer bg-(--color-whiter-blur) md:p-5 p-2 rounded-lg grow text-left",
              styles.link,
            )}
          >
            {DOWNLOAD_URL}
          </div>
          <div
            className={clsx(
              `md:p-5 p-2 rounded-lg border border-dashed transition`,
              copied
                ? "border-(--color-success) bg-(--color-success)/15"
                : "border-transparent bg-(--color-whiter-blur) ",
              styles.copy,
            )}
          >
            {copied ? (
              <MaterialSymbolsCheck className={"text-(--text-success)"} />
            ) : (
              <MaterialSymbolsContentCopy />
            )}
          </div>
        </div>
      </button>
      <div></div>
    </div>
  );
};

export default Success;
