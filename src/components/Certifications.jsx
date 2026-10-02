import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

function Certifications() {

  const certificates = [

    {
      title: "MERN Stack Development",
      issuer: "Error Makes Clever",
      year: "2026",
      link: "#"
    },

    {
      title: "Python Programming",
      issuer: "Your Organization",
      year: "2025",
      link: "#"
    },

    {
      title: "Machine Learning",
      issuer: "Your Organization",
      year: "2025",
      link: "#"
    }

  ];

  return (

    <section
      id="certifications"
      className="py-24 bg-dark px-6"
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

          <h2 className="text-5xl font-bold">

            My

            <span className="text-secondary">
              {" "}Certifications
            </span>

          </h2>

          <div className="w-24 h-1 bg-secondary rounded-full mx-auto mt-4"></div>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.5, delay: index * 0.2 }}

              viewport={{ once: true }}

              whileHover={{
                y: -8
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
              duration-300"

            >

              <FaCertificate
                className="
                text-5xl
                text-secondary
                mb-6"
              />

              <h3 className="text-2xl font-bold">

                {certificate.title}

              </h3>

              <p className="text-gray-400 mt-3">

                {certificate.issuer}

              </p>

              <p className="text-gray-500 mt-2">

                {certificate.year}

              </p>

              <a

                href={certificate.link}

                target="_blank"

                rel="noreferrer"

                className="
                mt-8
                inline-flex
                items-center
                gap-2
                text-secondary
                font-semibold
                hover:underline"

              >

                View Certificate

                <FaExternalLinkAlt />

              </a>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Certifications;