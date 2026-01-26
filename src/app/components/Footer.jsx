import Link from "next/link";

//components
import CircleShadow from "@components/CircleShadow";

//icons
import SolarProgrammingBroken from "@icons/SolarProgrammingBroken";

const Footer = () => {
    return (
        <>
            <footer
                className="mt-25 w-full p-8 bg-white/5 backdrop-blur-2xl shadow-xl rounded-2xl mb-3 sm:text-base text-sm">
                <CircleShadow size={"small"} className={`mt-20 bg-yellow-300 bottom-0 right-0 left-0 mx-auto`}/>
                <p className={"flex  items-center gap-3"}><SolarProgrammingBroken/> Developed by <Link target={"_blank"}
                                                                                                       className={"text-(--text-primary) font-semibold"}
                                                                                                       href={"https://www.amabazari.ir"}>Amirhossein
                    Abazari</Link></p>
            </footer>
        </>
    )
}


export default Footer