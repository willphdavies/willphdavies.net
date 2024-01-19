import { Mast } from "@/common/mast/mast";
import { TemplatDefault } from "@/common/layout/default";
import "./page.scss";
import { menuItems } from "@/data";
import { Item } from "@/common/item/item";

export default function Home() {
  return (
    <TemplatDefault
      mast={
        <div>
          <h1>William Davies</h1>
          <h2>Javascript Cloud Applications</h2>
        </div>
      }
      backgroundSrc="/cloud.jpeg"
    >
      <div className="page-home">
        <div className="page-home__content">
          {menuItems
            .filter((item) => item.link !== "/")
            .map((item) => (
              <Item
                key={item.link}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            ))}
        </div>
      </div>
    </TemplatDefault>
  );
}
