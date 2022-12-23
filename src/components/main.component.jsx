import React from "react";
import { Box, IconLink, LightButton, SolidButton } from "./button.component";
import { FaLinkedinIn, FaGithub, FaTwitter, FaMediumM } from "react-icons/fa";
import { motion } from "framer-motion";
import Jump from 'react-reveal/Jump';



const Main = () => {
  return (
    <section className="bg-black h-full px-24 pt-24 pb-72 relative sm:px-4 sm:pb-80 sm:h-screen">
     <Jump>
     <h1 className="text-primary text-8xl sm:text-6xl">Foluke Odusanya</h1>
      <h5 className="text-secondary text-5xl py-12 sm:text-3xl">Front-End Developer</h5>
     </Jump>
      <div className="flex gap-14 items-center mt-14 pb-2 sm:gap-7 sm:mt-7">
        <SolidButton text={"projects"} href="/#project"/>
        <LightButton text={"Resume"} href={"/docs/mycv.pdf"} />
      </div>
      <div className="flex gap-14 pt-20 sm:pt-10 sm:px-4 sm:pb-6">
        <IconLink
          icon={<FaLinkedinIn />}
          href={"https://www.linkedin.com/in/foluke-odusanya-98863a199/"}
        />
        <IconLink icon={<FaGithub />} href={"https://github.com/Folukie"} />
        <IconLink icon={<FaTwitter />} href={"https://twitter.com/__Foluke"} />
        <IconLink
          icon={<FaMediumM />}
          href={"https://medium.com/@odusanya.folukemi"}
        />
      </div>
      <div className="grid gap-1 absolute right-0 bottom-0">
        <div className="ml-auto">
        <motion.div
          className="container"
          initial={{ scale: 0 }}
          animate={{ rotate: -360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 40,
          }}
        >
          <Box />
          </motion.div>
        </div>
        <motion.div
          className="container"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 40,
          }}
        >
        <div className="grid grid-cols-2 gap-1 ">
          <Box />
          <Box />

        </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Main;
