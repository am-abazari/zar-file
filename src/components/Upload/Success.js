import clsx from "clsx";
import { useState } from "react";

//icons
import MaterialSymbolsContentCopy from "@icons/MaterialSymbolsContentCopy";
import MaterialSymbolsCheck from "@icons/MaterialSymbolsCheck";

// sleep
import sleep from "@functions/sleep";

const Success = ({ response, domain }) => {
  const DOWNLOAD_URL = `${domain}/download/${response}`;

  const [copied, setCopied] = useState(false);

  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText(DOWNLOAD_URL);
      setCopied(true);
      await sleep(2000);
      setCopied(false);
    } catch (error) {
      console.error(error);
      setCopied(false);
    }
  };
  return (
    <div className="p-10">
      <p className={" font-bold text-(--text-success) text-xl"}>
        Files Uploaded Successfully !
      </p>
      <button
        onClick={copyHandler}
        className={"flex gap-4 items-center mt-14 h-max w-full cursor-pointer"}
      >
        <p className={"font-bold"}>Copy URL : </p>
        <div
          className={"bg-(--color-whiter-blur) p-5 rounded-lg grow text-left"}
        >
          {DOWNLOAD_URL}
        </div>
        <div
          className={clsx(
            `p-5 rounded-lg border border-dashed transition`,
            copied
              ? "border-(--color-success) bg-(--color-success)/15"
              : "border-transparent bg-(--color-whiter-blur) ",
          )}
        >
          {copied ? (
            <MaterialSymbolsCheck className={"text-(--text-success)"} />
          ) : (
            <MaterialSymbolsContentCopy />
          )}
        </div>
      </button>
      <div></div>
    </div>
  );
};

export default Success;
