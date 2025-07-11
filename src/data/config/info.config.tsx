import { Icons } from "@/components/icons";

import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jason Rohith Alva",
  description: " A software engineer",
  profileImageUrl: "/me.jpg",
  initials: "profile",
  github: "https://github.com/JasonAlva",
  leetcode: "https://leetcode.com/u/_jasonalva_/",
  resume:
    "https://drive.google.com/file/d/1U47wWOOpXRekR7OLiLnPpT7PQKIDEkgN/view?usp=drive_link",
  bio: "Hey there! I'm an aspiring full-stack developer on a hands-on journey through the world of web development, machine learning, and everything in between. From designing interactive front-ends with React to building solid back-end APIs and exploring the logic behind intelligent systems, I'm constantly learning, building, and improving. I believe growth comes from getting my hands dirty with real projects—some work, some break, but all teach something new.",

  education: [
    {
      school: "SLJ PU College",
      href: "https://www.sljinternationalschool.com/",
      degree: "Pre University PCMC",
      logoUrl: "/slj.jpg",
      start: "2022",
      end: "2023",
    },
    {
      school: "RV College Of Engineering",
      href: "https://www.rvce.edu.in/",
      degree: "Information Science and Engineering",
      logoUrl: "/rvce.png",
      start: "2023",
      end: "2027",
    },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@example.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/JasonAlva",
        icon: Icons.github,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1U47wWOOpXRekR7OLiLnPpT7PQKIDEkgN/view?usp=drive_link",
        icon: NotebookIcon,
        navbar: true,
      },
      Leetcode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/_jasonalva_/",
        icon: Icons.leetcodeIcon,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jason-alva/",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
};
