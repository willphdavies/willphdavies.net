import Link from "next/link";
import { menuItems } from "@/data";

export function NavItems() {
  return (
    <>
      {menuItems.map((item) => (
        <li key={item.link}>
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </>
  );
}
