import React from "react";

import {
  SiCss3,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiGithub,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { DiSass } from "react-icons/di";
import { Icon } from "./button.component";
import Reveal from 'react-reveal/Reveal';

const About = () => {
  return (
    <section className="bg-lightDark h-screen pt-24 px-24 sm:px-0 sm:pt-18 sm:h-full sm:pb-10" id="about">
     <Reveal effect="fadeInUp">

      <h2 className="text-primary text-5xl text-center py-8 sm:py-4 sm:text-3xl">ABOUT ME</h2>
      </Reveal>

      <div className="grid grid-cols-2 gap-20 px-20 py-8 sm:grid-cols-1 sm:px-2">
     <div>
     <Reveal effect="fadeInUp">
          <h4 className="text-primary text-3xl text-center py-5 sm:py-2 sm:text-xl">BIO</h4>
          <p className="text-secondary pt-5 text-xl leading-7 sm:text-center sm:text-base">
            I am a Front-End Developer who genuinely enjoys creating responsive
            and interactive websites and applications. <br /> <br /> I am
            passionate about responsive, seamless user experience and creative
            designs. <br />
            <br /> I have always had a passion for helping others and I now
            desire to use technology to provide solutions.
            <br /> <br /> I am constantly learning better ways of doing things
            everyday, learning new skills and increasing my knowledge base.
          </p>
        </Reveal>
     </div>

      <div>
      <Reveal effect="fadeInUp">
          <h4 className="text-primary text-3xl text-center py-8 sm:text-xl">
            TECH STACKS
          </h4>
          <div className="grid grid-cols-6 gap-x-2 gap-y-10 justify-center sm:grid-cols-5 sm:py-4 sm:gap-y-8odus">
            <Icon>
              <SiHtml5 size="2xl" />
            </Icon>
            <Icon>
              <SiCss3 size="2xl" />
            </Icon>
            <Icon>
              <SiJavascript size="2xl" />
            </Icon>
            <Icon>
              <SiReact size="2xl" />
            </Icon>
            <Icon>
              <SiGithub size="2xl" />
            </Icon>

            <Icon>
              <SiNextdotjs size="2xl" />
            </Icon>

            <Icon>
              <SiTailwindcss size="2xl" />
            </Icon>
            <Icon>
              <DiSass size="2xl" />
            </Icon>
            <Icon>
              <SiBootstrap size="2xl" />
            </Icon>
            <Icon>
              <SiPostman size="2xl" />
            </Icon>
            <Icon>
              <SiFigma size="2xl" />
            </Icon>
          </div>
        </Reveal>
      </div>
      </div>
    </section>
  );
};

export default About;
