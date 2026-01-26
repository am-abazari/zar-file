'use client'

import { useState} from "react";
import {v4 as uuidv4} from "uuid";

// components
import Hero from "@components/Hero/Hero";
import File from "@components/File";
import CircleShadow from "@components/CircleShadow";

// icons
import MaterialSymbolsArrowUploadProgressRounded from "@icons/MaterialSymbolsArrowUploadProgressRounded";

const Page = () => {
    const [files, setFiles] = useState([]);

    const fileInputHandler = (e) => {
        const tempFiles = []
        for (let i = 0; i < e.target.files.length; i++) {
            tempFiles.push(e.target.files[i]);
        }
        setFiles(tempFiles);
    };

    return (
        <>
            <Hero title={<><span
                className={`text-(--text-primary) font-bold`}>Upload</span> <span
                className={"text-2xl text-(--text-primary) font-thin"}>&</span> <span
                className={`text-(--text-primary) font-bold`}>Download</span> <br/> Your Files and Share them With
                Links</>}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium asperiores autem commodi
                consequuntur, officiis pariatur velit! Adipisci aliquam aliquid aperiam dolorem, excepturi minus
                provident repudiandae saepe unde vero. Ad commodi cumque dignissimos dolorem, in libero minus
                mollitia,
                natus officia, perferendis praesentium quae quas quidem quo saepe sit unde. Atque, cumque?
            </Hero>



            <div className={"flex flex-wrap gap-5 w-full mt-32"}>
                <div
                    className={"basis-(--size-mobile-medium) grow bg-(--color-white-blur) rounded-xl p-8 shadow-lg backdrop-blur-xl"}>
                    <h3 className={"font-bold text-(--text-primary) text-xl"}>Fast Uploading</h3>
                    <p className={"mt-4 text-(--text-secondary) text-justify"}> Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Aliquid amet consectetur deserunt impedit incidunt, laudantium nemo, nisi
                        optio, possimus quasi quia recusandae tenetur voluptatem. Id iure minus quia quo sequi!</p>
                </div>
                <div
                    className={"basis-(--size-mobile-medium) grow bg-(--color-white-blur) rounded-xl p-8 shadow-lg backdrop-blur-xl"}>
                    <h3 className={"font-bold text-(--text-primary) text-xl"}>Slow Uploading</h3>
                    <p className={"mt-4 text-(--text-secondary) text-justify"}> Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Aliquid amet consectetur deserunt impedit incidunt, laudantium nemo, nisi
                        optio, possimus quasi quia recusandae tenetur voluptatem. Id iure minus quia quo sequi!</p>
                </div>
                <div
                    className={"mt-15 basis-(--size-mobile-medium) grow border rounded-xl border-dashed border-(--color-primary-light) border-spacing-40 bg-(--color-white-blur) backdrop-blur-xl p-8 py-16"}>
                    <h3 className={"font-bold text-(--text-primary) text-xl flex justify-center items-center gap-4"}>
                        <span className={"text-3xl"}><MaterialSymbolsArrowUploadProgressRounded/></span> UPLOAD</h3>
                    <div className={'mt-5 text-(--text-secondary) leading- text-center'}>
                        <p><b>Click Here</b> to Upload or drag and drop</p>
                        <p>SVG, PNG, ZIP, ...</p>
                    </div>
                    <input onChange={fileInputHandler} type="file"
                           className={'absolute w-full h-full left-0 top-0 opacity-0'} draggable={true}
                           multiple={true}/>
                </div>
                <CircleShadow size={"small"} className={"bg-red-900 mt-50"}/>
            </div>
            <div className={"w-full mt-10 flex gap-4 flex-wrap"}>
                {files.map(file => (<File key={uuidv4()} file={file} />))}
            </div>


        </>
    )
}


export default Page;