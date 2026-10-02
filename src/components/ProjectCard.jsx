import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02
      }}
      className="
        bg-dark-card
        border
        border-gray-700
        rounded-2xl
        p-8
        hover:border-secondary
        hover:shadow-glow
        transition-all
        duration-300
      "
    >

      {/* Title + Status */}

      <div className="
        flex
        justify-between
        items-center
        gap-4
      ">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <span
          className={`text-sm px-3 py-1 rounded-full ${
            project.status === "Completed"
              ? "bg-green-600/20 text-green-400"
              : "bg-yellow-600/20 text-yellow-400"
          }`}
        >
          {project.status}
        </span>

      </div>


      {/* Description */}

      <p className="
        text-gray-400
        mt-5
        leading-7
      ">
        {project.description}
      </p>


      {/* Features */}

      <div className="
        mt-6
        space-y-3
      ">

        {project.features.map((feature) => (

          <div
            key={feature}
            className="
              text-gray-300
              border-l-2
              border-secondary
              pl-4
              hover:text-secondary
              transition
            "
          >
            {feature}
          </div>

        ))}

      </div>


      {/* Tech Stack */}

      <div className="
        flex
        flex-wrap
        gap-3
        mt-8
      ">

        {project.technologies.map((tech) => (

          <span
            key={tech}
            className="
              px-4
              py-2
              rounded-full
              bg-gray-800
              text-sm
              border
              border-gray-700
              hover:border-secondary
              hover:bg-secondary
              hover:text-white
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
        gap-4
        mt-8
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
            text-gray-300
            hover:text-secondary
            transition
          "
        >

          <FaGithub />

          GitHub

        </a>


        {/* Live Demo */}

        {project.demo !== "#" && (

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2
              text-secondary
              hover:scale-105
              transition
            "
          >

            <FaExternalLinkAlt />

            Live Demo

          </a>

        )}

      </div>

    </motion.div>
  );
}

export default ProjectCard;