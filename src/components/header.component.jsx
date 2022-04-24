import React, {useState} from "react";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import Sidebar from "./sidebar.component";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className=" bg-black sticky top-0 z-50">
      <div className="h-20 items-center justify-between mx-24 flex sm:mx-0 sm:px-4">
        <motion.div
          className="container"
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 40,
          }}
        >
          <a href="#" className=" text-4xl font-bold text-primary sm:text-3xl">
            &lt;ODUS/&gt;
          </a>
        </motion.div>
        <nav className="text-secondary flex gap-x-24 text-lg sm:hidden">
          {[
            { title: "Home", link: "#" },
            { title: "About", link: "/#about" },
            { title: "Projects", link: "/#project" },
            { title: "Contact", link: "/#contact" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="cursor-pointer hover:opacity-80 transition-all hvr-wobble-vertical"
            >
              {item.title}
            </a>
          ))}
        </nav>
        <div className="text-white hidden sm:block">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={24}
            easing="ease-in"
            color="#821a1a"
            duration={0.4}
          />
        </div>
      </div>
      <Sidebar close={() => setOpen(false)} isOpen={isOpen} />
    </header>
  );
};

export default Header;
