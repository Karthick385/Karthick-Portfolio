import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {

  const education = [
    {
      title: "Master of Science in Computer Science",
      institute: "Sri Krishna Arts and Science College, Coimbatore",
      duration: "2025 - Present",
      score: "CGPA (Up to 2nd Semester): 7.49",
    },
    {
      title: "Bachelor of Science in Computer Science",
      institute: "NPR Arts and Science College, Dindigul",
      duration: "2020 - 2023",
      score: "CGPA: 7.14",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institute: "MSP Solai Nadar Memorial Hr. Sec. School, Dindigul",
      duration: "2021 - 2022",
      score: "Percentage: 75%",
    },
    {
      title: "Secondary School Leaving Certificate (SSLC)",
      institute: "MSP Solai Nadar Memorial Hr. Sec. School, Dindigul",
      duration: "2019 - 2020",
      score: "Percentage: 77.8%",
    },
  ];

  return (
    <section
      id="education"
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
            Academic Background
          </p>

          <h2 className="text-5xl font-bold">
            Education
          </h2>

          <div className="w-24 h-1 bg-secondary rounded-full mx-auto mt-4"></div>

        </motion.div>

        {/* Education Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                relative
                bg-dark-card
                border
                border-gray-700
                rounded-2xl
                p-8
                hover:border-secondary
                hover:-translate-y-2
                transition-all
                duration-300
                overflow-hidden
              "
            >

              {/* Icon */}

              <div className="absolute top-6 right-6 text-secondary text-3xl opacity-20">

                <FaGraduationCap />

              </div>

              {/* Duration */}

              <p className="text-secondary font-semibold tracking-wider mb-3">

                {item.duration}

              </p>

              {/* Degree */}

              <h3 className="text-2xl font-bold leading-snug">

                {item.title}

              </h3>

              {/* Institute */}

              <p className="text-gray-400 mt-4 leading-7">

                {item.institute}

              </p>

              {/* Score */}

              <div className="mt-8">

                <span
                  className="
                    inline-block
                    px-5
                    py-2
                    rounded-full
                    bg-secondary/20
                    text-secondary
                    font-semibold
                  "
                >
                  {item.score}
                </span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;