import {useState} from "react";
import clsx from "clsx";


//styles
import styles from "./File.module.css";

// helper
import IconMaker from "@helper/IconMaker";

// icons
import BitcoinIconsCrossOutline from "@icons/BitcoinIconsCrossOutline";

const File = ({file, ...props}) => {
    const split = file.name.split(".");
    const type = split[split.length - 1].toLowerCase();
    const [theme, setTheme] = useState("");

    return (
        <div style={{borderColor: theme}}
             className={clsx(styles.file, " flex justify-between items-center basis-72 grow p-5 rounded-lg backdrop-blur-xl shadow-lg bg-(--color-white-blur) border border-dashed md:text-base text-sm  ")} {...props}>
            <div className={"flex items-center gap-3"}><span className={"text-xl "}><IconMaker setTheme={setTheme}
                                                                                               type={type}/></span>
                <p>{file.name}</p></div>
            <button
                className={clsx(styles.delete, "text-(--color-danger) border border-(--color-danger) rounded-md p-0.5 text-sm cursor-pointer")}>
                <BitcoinIconsCrossOutline/></button>
        </div>
    )
}


export default File