import clsx from "clsx";

const Card = ({ className, children, title, icon, ...props }) => {
  return (
    <div
      className={clsx(
        "grow basis-(--size-mobile-medium) p-7 bg-(--color-white-blur) backdrop-blur-xl rounded-2xl shadow-lg",
      )}
    >
      <h3 className={`font-bold text-xl flex gap-5 items-center`}>
        <span
          className={
            "border rounded-full p-3 border-dashed border-(--color-primary) text-justify"
          }
        >
          {icon}
        </span>
        <span>{title}</span>
      </h3>
      <div
        className={clsx(className, "mt-6 text-left text-(--text-secondary)")}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
