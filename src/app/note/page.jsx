// components
import Hero from "@components/Hero/Hero";
import CircleShadow from "@components/CircleShadow";
import Button from "@components/Button";

// icons
import GrommetIconsGithub from "@icons/GrommetIconsGithub";
import MaterialSymbolsNoteStackRounded from "@icons/MaterialSymbolsNoteStackRounded";

// functions
import nanoID from "@functions/nanoID";

const Page = () => {
  return (
    <>
      <Hero
        title={
          <>
            <span className={`text-(--text-primary) font-bold`}>Create</span>{" "}
            <span className={"text-2xl text-(--text-primary) font-thin"}>
              &
            </span>{" "}
            <span className={`text-(--text-primary) font-bold`}>Share</span>{" "}
            <br /> Your Notes With Markdown
          </>
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        asperiores autem commodi consequuntur, officiis pariatur velit! Adipisci
        aliquam aliquid aperiam dolorem, excepturi minus provident repudiandae
        saepe unde vero. Ad commodi cumque dignissimos dolorem, in libero minus
        mollitia, natus officia, perferendis praesentium quae quas quidem quo
        saepe sit unde. Atque, cumque?
        <div className="flex gap-6 justify-center items-center mt-16 flex-wrap">
          <Button
            type={"link"}
            href={`/note/${nanoID(6)}`}
            className={"basis-66"}
            variant={"fill"}
            icon={<MaterialSymbolsNoteStackRounded />}
          >
            New Note
          </Button>
          <Button
            type={"link"}
            href={"https://www.github.com/am-abazari/zar-file"}
            target={"_blank"}
            className={"basis-48"}
            variant={"border"}
            icon={<GrommetIconsGithub />}
          >
            Github
          </Button>
        </div>
      </Hero>

      <div className={"flex flex-wrap gap-5 w-full mt-32"}>
        <div
          className={
            "basis-(--size-mobile-medium) grow bg-(--color-white-blur) rounded-xl p-8 shadow-lg backdrop-blur-xl"
          }
        >
          <h3 className={"font-bold text-(--text-primary) text-xl"}>
            Markdown Note
          </h3>
          <p className={"mt-4 text-(--text-secondary) text-justify"}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            amet consectetur deserunt impedit incidunt, laudantium nemo, nisi
            optio, possimus quasi quia recusandae tenetur voluptatem. Id iure
            minus quia quo sequi!
          </p>
        </div>
        <div
          className={
            "basis-(--size-mobile-medium) grow bg-(--color-white-blur) rounded-xl p-8 shadow-lg backdrop-blur-xl"
          }
        >
          <h3 className={"font-bold text-(--text-primary) text-xl"}>
            Simple Note
          </h3>
          <p className={"mt-4 text-(--text-secondary) text-justify"}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            amet consectetur deserunt impedit incidunt, laudantium nemo, nisi
            optio, possimus quasi quia recusandae tenetur voluptatem. Id iure
            minus quia quo sequi!
          </p>
        </div>
        <div
          className={
            "basis-(--size-mobile-medium) grow bg-(--color-white-blur) rounded-xl p-8 shadow-lg backdrop-blur-xl"
          }
        >
          <h3 className={"font-bold text-(--text-primary) text-xl"}>
            Secure Share
          </h3>
          <p className={"mt-4 text-(--text-secondary) text-justify"}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            amet consectetur deserunt impedit incidunt, laudantium nemo, nisi
            optio, possimus quasi quia recusandae tenetur voluptatem. Id iure
            minus quia quo sequi!
          </p>
        </div>
        <div
          className={
            "basis-(--size-mobile-medium) grow bg-(--color-white-blur) rounded-xl p-8 shadow-lg backdrop-blur-xl"
          }
        >
          <h3 className={"font-bold text-(--text-primary) text-xl"}>
            Public & Private Share
          </h3>
          <p className={"mt-4 text-(--text-secondary) text-justify"}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            amet consectetur deserunt impedit incidunt, laudantium nemo, nisi
            optio, possimus quasi quia recusandae tenetur voluptatem. Id iure
            minus quia quo sequi!
          </p>
        </div>
        <CircleShadow size={"big"} className={`mt-36`} />
      </div>
    </>
  );
};

export default Page;
