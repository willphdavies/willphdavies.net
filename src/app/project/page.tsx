import { projectItems } from "@/data";
import { TemplatDefault } from "@/common";
import { Projects } from "@/common/projects";

/**
 * Experience View Component
 * @returns Wrapper for Experience sub-components (Grid and Filter)
 */
export default function Project() {
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
