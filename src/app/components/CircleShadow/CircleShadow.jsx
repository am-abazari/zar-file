import clsx from "clsx";
import styles from "./CircleShadow.module.css";
const CircleShadow = ({width, height, className, ...props}) => {

    return (
        <div className={clsx(className,styles.CircleShadow, "-z-1 bg-blue-400 rounded-full blur-(--blur-circle) m-auto absolute")} {...props}></div>
    )

}

export default CircleShadow;