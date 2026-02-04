// components
import Hero from "@components/Hero/Hero";
import CircleShadow from "@components/CircleShadow";
import Button from "@components/Button";
import Card from "@components/Card";

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
        <Card
          titleColor={"text-(--color-primary)"}
          title={<>Create Once, Share Everywhere</>}
        >
          Write your note once and share it instantly with anyone, anywhere. One
          live link gives access to your note across devices, making sharing and
          collaboration seamless and hassle-free.
        </Card>
        <Card
          titleColor={"text-(--color-primary)"}
          title={<> Markdown Made Easy</>}
        >
          Format your notes effortlessly using Markdown. Add headings, lists,
          links, and more without any complicated tools, keeping your content
          structured and easy to read.
        </Card>
        <Card
          titleColor={"text-(--color-primary)"}
          title={<>Share Only With Who You Want</>}
        >
          Control who can see your notes. Keep them private for select people or
          share publicly with a link—your content stays under your control at
          all times.
        </Card>
        <Card
          titleColor={"text-(--color-primary)"}
          title={<>Real-Time Access</>}
        >
          Anyone with the link sees updates instantly. Edit your notes and watch
          changes appear live, ensuring everyone is always on the same page
          without delays.
        </Card>

        <CircleShadow size={"big"} className={`mt-36`} />
      </div>
    </>
  );
};

export default Page;
