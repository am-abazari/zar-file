import clsx from "clsx";

// icons
import BitcoinIconsCrossOutline from "@icons/BitcoinIconsCrossOutline";

// components
import CircleShadow from "@components/CircleShadow";

/* [INFO]
custom : you should first set size = "custom" then use custom =" YOUR CUSTOM className FOR SIZE"
close : a function to close the dialog
status : true = dialog is open / false = dialog is close

Parent.jsx
const [open, setOpen] = useState(false)
const closeHandler = () => setOpen(false)

<Dialog close={closeHandler} status={open}> ... </Dialog>
 */

const Dialog = ({
  className,
  size = "medium",
  custom = "",
  children,
  close,
  status,
  shadow = true,
  ...props
}) => {
  const sizes = {
    full: "w-full h-full",
    medium: "w-100 min-h-72",
    small: "w-64 min-h-42",
    large: "w-160 min-h-100",
    fit: "w-full min-h-72",
    custom,
  };

  const closeHandler = (e) => {
    if (e.target === e.currentTarget) close();
  };

  if (status)
    return (
      <>
        <dialog
          onClick={closeHandler}
          {...props}
          className={clsx(
            `w-full h-full bg-black/10 top-0 left-0 fixed z-10 flex justify-center items-center text-(--text-secondary) backdrop-blur-md shadow-lg`,
            size === "fit" ? "px-(--size-fit)" : "p-1",
          )}
        >
          <div
            className={clsx(
              className,
              sizes[size],
              "bg-(--background)/95 backdrop-blur-xl p-5 rounded-xl max-h-(--dialog-height) relative overflow-y-auto",
            )}
          >
            {shadow && <CircleShadow />}
            <button
              className={"absolute top-4 right-4 text-xl cursor-pointer"}
              onClick={close}
            >
              <BitcoinIconsCrossOutline />
            </button>

            {children}
          </div>
        </dialog>
      </>
    );
};

export default Dialog;
