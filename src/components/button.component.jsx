import React from "react";
import { Children } from "react/cjs/react.production.min";

export const SolidButton = ({ text, href }) => {
  return (
    <a
      className="bg-primary border-primary border-2 rounded-full text-black px-10 py-4 text-xl cursor-pointer uppercase hover:opacity-90 transition-all sm:text-lg sm:px-5 sm:py-3" 
      href={href}
    >
      {text}
    </a>
  );
};

export const LightButton = ({ text, href }) => {
  return (
    <a
      className="border-primary border-2 rounded-full text-primary  px-10 py-4 text-xl cursor-pointer uppercase hover:bg-primary hover:text-black transition-all  sm:text-lg sm:px-5 sm:py-3"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {text}
    </a>
  );
};

export const IconLink = ({ icon, href }) => {
  return (
    <a
      className="text-secondary hover:text-primary text-3xl cursor-pointer transition-all hvr-pulse-shrink"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {icon}
    </a>
  );
};

export const Icon = ({ children }) => {
  return (
    <div className="h-12 text-secondary hover:text-primary cursor-pointer hvr-float  sm:w-10 sm:justify-self-center">
      {children}
    </div>
  );
};

export const Box = ({ children }) => {
  return <div className="bg-primary h-28 w-28 rounded-lg sm:w-20 sm:h-20"></div>;
};
