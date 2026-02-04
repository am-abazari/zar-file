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
        Write and share notes effortlessly with full Markdown support. Create
        rich, formatted content in seconds and share it instantly via a live
        link. Everyone with the link can view your note in real time, making
        collaboration, updates, and information sharing fast, simple, and
        seamless. Perfect for quick memos, guides, or any text you want to share
        without extra steps.
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
            Create Once, Share Everywhere
          </h3>
          <p className={"mt-4 text-(--text-secondary) text-justify"}>
            {" "}
            Write your note once and share it instantly with anyone, anywhere.
            One live link gives access to your note across devices, making
            sharing and collaboration seamless and hassle-free.
          </p>
        </div>
        <div
          className={
            "basis-(--size-mobile-medium) grow bg-(--color-white-blur) rounded-xl p-8 shadow-lg backdrop-blur-xl"
          }
        >
          <h3 className={"font-bold text-(--text-primary) text-xl"}>
            Markdown Made Easy
          </h3>
          <p className={"mt-4 text-(--text-secondary) text-justify"}>
            {" "}
            Format your notes effortlessly using Markdown. Add headings, lists,
            links, and more without any complicated tools, keeping your content
            structured and easy to read.
          </p>
        </div>
        <div
          className={
            "basis-(--size-mobile-medium) grow bg-(--color-white-blur) rounded-xl p-8 shadow-lg backdrop-blur-xl"
          }
        >
          <h3 className={"font-bold text-(--text-primary) text-xl"}>
            Share Only With Who You Want
          </h3>
          <p className={"mt-4 text-(--text-secondary) text-justify"}>
            {" "}
            Control who can see your notes. Keep them private for select people
            or share publicly with a link—your content stays under your control
            at all times.
          </p>
        </div>
        <div
          className={
            "basis-(--size-mobile-medium) grow bg-(--color-white-blur) rounded-xl p-8 shadow-lg backdrop-blur-xl"
          }
        >
          <h3 className={"font-bold text-(--text-primary) text-xl"}>
            Real-Time Access
          </h3>
          <p className={"mt-4 text-(--text-secondary) text-justify"}>
            {" "}
            Anyone with the link sees updates instantly. Edit your notes and
            watch changes appear live, ensuring everyone is always on the same
            page without delays.
          </p>
        </div>
        <CircleShadow size={"big"} className={`mt-36`} />
      </div>
    </>
  );
};

export default Page;
