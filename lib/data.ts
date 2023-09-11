import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import vrImg from "@/public/vr.png";
import surveyasiaImg from "@/public/surveyasia.png";

export const externalLinks = {
  portfolio: "https://drive.google.com/file/d/1xz8orS7cGoVgbvXAsgAotaiiVAAwyumD/view?usp=sharing",
  linkedin: "https://linkedin.com/in/rizki-nm",
  github: "https://github.com/rizki-nm",
} as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    company: "@Stechoq Robotika Indonesia",
    location: "Yogyakarta, Indonesia",
    description:
      "I worked as a Software Engineer Intern for 5 months. Developed a virtual reality application for simulating medical equipment.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb - Jun 2023",
  },
  {
    title: "Fullstack Developer Intern",
    company: "@Citiasia Inc.",
    location: "Remote",
    description:
      "I worked as a Fullstack Developer Intern for 5 months. I was involved in developing a website application called SurveyAsia.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug - Dec 2022",
  },
  {
    title: "Staff of Web Division",
    company: "@Dian Nuswantoro Computer Club",
    location: "Semarang, Indonesia",
    description:
      "I worked as a staff member in the Web Division for one year. I spearheaded and mentored a web programming course for over 90 students and managed the organization's website events.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2021 - Aug 2022",
  },
  {
    title: "Informatics Engineering Student",
    company: "@Universitas Dian Nuswantoro",
    location: "Semarang, Indonesia",
    description:
      "Final year student.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Medical Equipment Simulation (VR)",
    linkUrl: "#",
    description:
      "Virtual reality apps were built using Unity. Users, particularly in the medical field, can simulate a ventilator using Virtual Reality.",
    tags: ["Unity", "C#", "Virtual Reality"],
    imageUrl: vrImg,
  },
  {
    title: "SurveyAsia",
    linkUrl: "#",
    description:
      "Survey management system application. Include features such as creating surveys, survey analysis, and live chat.",
    tags: ["Vue JS", "Bootstrap", "Laravel", "MySQL", "RestFul API"],
    imageUrl: surveyasiaImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "PHP",
  "Express",
  "Laravel",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MySQL",
  "PostgreSQL",
] as const;
