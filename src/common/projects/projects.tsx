import { CircularProgress } from "@mui/material";
import { ProjectsGrid } from "./projects.grid";
import "./projects.scss";
import { IProjectModel } from "@/data";
interface ProjectsProps {
  items: IProjectModel[];
}
export function Projects(props: ProjectsProps) {
  const { items } = props;
  return (
    <div className="view-projects">
      <ProjectsGrid items={items} />
    </div>
  );
}
