import Link from "next/link";

import clsx from "clsx";

const Button = ({
  className,
  variant = "fill",
  children,
  icon,
  type = "button",
  status = "primary",
  ...props
}) => {
  const styles = {
    border: `border  `,
    fill: ` text-(--text-secondary-light) `,
  };
  const statuses = {
    primary:
      variant === "border"
        ? "border-(--color-primary)  hover:bg-(--color-primary) text-(--text-secondary) hover:text-(--text-secondary-light)"
        : "bg-(--color-primary) hover:bg-(--color-primary-dark) text-(--text-secondary) hover:text-(--text-secondary-light)",
    danger:
      variant === "border"
        ? `border border-transparent hover:border-(--color-danger-light) text-(--color-danger-light)`
        : "",
    warning: "",
    success: "",
  };

  const initialCLasses =
    "px-8 w-max py-2 rounded-lg  transition-all cursor-pointer text-center flex items-center justify-center gap-3";

  if (type === "link")
    return (
      <Link
        className={clsx(
          styles[variant],
          statuses[status],
          initialCLasses,
          className,
        )}
        {...props}
      >
        {icon}
        {children}
      </Link>
    );
  else
    return (
      <button
        className={clsx(
          styles[variant],
          statuses[status],
          initialCLasses,
          className,
        )}
        {...props}
      >
        {icon}
        {children}
      </button>
    );
};

export default Button;
