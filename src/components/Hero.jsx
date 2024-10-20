import { motion } from "framer-motion";

import { styles } from "../styles";
import HeadCanva from "./HeadCanva";
import { FaLinkedin,FaCode,FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Background HeadCanva */}
      <div className="absolute inset-0 z-0">
        <HeadCanva />
      </div>

      {/* Foreground content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="d-inlineflex">
          <br/>
          <a href="https://www.linkedin.com/in/sahil-borse-517168251/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#fffff" />
          </a>
          <br/>
          <a href="https://github.com/sahilborse" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} color="#fff" />
          </a>
          <br/>
          <a href="https://leetcode.com/u/user2919mw/" target="_blank" rel="noopener noreferrer">
            <FaCode size={30} color="#fff" />
          </a>
        </div>

        <div>
        
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Sahil</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
          
        </div>
      </div>

      {/* Scroll animation */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
