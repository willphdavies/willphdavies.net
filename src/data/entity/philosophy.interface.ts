export interface IPhilosophyModel {
  title: string;
  subtitle: string;
  link: string;
  image: string;
  cols: number;
  rows: number;
}
export class PhilosophyModel implements IPhilosophyModel {
  title = "";
  subtitle = "";
  link = "";
  image = "";
  cols = 1;
  rows = 1;
}
