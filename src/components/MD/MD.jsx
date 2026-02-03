"use client";
import MDEditor, { commands } from "@uiw/react-md-editor";
import { useState } from "react";

// styles
import "./md.css";
import CircleShadow from "@components/CircleShadow";

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
      />
    </>
  );
};

export default MD;
