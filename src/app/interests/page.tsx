"use client";
import { TemplatDefault } from "@/common";
import dynamic from "next/dynamic";
const Interests = dynamic(
  () => {
    return import("@/common/interests");
  },
  { ssr: false }
);

export default function PageInterests() {
  return (
    <TemplatDefault
      mast={
        <div>
          <h1>Interests</h1>
        </div>
      }
      backgroundSrc="/guitar.jpg"
    >
      <Interests />
    </TemplatDefault>
  );
}
