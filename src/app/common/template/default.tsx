import { ReactNode } from "react";
import { Nav } from "..";
import "./default.scss";

interface TemplatDefaultProps {
  children: ReactNode;
  backgroundSrc?: string;
}
export function TemplatDefault(props: TemplatDefaultProps) {
  const { children, backgroundSrc } = props;
  return (
    <main
      className="template-default"
      style={{ backgroundImage: `url(${backgroundSrc})` }}
    >
      <header>
        <Nav />
      </header>
      <section>{children}</section>
    </main>
  );
}
