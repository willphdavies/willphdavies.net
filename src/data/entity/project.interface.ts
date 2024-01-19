export interface IProjectModel {
  title: string;
  subtitle: string;
  link: string;
  image: string;
  cols: number;
  rows: number;
}

export class ProjectModel implements IProjectModel {
  title = "";
  subtitle = "";
  link = "";
  image = "";
  cols = 1;
  rows = 1;
}
