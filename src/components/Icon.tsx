import { parse } from "node-html-parser";

type IconProps = {
  icon: string;
  [x: string]: string;
};

const Icon = ({ icon, ...rest }: IconProps) => {
  const path = `/src/assets/icons/${icon}.svg`;
  const files = import.meta.glob("/src/assets/icons/*.svg", {
    as: "raw",
    eager: true,
  });

  if (!(path in files)) {
    throw new Error(`${path} not found`);
  }

  const root = parse(files[path]);

  const svg = root.querySelector("svg")!;

  const { attributes, innerHTML } = svg;

  return <svg {...attributes} {...rest} innerHTML={innerHTML} />;
};

export default Icon;
