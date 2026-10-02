import { motion } from "framer-motion";
import {FaGraduationCap,FaLaptopCode,FaProjectDiagram,FaBookOpen,} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-dark py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-heading font-bold">

            About

            <span className="text-secondary">
              {" "}Me
            </span>

          </h2>

          <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>

        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-6">

              MERN Stack Developer

            </h3>

            <p className="text-gray-400 leading-8 text-lg">

              I'm an MSc Computer Science student passionate about building
              modern and scalable web applications using the MERN stack.

            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">

              I enjoy transforming ideas into real-world applications with
              clean UI, efficient backend architecture, and responsive user
              experiences.

            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">

              My goal is to become a skilled Full Stack Developer by
              continuously learning new technologies and building impactful
              projects.

            </p>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            {/* Card 1 */}

            <div className="bg-dark-card border border-gray-700 rounded-2xl p-6 hover:border-secondary transition">

              <div className="flex items-center gap-4">

                <FaGraduationCap className="text-3xl text-secondary" />

                <div>

                  <h4 className="font-semibold text-xl">

                    Education

                  </h4>

                  <p className="text-gray-400">

                    MSc Computer Science

                  </p>

                </div>

              </div>

            </div>

            {/* Card 2 */}

            <div className="bg-dark-card border border-gray-700 rounded-2xl p-6 hover:border-secondary transition">

              <div className="flex items-center gap-4">

                <FaLaptopCode className="text-3xl text-secondary" />

                <div>

                  <h4 className="font-semibold text-xl">

                    Specialization

                  </h4>

                  <p className="text-gray-400">

                    MERN Stack Development

                  </p>

                </div>

              </div>

            </div>

            {/* Card 3 */}

            <div className="bg-dark-card border border-gray-700 rounded-2xl p-6 hover:border-secondary transition">

              <div className="flex items-center gap-4">

                <FaProjectDiagram className="text-3xl text-secondary" />

                <div>

                  <h4 className="font-semibold text-xl">

                    Projects

                  </h4>

                  <p className="text-gray-400">

                    Furnishop, Resume Analyzer & More

                  </p>

                </div>

              </div>

            </div>

            {/* Card 4 */}

            <div className="bg-dark-card border border-gray-700 rounded-2xl p-6 hover:border-secondary transition">

              <div className="flex items-center gap-4">

                <FaBookOpen className="text-3xl text-secondary" />

                <div>

                  <h4 className="font-semibold text-xl">

                    Currently Learning

                  </h4>

                  <p className="text-gray-400">

                    Redux • Firebase • Advanced React

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>
        {/* ================= Statistics ================= */}

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
>

  <div className="bg-dark-card border border-gray-700 rounded-2xl p-8 text-center hover:border-secondary transition">

    <h3 className="text-4xl font-bold text-secondary">

      10+

    </h3>

    <p className="text-gray-400 mt-3">

      Projects Built

    </p>

  </div>

  <div className="bg-dark-card border border-gray-700 rounded-2xl p-8 text-center hover:border-secondary transition">

    <h3 className="text-4xl font-bold text-secondary">

      15+

    </h3>

    <p className="text-gray-400 mt-3">

      Technologies

    </p>

  </div>

  <div className="bg-dark-card border border-gray-700 rounded-2xl p-8 text-center hover:border-secondary transition">

    <h3 className="text-4xl font-bold text-secondary">

      100%

    </h3>

    <p className="text-gray-400 mt-3">

      Responsive Design

    </p>

  </div>

  <div className="bg-dark-card border border-gray-700 rounded-2xl p-8 text-center hover:border-secondary transition">

    <h3 className="text-4xl font-bold text-secondary">

      1+

    </h3>

    <p className="text-gray-400 mt-3">

      Years Learning

    </p>

  </div>

</motion.div>

      </div>
    </section>
  );
}

export default About;