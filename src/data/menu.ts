import { IMenuModel } from "./entity/menu.interface";

export const menuItems: IMenuModel[] = [
  {
    icon: "home",
    title: "Home",
    link: "/",
    subtitle: "Sweet Home Alabama",
    description: "Get back to where you started from...",
    image: "",
  },
  /*  {
    icon: "precision_manufacturing",
    title: "AI Playground",
    link: "/AI-Playground",
    subtitle: "AI is upon us..",
    description: "Playing about with Hugging Face",
    image: "",
  },*/
  {
    icon: "work",
    title: "Experience",
    link: "/experience",
    subtitle: "Work & Achievements",
    description:
      "Wanna know what I've been up to professionally during my 13+ years of working in tech?  Read more here...",
    image: "experience.jpeg",
  },
  {
    icon: "build",
    title: "Projects",
    link: "/projects",
    subtitle: "Things I've done...",
    description:
      "A showcase for some of my work, from Admin applications, to maps and much much more...",
    image: "project.jpeg",
  },
  {
    icon: "bathtub",
    title: "Philosophy",
    link: "/philosophy",
    subtitle: "Coding Style",
    description:
      "What I've found to be my favorite patterns and organizational principals to follow",
    image: "philosophy.jpg",
  },
  {
    icon: "school",
    title: "Qualifications",
    link: "/pualifications",
    subtitle: "Education",
    description:
      "It's been a while, but I did go to university, many moons ago...",
    image: "education.jpeg",
  },
  {
    icon: "straighten",
    title: "Interests",
    link: "/interests",
    subtitle: "Spare time fun",
    description:
      "Wanna find out what makes me tick outside of creating awesome Frontend Web Applications..?",
    image: "guitar.jpg",
  },
];
