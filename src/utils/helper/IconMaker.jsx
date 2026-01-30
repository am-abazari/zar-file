import { memo, useEffect } from "react";

// configs
import formats from "@configs/formats";
import { DEFAULT_ICON, DEFAULT_THEME } from "@configs/constants";

function resolveIcon(type) {
  for (const key in formats) {
    const value = formats[key];
    if (value.endsWith.includes(type)) {
      return {
        Icon: value.component,
        theme: value.theme,
      };
    }
  }

  return {
    Icon: DEFAULT_ICON,
    theme: DEFAULT_THEME,
  };
}

const IconMaker = ({ type, setTheme }) => {
  const { Icon, theme } = resolveIcon(type);

  useEffect(() => {
    setTheme(theme);
  }, [theme, setTheme]);

  return <Icon />;
};

export default memo(IconMaker);
