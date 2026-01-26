import CircleShadow from "@components/CircleShadow/CircleShadow";
import Button from "./components/Button";

export default function Home() {
    return (
        <div className={"pt-10 relative text-center"}>
            <h1 className={`heading mt-10 font-semibold leading-21`}>The <span
                className={`text-(--text-primary) font-bold`}>Open-Source</span> <br/> Platform for Uploading and
                Downloading Files</h1>
            <CircleShadow width={25} height={25} className={`inset-x-0 m-auto -mt-18 `}/>
            <p className={`text-(--text-secondary) mt-10`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium asperiores autem commodi
                consequuntur, officiis pariatur velit! Adipisci aliquam aliquid aperiam dolorem, excepturi minus
                provident repudiandae saepe unde vero. Ad commodi cumque dignissimos dolorem, in libero minus mollitia,
                natus officia, perferendis praesentium quae quas quidem quo saepe sit unde. Atque, cumque?</p>

            <div className="flex gap-6 justify-center items-center mt-16">
                <Button className={'basis-66'} variant={"fill"}>Start Using Zar File</Button>
                <Button className={'basis-48'} variant={"border"}>Github</Button>
            </div>


        </div>
    );
}
