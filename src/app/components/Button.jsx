import clsx from "clsx";

const Button = ({className, variant = "fill", children, icon, ...props}) => {

    const styles = {
        "border": "border border-(--color-primary) text-(--text-secondary) hover:bg-(--color-primary) hover:text-(--text-secondary-light)",
        "fill": "bg-(--color-primary) text-(--text-secondary-light) hover:bg-(--color-primary-dark)",
    }

    return (
        <button
            className={clsx(className, styles[variant], "px-8 py-2 rounded-lg  transition-all cursor-pointer text-center flex items-center justify-center gap-3")} {...props}>
            {icon}
            {children}
        </button>
    )
}


export default Button