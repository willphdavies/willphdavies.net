import { TemplatDefault } from "@/common";
import { Experiences } from "@/common/experiences";
import { Interests } from "@/common/interests";

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
