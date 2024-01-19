import { TemplatDefault } from "@/common/layout/default";
import "./page.scss";
import { menuItems } from "@/data";
import { Item } from "@/common/item/item";
import { Avatar } from "@/common/avatar";

export default function Home() {
  const time = new Date().getFullYear() - new Date(2008, 1, 1).getFullYear();
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
          <div className="content__about">
            <Avatar src="/me.jpg" />
            <article>
              <p>
                Hi there, my name is William Davies and I am passionate about
                everything Web! I have been working in the tech industry for
                over {time} years and still enjoy building Web Applications as
                much as I did when I started. Things move fast these days, and
                even faster in tech. With developments such as AI, The Cloud and
                so much more besides, it's sometimes difficult for companies to
                keep up. My ultimate goal in all projects is to always find the
                simplest solution.
              </p>
            </article>
            <div>
              <span className="material-icons">format_quote</span>
              <h2>
                <i>Simplicity does not precede complexity, but follows it...</i>
              </h2>
            </div>
          </div>
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
          {[1, 2, 3].map((c) => (
            <div key={`filler-${c}`} className="empty-item" />
          ))}
        </div>
      </div>
    </TemplatDefault>
  );
}
