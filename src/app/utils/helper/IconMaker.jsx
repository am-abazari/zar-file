import {memo, useEffect, useRef, useState} from "react";

// icons
import Category from "@icons/Category";

// configs
import formats from "@configs/formats";

const IconMaker = ({type, setTheme}) => {
    let [component, setComponent] = useState(<Category.File/>);
    let theme = ("#4EB6AB")


    for (let i = 0; i < Object.keys(formats).length; i++) {
        const key = Object.keys(formats)[i];
        const value = formats[key];
        if (value.endsWith.includes(type)) {
            setComponent(value.component)
            theme = value.theme;
            break
        }
    }


    useEffect(() => {
        setTheme(`border-[${theme}]`)
    }, [])
    return (<>{component}</>)
}

export default memo(IconMaker)