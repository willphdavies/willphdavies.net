import { IPhilosophyModel } from "./entity";

export const philosophyItems: IPhilosophyModel[] = [
  {
    image: "structure.png",
    title: "Coding Structure",
    subtitle: "C'mon Man! Get Organized",
    link: "/Philosophy/Structure",
    cols: 2,
    rows: 1,
  },
  {
    image: "dry.png",
    title: "Don't Repeat Yourself vs Repeatable Patterns",
    subtitle:
      "The Don't Repeat Yourself mantra of coding is important, but is it always the best idea..?",
    link: "/Philosophy/Dry",
    cols: 2,
    rows: 1,
  },
  {
    image: "deeplinking.jpg",
    title: "Deep Linking",
    subtitle: "Refresh the page, stay where you are..",
    link: "/Philosophy/DeepLinking",
    rows: 2,
    cols: 1,
  },
  {
    image: "mockdata.png",
    title: "Free the Frontend!",
    subtitle: "Still waiting on your colleague to write that API...?",
    link: "/Philosophy/Mockdata",
    rows: 2,
    cols: 1,
  },
  {
    image: "documentation.jpg",
    title: "Documentation? Yawwwwwn",
    subtitle: "Auto generated docs are your friend.",
    link: "/Philosophy/Documentation",
    cols: 1,
    rows: 1,
  },
  {
    image: "testing.jpg",
    title: "Unit Testing DOES work",
    subtitle: "And isn't it satisfying to see those green checkmarks..?",
    link: "/Philosophy/UnitTesting",
    cols: 1,
    rows: 1,
  },
  {
    image: "e2e.jpg",
    title: "End2End Testing",
    subtitle: "Whose job is it anyway...?",
    link: "/Philosophy/E2eTesting",
    cols: 1,
    rows: 1,
  },
  {
    image: "deploy.jpg",
    title: "Production Release",
    subtitle: "Ok, ship it!",
    link: "/Philosophy/Deployment",
    cols: 1,
    rows: 1,
  },
];
