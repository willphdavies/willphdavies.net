"use client";

import { IconButton } from "@mui/material";
import { NavItems } from "./nav.items";
import Image from "next/image";
import { useState } from "react";

export function NavMobile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton className="main-nav-mobile" onClick={() => setOpen(true)}>
        <span className="material-icons">menu</span>
      </IconButton>
      {open && (
        <div className="main-nav-mobile-overlay" onClick={() => setOpen(false)}>
          <aside className={`main-nav-mobile-aside`}>
            <div className="main-nav-mobile-aside__header">
              <div className="header__logo">
                <Image src="/logo.png" height={30} width={30} alt="Logo" />
              </div>
              <h3>William Davies</h3>
              <h4>Cloud Specialist</h4>
            </div>
            <ul className="main-nav-mobile-aside__items">
              <NavItems />
            </ul>
          </aside>
        </div>
      )}
    </>
  );
}
