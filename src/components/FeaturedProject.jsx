import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function FeaturedProject({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        bg-dark-card
        border
        border-gray-700
        rounded-3xl
        p-10
        hover:border-secondary
        hover:shadow-glow
        transition-all
        duration-300
        mb-14
      "
    >

      {/* Featured Badge */}

      <div className="mb-6">

        <span className="
          uppercase
          text-sm
          tracking-widest
          text-secondary
          font-semibold
        ">
          Featured Project
        </span>

      </div>


      {/* Project Name */}

      <h2 className="text-4xl font-bold mb-4">
        {project.title}
      </h2>


      {/* Description */}

      <p className="text-gray-400 leading-8 text-lg">
        {project.description}
      </p>


      {/* Features */}

      <div className="
        grid
        md:grid-cols-2
        gap-4
        mt-10
      ">

        {project.features.map((feature) => (

          <div
            key={feature}
            className="
              text-gray-200
              border-l-2
              border-secondary
              pl-4
              py-1
              hover:text-secondary
              transition
            "
          >
            {feature}
          </div>

        ))}

      </div>


      {/* Technologies */}

      <div className="
        flex
        flex-wrap
        gap-3
        mt-10
      ">

        {project.technologies.map((tech) => (

          <span
            key={tech}
            className="
              px-4
              py-2
              rounded-full
              bg-gray-800
              border
              border-gray-700
              hover:border-secondary
              hover:text-secondary
              transition
            "
          >
            {tech}
          </span>

        ))}

      </div>


      {/* Buttons */}

      <div className="
        flex
        flex-wrap
        gap-5
        mt-10
      ">

        {/* GitHub */}

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            gap-2
            px-6
            py-3
            rounded-xl
            bg-secondary
            text-white
            hover:scale-105
            transition
          "
        >

          <FaGithub />

          GitHub

        </a>


        {/* Live Demo */}

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            gap-2
            px-6
            py-3
            rounded-xl
            border
            border-secondary
            text-secondary
            hover:bg-secondary
            hover:text-white
            hover:scale-105
            transition
          "
        >

          <FaExternalLinkAlt />

          Live Demo

        </a>

      </div>

    </motion.div>
  );
}

export default FeaturedProject;