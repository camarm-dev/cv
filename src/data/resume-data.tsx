import {
  AJCIcon, DuleLogo,
  ElevedirectLogo,
  LabseIcon, MagooleLogo,
  MMicroLogo,
  RemedeIcon,
} from "@/images/logos";
import { GitHubIcon } from "@/components/icons";
import { Coffee } from "lucide-react";

export const RESUME_DATA = {
  name: "Armand CAMPONOVO",
  initials: "AC",
  location: "Etalans, France, CET",
  locationLink: "https://www.google.com/maps/place/Etalans",
  about:
    "Developer and growing sysadmin. I create and maintain open source projects since 2020.",
  summary:
    "I'm a young developer, who learned using Internet. Today, I love creating open source applications and maintain them. I also enjoy contributing to other's projects. With my experience, I know how to structure, develop, deploy and scale software.",
  avatarUrl: "https://avatars.githubusercontent.com/u/77529508?v=4",
  personalWebsiteUrl: "https://www.camarm.dev",
  contact: {
    email: "contact@camarm.dev",
    tel: "+33766760191",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/camarm-dev",
        icon: GitHubIcon,
      },
      {
        name: "Buy me a Coffee",
        url: "https://ko-fi.com/camarm",
        icon: Coffee,
      }
    ],
  },
  education: [
    {
      school: "Lycée Pasteur",
      degree: "High School",
      start: "2023",
      end: "Today",
    },
    {
      school: "Groupe scolaire du Sacré-Coeur Vercel",
      degree: "Elementary school and \"collège\" (comprehensive school).",
      start: "2016",
      end: "2023",
    }
  ],
  work: [
    {
      company: "Labse Software",
      link: "https://labse.camarm.fr",
      badges: ["Remote"],
      title: "Open Source Developer",
      logo: LabseIcon,
      start: "2020",
      end: "Today",
      description:
        "Developed Open Source projects for my fictive company: Labse Software. Technologies: Python, Typescript, Vue, SQL, Mongodb.",
    },
    {
      company: "Mmicro",
      link: "https://mmicro.fr",
      badges: ["Testing period"],
      title: "Trainee",
      logo: MMicroLogo,
      start: "2022",
      end: "2022",
      description:
          "Discovered professional world. Enhanced my skills about hardware and client relation.",
    }
  ],
  skills: [
    "VueJs",
    "Ionic",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Ruby",
    "SQL",
    "CouchDb",
    "Mongodb"
  ],
  projects: [
    {
      title: "Remède",
      active: true,
      techStack: [
        "TypeScript",
        "IonicFramework",
        "Vite",
        "SQL",
        "Python",
        "Mobile App"
      ],
      description: "A french offline dictionary.",
      logo: RemedeIcon,
      link: {
        label: "remede.camarm.fr",
        href: "https://remede.camarm.fr",
      },
    },
    {
      title: "Avantages Jeunes Mobile",
      active: true,
      techStack: ["Side Project", "TypeScript", "IonicFramework", "Python", "Mobile App"],
      description:
        "Mobile application for the \"Avantages Jeunes\" card. Let you browse advantages and discount around you.",
      logo: AJCIcon,
      link: {
        label: "camarm-dev/bfc-avantagesjeunes-mobile",
        href: "https://github.com/camarm-dev/bfc-avantagesjeunes-mobile",
      },
    },
    {
      title: "Dule",
      active: true,
      techStack: ["Side Project", "TypeScript", "IonicFramework", "CouchDB", "Express", "Mobile App"],
      description:
        "Mobile app to schedule events, reminders, take notes and create task lists !",
      logo: DuleLogo,
      link: {
        label: "withdule/dule",
        href: "https://github.com/withdule/dule",
      },
    },
    {
      title: "Elevedirect",
      active: false,
      techStack: ["Python", "Flask", "PWA"],
      description:
        "(Archived) Alternative UI to french school ENT (=VLE) \"Ecoledirect\" that shows more datas like averages and enhance use experience.",
      logo: ElevedirectLogo,
      link: {
        label: "elevedirect/app",
        href: "https://github.com/elevedirect/app",
      },
    },
    {
      title: "Magoole",
      active: false,
      techStack: ["Python", "Flask", "PWA", "DNS", "Ruby"],
      description:
        "(Inactive) Open source, free, and privacy respectful search engine with his own crawler, and robots !",
      logo: MagooleLogo,
      link: {
        label: "github.com/magoole",
        href: "https://github.com/magoole",
      },
    },
  ],
} as const;
