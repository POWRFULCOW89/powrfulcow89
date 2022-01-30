import { technologies, repositories } from "./consts";
import fs from "fs";

// Functions

const Title = (text: string, level: number) => {
  const tag = `h${level}`;
  return `<${tag} align="center">${text}</${tag}>`;
};

const P = (text: string) => {
  return `<p align='center' style='font-size:1.2rem;' >${text}</p>`;
};

const Divider = () => {
  return `<div style='width: 100%; border: 1px solid gray;margin-bottom:20px; background-color:gray;'></div>`;
};

const Center = (text: string, style = "") => {
  return `<div style="display:flex;justify-content:center;align-items:center;flex-wrap:wrap;${style}">${text}</div>`;
};

const Techs = () => {
  let badges = technologies
    .map((tech) => {
      let title: string, logo: string;
      let badgeStyle = "for-the-badge";
      let imageStyle = "";

      // there are some techs whose logo don't match with the name
      if (typeof tech === "string") {
        title = tech;
        logo = tech.split("-")[0].toLowerCase();
      } else {
        title = tech.name;
        logo = tech.logo;
      }

      // TODO: Cache in case of server downtime
      //   fetch(
      //     `https://img.shields.io/badge/${title}?style=${badgeStyle}&logo=${logo}&logoColor=white`
      //   ).then((file) => {
      //     fs.writeFileSync(`./techs/${logo}.svg`, file.data.pipe(fs.createWriteStream()));
      //   });

      return `<img style="${imageStyle}" src="https://img.shields.io/badge/${title}?style=${badgeStyle}&logo=${logo}&logoColor=white">`;
    })
    .sort()
    .join("\n");

  return `<div align='center' style="gap:10px;">${badges}</div>`;
};

const Widgets = (type: string) => {
  let color = "1e7ffe";
  let bgColor = "0d1117";
  let style = "";
  switch (type) {
    case "languages":
      return `<img style=${style} align='center' src='https://github-readme-stats.vercel.app/api/top-langs/?username=POWRFULCOW89&layout=compact&hide=html,css,scss&langs_count=6&theme=dark&bg_color=#${bgColor}' alt='My most used languages' />`;
    case "streak":
      return `<img style=${style} align='center' src='https://github-readme-streak-stats.herokuapp.com/?user=POWRFULCOW89&theme=dark&background=${bgColor}&stroke=${color}&ring=${color}&fire=${color}&currStreakLabel=${color}' alt='Some of my work stats' />`;
    default:
      return "";
  }
};

const Repos = () => {
  let sorted = repositories.sort((a, b) => (b.length > a.length ? 0 : 1));

  return `<div align='center'>${sorted.map(
    (repo) =>
      `<a href='https://github.com/POWRFULCOW89/${repo}' target='_blank' rel='noopener noreferrer'><img align='center' src='https://github-readme-stats.vercel.app/api/pin/?username=POWRFULCOW89&repo=${repo}' alt='Link to my repo "${repo}"'/></a>`
  )}</div>`;
};

// Main
const finalReadme = [
  Title("Hello there 👋, I'm Diego", 1),
  Title("A Full-Stack developer from 🇲🇽", 2),
  Divider(),
  Title("About me", 2),
  P(
    "Midnight bug squasher. Professional coffee drinker. Hobbyist human being."
  ),
  //   Divider(),
  Title("Techs I ♥", 3),
  Center(Techs(), "margin:10px;"),
  //   Divider(),
  Title("Some random numbers 📊", 3),
  Center(Widgets("languages") + Widgets("streak"), "flex-direction:column"),
  //   Divider(),
  // Title("A bit of my work 💯", 3),
  // Repos(),
];

fs.writeFileSync("./README.md", finalReadme.join("\n"));

// console.log(finalReadme);
