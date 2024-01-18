export interface IExperienceModel {
  company: string;
  role: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
  start: Date;
  end: Date | null;
}
export class ExperienceModel implements IExperienceModel {
  company = "";
  role = "";
  description = "";
  link = "";
  image = "";
  tags = [];
  start = new Date();
  end = null;
}
