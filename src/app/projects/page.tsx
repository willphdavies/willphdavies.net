import { projectItems } from "@/data";
import { TemplatDefault } from "@/common";
import { Projects } from "@/common/projects";

export default function PageProjects() {
  return (
    <TemplatDefault
      mast={
        <div>
          <h1>Projects</h1>
        </div>
      }
      backgroundSrc="/project.jpeg"
    >
      <Projects items={projectItems} />
    </TemplatDefault>
  );
}
