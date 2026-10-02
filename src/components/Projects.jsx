import { motion } from "framer-motion";
import projects from "./projectsData";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

function Projects() {

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="py-24 bg-dark px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl font-bold">

            Featured

            <span className="text-secondary">
              {" "}Projects
            </span>

          </h2>

          <div className="w-24 h-1 bg-secondary rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            These projects demonstrate my experience in building modern,
            scalable, and user-focused MERN stack applications.
          </p>

        </motion.div>

        {/* Featured Project */}

        <FeaturedProject project={featuredProject} />

        {/* Other Projects */}

        <div className="grid grid-cols-1 gap-8">

          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;