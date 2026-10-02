import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-x-hidden bg-dark text-white"
    >
      {/* ================= Background Effects ================= */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 blur-[130px] rounded-full"></div>

        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* ================= Main Container ================= */}

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6 lg:px-10
          min-h-screen
          flex items-start justify-center
          pt-24 md:pt-28 lg:pt-24
          pb-16
        "
      >
        {/* ================= CENTER CONTENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl text-center flex flex-col items-center"
        >
          {/* Greeting */}

          <p className="text-secondary text-lg font-medium mb-5">
            Hello, I'm
          </p>

          {/* Name */}

          <h1
            className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-heading
              font-extrabold
              leading-tight
            "
          >
            Karthick
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Narayanan
            </span>
          </h1>

          {/* Typing Animation */}

          <div className="mt-4 text-2xl md:text-3xl font-semibold text-gray-300 h-12">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
                "Node.js Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}

          <p className="mt-6 text-gray-400 leading-8 text-lg max-w-2xl">
            Passionate about building scalable, responsive and user-friendly
            web applications using{" "}
            <span className="text-white font-semibold">React</span>,{" "}
            <span className="text-white font-semibold">Node.js</span>,{" "}
            <span className="text-white font-semibold">Express.js</span> and{" "}
            <span className="text-white font-semibold">MongoDB</span>.
          </p>

          {/* Open To Work */}

          <div className="mt-8 inline-flex items-center gap-3 bg-dark-card border border-gray-700 rounded-full px-5 py-3">
            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>

            <span className="text-gray-300">
              Open to MERN Stack Opportunities
            </span>
          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {/* Explore Projects */}

            <a
              href="#projects"
              className="
                px-8 py-4
                rounded-xl
                bg-primary
                hover:bg-blue-700
                transition-all
                duration-300
                font-semibold
              "
            >
              Explore Projects
            </a>

            {/* View Resume */}

            <a
              href="/Karthick_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3
                rounded-lg
                border border-secondary
                text-secondary
                hover:bg-secondary
                hover:text-black
                transition-all
                duration-300
              "
            >
              View Resume
            </a>
          </div>

          {/* Social Icons */}

          <div className="flex items-center justify-center gap-6 mt-10 text-3xl">
            {/* GitHub */}

            <a
              href="https://github.com/Karthick385"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-secondary transition duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/karthick-narayanan-113237324?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-secondary transition duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

            {/* Email */}

            <a
              href="mailto:karthicknarayanan385@gmail.com"
              aria-label="Email"
              className="hover:text-secondary transition duration-300 hover:scale-110"
            >
              <MdEmail />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ================= Scroll Indicator ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          delay: 1.5,
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center"
      >
        {/* Scroll indicator intentionally hidden */}
      </motion.div>
    </section>
  );
}

export default Hero;