import Image from "next/image";
import { NavItems } from "./nav.items";
import { NavMobile } from "./nav.mobile";
import "./nav.scss";

export function Nav() {
  return (
    <nav className="main-nav">
      <div className="main-nav__logo">
        <Image priority src="/logo.png" height="60" width="60" alt="Logo" />
      </div>
      <div className="-spacer" />
      <ul className="main-nav__items">
        <NavItems />
      </ul>
      <NavMobile />
    </nav>
  );
}
