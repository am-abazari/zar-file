import clsx from "clsx";

const CircleShadow = ({className, size = "big", ...props}) => {

    const styles = {
        big: {width: "var(--size-circle-big)", height: "var(--size-circle-big)"},
        small: {width: "var(--size-circle-small)", height: "var(--size-circle-small)"},
    }

    return (
        <div style={styles[size]}
             className={clsx(className, styles.CircleShadow, "-z-1 rounded-full blur-(--blur-circle) m-auto absolute")} {...props}></div>
    )

}

export default CircleShadow;