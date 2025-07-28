import {
  AJCIcon,
  DuleLogo,
  ElevedirectLogo,
  LabseIcon,
  MagooleLogo,
  MMicroLogo,
  RemedeIcon,
  PapillonLogo,
  SkinSoftLogo
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
      company: "SkinSoft",
      link: "https://skinsoft.fr",
      badges: ["Testing period"],
      title: "Trainee",
      logo: SkinSoftLogo,
      start: "June 2024",
      end: "July 2024",
      description:
          "Realization of a POC application to manage database tables (with a CRUD) and web-based tools for the company's employees to start docker applications.",
    },
    {
      company: "PapillonApp",
      link: "https://getpapillon.xyz",
      badges: ["Remote"],
      title: "Open Source Developer & Reverse Engineer",
      logo: PapillonLogo,
      start: "2023",
      end: "Today",
      description:
          "Verified contributor and member of the Papillon project; the best school life native client compatible with your ENT.",
    },
    {
      company: "Labse Studio",
      link: "https://labse.camarm.fr",
      badges: ["Remote"],
      title: "Open Source Developer",
      logo: LabseIcon,
      start: "2020",
      end: "Today",
      description:
        "Through my self-employed business, Labse Studio, I help independent projects (open source projects, associations, etc.) with their online presence and work processes.",
    },
    {
      company: "Mmicro",
      link: "https://mmicro.fr",
      badges: ["Testing period"],
      title: "Trainee",
      logo: MMicroLogo,
      start: "November 2022",
      end: "December 2022",
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
      description: "A french and english offline dictionary. Supports multiple languages. Cross-platform. Rimes, plurals, pronunciations and more...",
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
      title: "La Plante QR",
      active: false,
      techStack: ["Python", "Flask", "PWA", "MongoDB", "QR Code"],
      description:
          "Entrepreneurship project made possible thanks to my school. I created the web application and I also managed a whole production team. Winners of the <i>Sustainable Development Award</i> at the Festival des Minientreprises.",
      logo: MagooleLogo,
      link: {
        label: "github.com/minientreprise-scv",
        href: "https://github.com/minientreprise-scv/app",
      },
    },
  ],
} as const;
