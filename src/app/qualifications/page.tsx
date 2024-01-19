import { TemplatDefault } from "@/common";
import { Qualifications } from "@/common/qualifications";

export default function PageProjects() {
  return (
    <TemplatDefault
      mast={
        <div>
          <h1>Qualifications</h1>
        </div>
      }
      backgroundSrc="/qualifications.jpg"
    >
      <Qualifications />
    </TemplatDefault>
  );
}
