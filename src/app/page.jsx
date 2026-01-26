
// Components
import CircleShadow from "@components/CircleShadow";
import Button from "@components/Button";
import Card from "@components/Card";


// icons
import ZondiconsBolt from "@icons/ZondiconsBolt";
import GrommetIconsGithub from "@icons/GrommetIconsGithub";
import MaterialSymbolsFolderSpecialRounded from "@icons/MaterialSymbolsFolderSpecialRounded";
import FluentNote16Filled from "@icons/FluentNote16Filled";
import MaterialSymbolsCloudLockRounded from "@icons/MaterialSymbolsCloudLockRounded";
import SolarGallerySendLineDuotone from "@icons/SolarGallerySendLineDuotone";

export default function Home() {
    return (
        <div className={"pt-10 relative text-center"}>
            <h1 className={`heading mt-10 font-semibold`}>The <span
                className={`text-(--text-primary) font-bold`}>Open-Source</span> <br/> Platform for Uploading and
                Downloading Files</h1>
            <CircleShadow className={`inset-x-0 m-auto -mt-18 bg-(--color-primary)`}/>
            <p className={`text-(--text-secondary) mt-10`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium asperiores autem commodi
                consequuntur, officiis pariatur velit! Adipisci aliquam aliquid aperiam dolorem, excepturi minus
                provident repudiandae saepe unde vero. Ad commodi cumque dignissimos dolorem, in libero minus mollitia,
                natus officia, perferendis praesentium quae quas quidem quo saepe sit unde. Atque, cumque?</p>

            <div className="flex gap-6 justify-center items-center mt-16 flex-wrap">
                <Button type={"link"} href={"#"} className={'basis-66'} variant={"fill"} icon={<ZondiconsBolt/>}>Start
                    Using Zar File</Button>
                <Button type={"link"} href={"https://www.github.com/am-abazari/zar-file"} target={"_blank"}
                        className={'basis-48'} variant={"border"} icon={<GrommetIconsGithub/>}>Github</Button>
            </div>

            <div className="flex flex-wrap gap-5 mt-36 ">
                <CircleShadow size={"big"} className={`mt-36 bg-(--color-primary-light)`}/>
                <Card icon={<MaterialSymbolsFolderSpecialRounded/>} title={"File Share"}>
                    <div>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Atque, consequuntur, voluptatem. Aut laboriosam quas sed.
                            Consequuntur
                            error illum incidunt iure labore laboriosam mollitia nam provident sit tempore? Expedita,
                            possimus,
                            similique.
                        </p>
                        <Button type={"link"} href={"/file"} className={"mt-5 ml-auto text-sm"}>Upload File</Button>
                    </div>
                </Card>
                <Card icon={<FluentNote16Filled/>} title={"Note Share"}>
                    <div>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Atque, consequuntur, voluptatem. Aut laboriosam quas sed.
                            Consequuntur
                            error illum incidunt iure labore laboriosam mollitia nam provident sit tempore? Expedita,
                            possimus,
                            similique.
                        </p>
                        <Button type={"link"} href={"/notes"} className={"mt-5 ml-auto text-sm"}>Create Note</Button>
                    </div>
                </Card>
                <Card icon={<MaterialSymbolsCloudLockRounded/>} title={"Secure"}>
                    <div>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Atque, consequuntur, voluptatem. Aut laboriosam quas sed.
                            Consequuntur
                            error illum incidunt iure labore laboriosam mollitia nam provident sit tempore? Expedita,
                            possimus,
                            similique.
                        </p>
                    </div>
                </Card>
                <Card icon={<SolarGallerySendLineDuotone/ >} title={<>Private <span className='font-thin text-sm'>&</span> Public Share</>}>
                    <div>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Atque, consequuntur, voluptatem. Aut laboriosam quas sed.
                            Consequuntur
                            error illum incidunt iure labore laboriosam mollitia nam provident sit tempore? Expedita,
                            possimus,
                            similique.
                        </p>
                    </div>
                </Card>
            </div>

        </div>
    );
}
