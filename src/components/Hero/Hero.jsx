import CircleShadow from "@components/CircleShadow";
import styles from "./Hero.module.css";

const Hero = ({ children, title }) => {
  return (
    <div className={`pt-10 relative text-center `}>
      <h1 className={`heading mt-10 font-semibold ${styles.heading}`}>
        {title}
      </h1>
      <CircleShadow
        className={`inset-x-0 m-auto -mt-18 bg-(--color-primary)`}
      />
      <div className={`text-(--text-secondary) mt-10`}>{children}</div>
    </div>
  );
};

export default Hero;
