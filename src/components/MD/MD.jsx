"use client";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

// styles
import "./md.css";

// components
import CircleShadow from "@components/CircleShadow";
import Dialog from "@components/Dialog/Dialog";
import LinkCopy from "@components/LinkCopy/LinkCopy";

// helper
import shareNote from "@helper/ShareNote";
import GetDomain from "@helper/GetDomain";

// configs
import { CommandsConfig, ExtraCommandsConfig } from "@configs/MDEditor";

const MD = ({ preview = "preview", noteID = "" }) => {
  const [value, setValue] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const closeHandler = () => setDialogOpen(false);

  return (
    <>
      <CircleShadow />
      <MDEditor
        value={value}
        visibleDragbar={false}
        onChange={setValue}
        commands={CommandsConfig}
        enableScroll={false}
        preview={preview}
        extraCommands={[...ExtraCommandsConfig, shareNote(setDialogOpen)]}
      />
      <Dialog
        close={closeHandler}
        shadow={false}
        status={dialogOpen}
        size={"large"}
      >
        <LinkCopy
          title={"Share Note"}
          domain={GetDomain()}
          link={`/note/${noteID}?show=preview`}
        ></LinkCopy>
      </Dialog>
    </>
  );
};

export default MD;
