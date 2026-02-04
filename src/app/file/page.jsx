"use client";

import { useEffect, useState } from "react";

// components
import Hero from "@components/Hero/Hero";
import File from "@components/File/File";
import CircleShadow from "@components/CircleShadow";
import Button from "@components/Button";
import Dialog from "@components/Dialog/Dialog";
import Fail from "@components/Upload/Fail";
import LinkCopy from "@components/LinkCopy/LinkCopy";
import Card from "@components/Card";

// icons
import MaterialSymbolsArrowUploadProgressRounded from "@icons/MaterialSymbolsArrowUploadProgressRounded";
import MaterialSymbolsUploadRounded from "@icons/MaterialSymbolsUploadRounded";
import UUIDSetter from "@helper/UUIDSetter";
import LineMdDownloadingLoop from "@icons/LineMdDownloadingLoop";

// api
import upload from "@api/client/upload";

// utils
import GetDomain from "@utils/helper/GetDomain";

// constants
const InitialApiResponse = {
  success: false,
  error: false,
};

const Page = () => {
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [response, setResponse] = useState(InitialApiResponse);

  // dialog handling
  const [dialogOpen, setDialogOpen] = useState(false);
  const closeHandler = () => setDialogOpen(false);
  const openHandler = () => setDialogOpen(true);

  const fileInputHandler = (e) => {
    setFiles(UUIDSetter(e.target.files));
    openHandler();
  };

  useEffect(() => {
    if (!files.length) setDialogOpen(false);
    setUploaded(false);
    setResponse(InitialApiResponse);
  }, [files]);

  const deleteHandler = (uuid) => {
    setFiles(files.filter((f) => f.uuid !== uuid));
  };

  const uploadHandler = async () => {
    setIsUploading(true);

    try {
      const Response = await upload(files);
      if (Response.status === 200) {
        setResponse({
          success: Response.data.batchId,
          error: false,
        });
      }
    } catch (error) {
      setResponse({
        success: false,
        error: error.message,
      });
    } finally {
      setIsUploading(false);
      setUploaded(true);
    }
  };

  return (
    <>
      <Hero
        title={
          <>
            <span className={`text-(--text-primary) font-bold`}>Upload</span>{" "}
            <span className={"text-2xl text-(--text-primary) font-thin"}>
              &
            </span>{" "}
            <span className={`text-(--text-primary) font-bold`}>Download</span>{" "}
            <br /> Your Files and Share them With Links
          </>
        }
      >
        Upload your files quickly and manage them with ease in one secure place.
        Share your content through simple links that allow others to download
        files instantly, without sign-ups or unnecessary steps. Designed for
        speed and simplicity, this page helps you upload, access, and share your
        files anytime, from any device, with full control over your content.
      </Hero>

      <div className={"flex flex-wrap gap-5 w-full mt-32"}>
        <Card
          titleColor={"text-(--color-primary)"}
          title={<>Upload Instantly</>}
        >
          Upload your files in seconds with a smooth, hassle-free interface. No
          complicated steps, no waiting—just drag, drop, and your files are
          ready to share immediately. Designed to save you time and make file
          management effortless.
        </Card>
        <Card
          titleColor={"text-(--color-primary)"}
          title={<>One Link, All Files</>}
        >
          Combine all your uploaded files into a single, easy-to-share link.
          Send it to anyone, anywhere, without worrying about multiple
          attachments or lost files. Sharing your content has never been simpler
          or more organized.
        </Card>

        <div
          className={
            "mt-15 relative basis-(--size-mobile-medium) grow border rounded-xl border-dashed border-(--color-primary-light) border-spacing-40 bg-(--color-white-blur) backdrop-blur-xl p-8 py-16  hover:bg-(--color-whiter-blur) transition-all"
          }
        >
          <h3
            style={{ fontSize: "var(--size-large)" }}
            className={
              "font-bold text-(--text-primary) flex justify-center items-center gap-4"
            }
          >
            <span className={"text-3xl"}>
              <MaterialSymbolsArrowUploadProgressRounded />
            </span>{" "}
            UPLOAD
          </h3>
          <div
            style={{ fontSize: "var(--size-medium)" }}
            className={"mt-5 text-(--text-secondary)  text-center"}
          >
            <p>
              <b>Click Here</b> to Upload or drag and drop
            </p>
            <p>SVG, PNG, ZIP, ...</p>
          </div>
          <input
            onChange={fileInputHandler}
            type="file"
            className={
              "absolute w-full h-full left-0 top-0 cursor-pointer z-10 opacity-0"
            }
            draggable={true}
            multiple={true}
          />
        </div>
        <CircleShadow size={"big"} className={`mt-36`} />
      </div>

      {/* Links */}
      <Dialog size={"fit"} status={dialogOpen} close={closeHandler}>
        {response.success ? (
          <LinkCopy
            title={"Files Uploaded Successfully !"}
            domain={GetDomain()}
            link={`download/${response.success}`}
          />
        ) : response.error ? (
          <Fail close={closeHandler} response={response.error} />
        ) : (
          <div className="flex justify-center flex-wrap items-center gap-5 mt-10">
            <Button
              show={!uploaded}
              disabled={isUploading}
              onClick={uploadHandler}
              variant={"fill"}
              icon={
                isUploading ? (
                  <LineMdDownloadingLoop className={"text-xl rotate-180"} />
                ) : (
                  <MaterialSymbolsUploadRounded className={"text-xl"} />
                )
              }
              className={`basis-64`}
            >
              {!isUploading && "Upload All"}
            </Button>
            <Button
              show={!isUploading && !uploaded}
              status={"danger"}
              onClick={() => setFiles([])}
              variant={"border"}
              className={`basis-48`}
            >
              Clear All
            </Button>
          </div>
        )}
        {!uploaded && (
          <div className={"w-full mt-10 flex gap-4 flex-wrap"}>
            {files.map((file) => (
              <File
                deleteHandler={deleteHandler}
                key={file.uuid}
                id={file.uuid}
                file={file}
                lock={isUploading || uploaded}
              />
            ))}
          </div>
        )}
      </Dialog>
    </>
  );
};

export default Page;
