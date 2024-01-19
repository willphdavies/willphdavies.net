import Image from "next/image";
import "./item.scss";
import Link from "next/link";
import { ReactNode } from "react";

interface ItemProps {
  title: string;
  subtitle: string;
  extra?: string;
  description: ReactNode;
  image: string;
  link: string;
  avatar?: string;
}
export function Item(props: ItemProps) {
  const { title, subtitle, description, image, link, avatar, extra } = props;
  return (
    <Link className="common-item" key={link} href={link}>
      <div className="common-item__container">
        <div className="container__header">
          {avatar && <Image src={avatar} width={40} height={40} alt={title} />}
          <div className="header__text">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            {extra && <h5>{extra}</h5>}
          </div>
        </div>
        <div
          className="container__img"
          style={{ backgroundImage: `url(/${image})` }}
        />
        <div className="container__description">
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
