"use client";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

// styles
import "./md.css";

// components
import CircleShadow from "@components/CircleShadow";
import Dialog from "@components/Dialog/Dialog";

// helper
import shareNote from "@helper/ShareNote";

// configs
import { CommandsConfig, ExtraCommandsConfig } from "@configs/MDEditor";

const MD = ({ preview = "preview" }) => {
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
        <h3></h3>
      </Dialog>
    </>
  );
};

export default MD;
