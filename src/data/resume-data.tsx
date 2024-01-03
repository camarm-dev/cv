import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

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
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Groupe scolaire du Sacré-Coeur Vercel",
      degree: "Elementary school and \"collège\" (comprehensive school).",
      start: "2016",
      end: "2023",
    },
    {
      school: "Lycée Pasteur",
      degree: "High School",
      start: "2023",
      end: "Today",
    }
  ],
  work: [
    {
      company: "Mmicro",
      link: "https://mmicro.fr",
      badges: ["Testing period"],
      title: "Trainee",
      logo: ParabolLogo,
      start: "2022",
      end: "2022",
      description:
        "Discovered professional world. Enhenced my skills about hardware and client relation.",
    },
    {
      company: "Labse Software",
      link: "https://labse.camarm.fr",
      badges: ["Remote"],
      title: "Open Source Developer",
      logo: ClevertechLogo,
      start: "2020",
      end: "2024",
      description:
        "Developed Open Source projects for my fictive company: Labse Software. Technologies: Python, Typescript, Vue, SQL, Mongodb.",
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "VueJs",
    "Node.js",
    "SQL",
    "Python",
    "Ruby",
  ],
  projects: [
    {
      title: "Remède",
      techStack: [
        "TypeScript",
        "IonicFramework",
        "Vite",
        "SQL",
        "Python",
        "Mobile App"
      ],
      description: "A french offline dictionary.",
      logo: ConsultlyLogo,
      link: {
        label: "remede.camarm.fr",
        href: "https://remede.camarm.fr",
      },
    },
    {
      title: "Avantages Jeunes Mobile",
      techStack: ["Side Project", "TypeScript", "IonicFramework", "Python", "Mobile App"],
      description:
        "Mobile application for the \"Avantages Jeunes\" card. Let you browse advantages and discount around you.",
      logo: MonitoLogo,
      link: {
        label: "camarm-dev/bfc-avantagesjeunes-mobile",
        href: "https://gtihub.com/camarm-dev/bfc-avantagesjeunes-mobile",
      },
    },
  ],
} as const;
