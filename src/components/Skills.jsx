import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiFirebase,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-dark px-6 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-secondary font-semibold mb-3">
            My Expertise
          </p>

          <h2 className="text-5xl font-heading font-bold">
            Tech <span className="text-secondary">Stack</span>
          </h2>

          <div className="w-24 h-1 bg-secondary rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            I build scalable, responsive and modern web applications
            using the MERN Stack and industry-standard development tools.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="flex flex-wrap justify-center gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="
                w-44
                bg-dark-card
                border
                border-gray-700
                rounded-2xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                text-center
                hover:border-secondary
                hover:shadow-glow
                transition-all
                duration-300
              "
            >

              <div className="text-5xl text-secondary mb-4">
                {skill.icon}
              </div>

              <p className="text-lg font-semibold">
                {skill.name}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;