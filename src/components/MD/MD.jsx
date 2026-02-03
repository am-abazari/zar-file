"use client";
import MDEditor, { commands } from "@uiw/react-md-editor";
import { useState } from "react";

// styles
import "./md.css";

// components
import CircleShadow from "@components/CircleShadow";
import Dialog from "@components/Dialog/Dialog";

// helper
import shareNote from "@helper/ShareNote";

const CommandsConfig = [
  commands.bold,
  commands.italic,
  commands.divider,
  commands.image,
  commands.quote,
  commands.divider,
  commands.code,
  commands.codeBlock,
  commands.divider,
  commands.table,
];

const MD = ({ preview = "preview" }) => {
  const [value, setValue] = useState("");

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
        extraCommands={[
          commands.codeEdit,
          commands.codeLive,
          commands.codePreview,
          commands.divider,
          commands.fullscreen,
          commands.divider,
          shareNote,
        ]}
      />
      <Dialog status={true}>salam</Dialog>
    </>
  );
};

export default MD;
