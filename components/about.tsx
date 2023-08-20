"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently, I'm a final-year student in{" "}
        <span className="font-medium">Informatics Engineering</span>. I have experience as a {" "}
        <span className="font-medium">Software Engineer Intern</span>, where I participated in building {" "}
        <span className="font-medium">innovative products</span>.{" "}
        <span className="italic">My favorite aspect of programming</span> is creating impactful products. I <span className="underline">love</span> seeing user enjoy using the product that I build. My core stack is{" "}
        <span className="font-medium">
          Javascript, ExpressJS, Node.js
        </span>
        . I am also familiar with TypeScript, Java, PHP. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">internship position</span> as a Software
        Engineer.
      </p>
    </motion.section>
  );
}
