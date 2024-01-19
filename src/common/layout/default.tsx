import { ReactNode } from "react";
import { Nav } from "..";
import "./default.scss";
import { Mast } from "../mast/mast";

interface TemplatDefaultProps {
  children: ReactNode;
  backgroundSrc: string;
  mast: ReactNode;
}
export function TemplatDefault(props: TemplatDefaultProps) {
  const { children, backgroundSrc, mast } = props;
  return (
    <main className="template-default">
      <Mast backgroundSrc={backgroundSrc}>
        <header>
          <Nav />
        </header>
        {mast}
      </Mast>
      <section>{children}</section>
    </main>
  );
}
