import {useState} from "react";
import clsx from "clsx";

// helper
import IconMaker from "@helper/IconMaker";

const File = ({file, ...props}) => {
    const splitted = file.name.split(".");
    const type = splitted[splitted.length - 1].toLowerCase();

    const [theme, setTheme] = useState("");

    return (
        <div
            className={clsx(" flex gap-4 items-center basis-72 grow p-5 rounded-lg backdrop-blur-xl shadow-lg bg-(--color-white-blur) border border-dashed md:text-base text-sm  ", theme)} {...props}>
            <span className={"text-xl"}><IconMaker setTheme={setTheme} type={type}/></span>
            {file.name}
        </div>
    )
}


export default File