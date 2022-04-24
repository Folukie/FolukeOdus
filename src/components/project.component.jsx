/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LightButton, SolidButton } from "./button.component";
import projectData from "../data/project-data.json";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Reveal from "react-reveal/Reveal";
import { TiArrowRightThick } from "react-icons/ti";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Project = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <section id="project" className="bg-black h-full py-24 px-24 sm:px-4">
      <Reveal effect="fadeInUp">
        <h2 className="text-primary text-5xl text-center py-8">PROJECTS</h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-24 mt-12 sm:grid-cols-1">
          {projectData.map((project) => (
            <div key={project.id}>
              <Reveal effect="fadeInUp">
                <div className="h-80 relative group cursor-pointer overflow-hidden sm:h-full">
                  <img alt={project.title} src={project.image} className="sm:h-full object-contain"/>

                  <div className="bg-secondary absolute bottom-0 translate-y-64 h-full w-full group-hover:-translate-y-0 group-hover:transition-all transform duration-1000 py-5 px-7 flex flex-col gap-y-6 sm:gap-y-2 sm:translate-y-44" >
                    <h5 className="text-2xl uppercase text-primary sm:text-lg">
                      {project.title}
                    </h5>

                    <p className="text-lg sm:text-sm">{project.description}</p>
                    <div className="flex gap-x-4 sm:pt-2">
                      <LightButton text="Live Site" href={project.live_site} />
                      <SolidButton
                        text="Source code"
                        href={project.source_code}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
          <a href="https://github.com/Folukie?tab=repositories" className="hvr-wobble-vertical button flex items-center gap-1 text-lg sm:text-base">View more on Github <TiArrowRightThick/></a>
        </div>
     
    </section>
  );
};

export default Project;
