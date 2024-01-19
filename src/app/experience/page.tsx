import { TemplatDefault } from "@/common";
import { Experiences } from "@/common/experiences";

export default function PageExperience() {
  return (
    <TemplatDefault
      mast={
        <div>
          <h1>Professional Experience</h1>
        </div>
      }
      backgroundSrc="/experience.jpeg"
    >
      <Experiences />
    </TemplatDefault>
  );
}
