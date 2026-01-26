import Link from "next/link";

import clsx from "clsx";

const Button = ({className, variant = "fill", children, icon, type = "button", ...props}) => {


    const styles = {
        "border": "border border-(--color-primary) text-(--text-secondary) hover:bg-(--color-primary) hover:text-(--text-secondary-light)",
        "fill": "bg-(--color-primary) text-(--text-secondary-light) hover:bg-(--color-primary-dark)",
    }

    const initialCLasses = "px-8 w-max py-2 rounded-lg  transition-all cursor-pointer text-center flex items-center justify-center gap-3"

    if (type == "link") return (
        <Link
            className={clsx(className, styles[variant], initialCLasses)} {...props}>
            {icon}
            {children}
        </Link>
    )
    else return (
        <button
            className={clsx(className, styles[variant], initialCLasses)} {...props}>
            {icon}
            {children}
        </button>
    )
}


export default Button