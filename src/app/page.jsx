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
import Hero from "@components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero
        title={
          <>
            The{" "}
            <span className={`text-(--text-primary) font-bold`}>
              Open-Source
            </span>{" "}
            <br /> Platform for Uploading and Downloading Files
          </>
        }
      >
        This platform provides a simple and efficient way to share content
        instantly. Users can upload any number of files and receive a single
        shareable link, making it easy to send files to others without
        limitations or complicated steps. In addition, the platform allows users
        to create custom notes and share them through a live link, enabling
        real-time access and updates. Everything is designed to be fast,
        lightweight, and accessible, so sharing files or notes becomes seamless
        and hassle-free across different devices and use cases.
        <div className="flex gap-6 justify-center items-center mt-16 flex-wrap">
          <Button
            type={"link"}
            href={"/file"}
            className={"basis-66"}
            variant={"fill"}
            icon={<ZondiconsBolt />}
          >
            Start Using Zar File
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

      <div className="flex flex-wrap gap-5 mt-36 ">
        <CircleShadow size={"big"} className={`mt-36`} />
        <Card
          icon={<MaterialSymbolsFolderSpecialRounded />}
          title={"File Share"}
        >
          <div>
            <p>
              Upload and share multiple files effortlessly in one place.
              Generate a single secure link for all your files and share it
              instantly with others. No limits, no complicated steps—just fast
              and reliable file sharing whenever you need it.
            </p>
            <Button
              type={"link"}
              href={"/file"}
              className={"mt-5 ml-auto text-sm"}
            >
              Upload File
            </Button>
          </div>
        </Card>
        <Card icon={<FluentNote16Filled />} title={"Note Share"}>
          <div>
            <p>
              Create and share notes instantly with a live link. Write anything
              you want and let others view your note in real time, with updates
              reflected immediately. A simple and fast way to share text without
              downloads or extra steps.
            </p>
            <Button
              type={"link"}
              href={"/note"}
              className={"mt-5 ml-auto text-sm"}
            >
              Create Note
            </Button>
          </div>
        </Card>
        <Card icon={<MaterialSymbolsCloudLockRounded />} title={"Secure"}>
          <div>
            <p>
              Your files and notes are protected with strong security measures
              to ensure privacy and safe access. Share content confidently,
              knowing that your data remains secure and accessible only to those
              with the link.
            </p>
          </div>
        </Card>
        <Card
          icon={<SolarGallerySendLineDuotone />}
          title={
            <>
              Private <span className="font-thin text-sm">&</span> Public Share
            </>
          }
        >
          <div>
            <p>
              Choose how you share your content with full control. Keep your
              files and notes private for selected users, or make them public
              with a shareable link. Flexible sharing options designed to fit
              different needs and situations.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
