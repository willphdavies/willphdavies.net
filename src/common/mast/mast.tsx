import { ReactNode } from "react";
import "./mast.scss";
interface MastProps {
  children: ReactNode;
  backgroundSrc: string;
}
export function Mast(props: MastProps) {
  const { children, backgroundSrc } = props;
  return (
    <div
      className="common-mast"
      style={{ backgroundImage: `url(${backgroundSrc})` }}
    >
      <div className="common-mast__container">{children}</div>
    </div>
  );
}
