import { TemplatDefault } from "./common/template/default";

export default function Home() {
  return (
    <TemplatDefault backgroundSrc="/cloud.jpeg">
      <div className="page-home">
        <div className="page-home__mast"></div>
        <div className="page-home__content"></div>
      </div>
    </TemplatDefault>
  );
}
