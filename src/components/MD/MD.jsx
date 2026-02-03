"use client";
import MDEditor, { commands } from "@uiw/react-md-editor";
import { useState } from "react";

// styles
import "./md.css";
import CircleShadow from "@components/CircleShadow";

const MD = ({ preview = "preview" }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <CircleShadow />
      <MDEditor
        value={value}
        visibleDragbar={false}
        onChange={setValue}
        // commands={[commands.codeBlock, commands.image]}
        enableScroll={false}
        preview={preview}
      />
    </>
  );
};

export default MD;
