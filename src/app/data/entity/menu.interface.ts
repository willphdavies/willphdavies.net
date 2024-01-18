export interface IMenuModel {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  image: string;
}
export class MenuModel implements IMenuModel {
  icon = "";
  title = "";
  subtitle = "";
  description = "";
  link = "";
  image = "";
}
