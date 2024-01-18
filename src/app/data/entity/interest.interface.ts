export interface IInterestModel {
  image: string;
  title: string;
  subtitle: string;
  link: string;
  rows?: number;
  cols?: number;
}
export class InterestModel implements IInterestModel {
  image = "";
  title = "";
  subtitle = "";
  link = "";
  rows = 1;
  cols = 1;
}
