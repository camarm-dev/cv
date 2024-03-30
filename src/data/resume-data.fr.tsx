import {
  AJCIcon,
  DuleLogo,
  ElevedirectLogo,
  LabseIcon,
  MagooleLogo,
  MMicroLogo,
  RemedeIcon,
  PapillonLogo
} from "@/images/logos";

import { GitHubIcon } from "@/components/icons";
import { Coffee } from "lucide-react";

export const RESUME_DATA = {
  name: "Armand CAMPONOVO",
  initials: "AC",
  location: "Etalans, France, CET",
  locationLink: "https://www.google.com/maps/place/Etalans",
  about:
    "Lycéen, développeur et apprenti sysadmin. Je créé des projets open source depuis 2020 !",
  summary:
    "Je suis un jeune développeur qui aime coder sur son temps libre. J'adore créer des applications open source, les déployer et les maintenir. J'aime aussi contribuer à des projets qui me tiennent à coeur.",
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
      degree: "Seconde générale. Prépare les options Math, Physique et NSI.",
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
      company: "PapillonApp",
      link: "https://getpapillon.xyz",
      badges: ["Remote"],
      title: "Open Source Developer & Reverse Engineer",
      logo: PapillonLogo,
      start: "2023",
      end: "Aujourd'hui",
      description:
        "Contributeur vérifié et membre du projet Papillon; le meilleur client mobile de vie scolaire, compatible avec votre ENT.",
    },
    {
      company: "Labse Software",
      link: "https://labse.camarm.fr",
      badges: ["Remote"],
      title: "Open Source Developer",
      logo: LabseIcon,
      start: "2020",
      end: "Aujourd'hui",
      description:
        "Développement de projets Open Source pour mon entreprise fictive: Labse Software. Technologies: Python, Typescript, Vue, SQL, Mongodb.",
    },
    {
      company: "Mmicro",
      link: "https://mmicro.fr",
      badges: ["Stage"],
      title: "Stagiaire",
      logo: MMicroLogo,
      start: "Novembre 2022",
      end: "Décembre 2022",
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
      title: "Homelab",
      active: true,
      techStack: [
        "Proxmox",
        "SSH",
        "Docker",
        "KVM",
        "LXC"
      ],
      description: "Détenteur d'un serveur de la gamme Dell depuis 2021, je déploie et administre mes propres services et applications. J'ai pu apprendre à créer une solution d'hébergement simple, stable et évolutive pour mes projets !",
      logo: RemedeIcon,
      link: {
        label: "",
        href: "",
      },
    },
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
        "(Inactif) Projet de découverte de l'entrepreneuriat organisé par mon collège. J'ai créé l'application Web mais j'ai aussi pu manager une équipe de production. Gagnant du <i>Prix Développement Durable</i> au Festival des Minientreprises.",
      logo: MagooleLogo,
      link: {
        label: "github.com/minientreprise-scv",
        href: "https://github.com/minientreprise-scv/app",
      },
    },
  ],
} as const;
