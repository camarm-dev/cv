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
    "Lycéen. Développeur et apprenti sysadmin. Je créé des projets open source depuis 2020 !",
  summary:
    "Je suis un jeune développeur qui aime coder sur son temps libre. J'adore créer des projets open source et les maintenir. J'aime aussi contribuer à des projets qui me tiennent à coeur. Avec mon expérience et à travers plusieurs projets, je sais désormais comment structurer, développer et déployer des applications !",
  avatarUrl: "/photo.jpeg",
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
      degree: "Lycée",
      start: "2023",
      end: "Aujourd'hui",
    },
    {
      school: "Groupe scolaire du Sacré-Coeur Vercel",
      degree: "École primaire et collège. DNB mention Très bien",
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
      badges: ["Stage"],
      title: "Stagiaire",
      logo: MMicroLogo,
      start: "2022",
      end: "2022",
      description:
          "Grâce à ce stage d'observation, j'ai pu découvrir le monde professionnel. J'ai améliorer mes compétences concernant le <i>hardware</i> et les relations clients.",
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
      description: "Un dictionnaire français, gratuit et open source !",
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
        "Application mobile pour la carte \"Avantages Jeunes\". Cela permet de parcourir les avantages disponibles autour de vous !",
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
        "Application mobile pour prendre des notes, ajouter des évènements à un calendrier et gérer des listes de tâches !",
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
        "(Archivé) Interface alternative à l'ENT \"Ecoledirecte\" qui permet de voir plus de données et analyses à propos des notes et qui améliore l'expérience utilisateur.",
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
        "(Inactif) Projet de découverte de l'entrepreneuriat organisé par mon collège. J'ai créé l'application Web mais j'ai aussi pu manager une équipe de production. Gagnant du <i>Prix Développement Durable</i>.",
      logo: MagooleLogo,
      link: {
        label: "github.com/minientreprise-scv",
        href: "https://github.com/minientreprise-scv/app",
      },
    },
  ],
} as const;
