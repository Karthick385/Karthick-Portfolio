import { motion } from "framer-motion";

import {FaEnvelope,FaGithub,FaLinkedin,FaPhone,FaMapMarkerAlt} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-dark px-6"
    >

      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-bold">

            Get In

            <span className="text-secondary">
              {" "}Touch
            </span>

          </h2>

          <div className="w-24 h-1 bg-secondary rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 mt-8 text-lg max-w-2xl mx-auto leading-8">

            I'm currently looking for MERN Stack Developer opportunities.
            Whether you have an internship, full-time role, or an exciting
            project, I'd be happy to connect.

          </p>

        </motion.div>


        {/* Contact Card */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            bg-dark-card
            border
            border-gray-700
            rounded-3xl
            p-10
            hover:border-secondary
            transition-all
            duration-300
          "
        >

          <div className="space-y-8 max-w-md mx-auto">


            {/* Email */}

            <a
              href="mailto:karthicknarayanan385@gmail.com"
              className="flex items-center gap-5 group"
            >

              <FaEnvelope
                className="
                  text-3xl
                  text-secondary
                  group-hover:scale-110
                  transition
                "
              />

              <div>

                <p className="text-gray-400 text-sm">
                  Email
                </p>

                <p className="text-lg font-semibold">
                  karthicknarayanan385@gmail.com
                </p>

              </div>

            </a>


            {/* Phone */}

            <a
              href="tel:+91 9360875262"
              className="flex items-center gap-5 group"
            >

              <FaPhone
                className="
                  text-3xl
                  text-secondary
                  group-hover:scale-110
                  transition
                "
              />

              <div>

                <p className="text-gray-400 text-sm">
                  Phone
                </p>

                <p className="text-lg font-semibold">
                  +91 9360875262
                </p>

              </div>

            </a>


            {/* Location */}

            <div className="flex items-center gap-5 group">

              <FaMapMarkerAlt
                className="
                  text-3xl
                  text-secondary
                  group-hover:scale-110
                  transition
                "
              />

              <div>

                <p className="text-gray-400 text-sm">
                  Location
                </p>

                <p className="text-lg font-semibold">
                  Dindigul,Tamil Nadu,India
                </p>

              </div>

            </div>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/karthick-narayanan-113237324?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 group"
            >

              <FaLinkedin
                className="
                  text-3xl
                  text-secondary
                  group-hover:scale-110
                  transition
                "
              />

              <div>

                <p className="text-gray-400 text-sm">
                  LinkedIn
                </p>

                <p className="text-lg font-semibold">
                  Connect with me
                </p>

              </div>

            </a>


            {/* GitHub */}

            <a
              href="https://github.com/Karthick385"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 group"
            >

              <FaGithub
                className="
                  text-3xl
                  text-secondary
                  group-hover:scale-110
                  transition
                "
              />

              <div>

                <p className="text-gray-400 text-sm">
                  GitHub
                </p>

                <p className="text-lg font-semibold">
                  View My Projects
                </p>

              </div>

            </a>

          </div>


          {/* CTA Button */}

          <div className="mt-12 text-center">

            <a
              href="mailto:karthicknarayanan385@gmail.com"
              className="
                inline-block
                px-8
                py-4
                rounded-xl
                bg-primary
                hover:bg-blue-700
                transition-all
                duration-300
                font-semibold
              "
            >

              Say Hello!

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;