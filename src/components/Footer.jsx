import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-gray-800 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Logo */}

        <div className="text-center">

          <h2 className="text-3xl font-bold">

            {""}

            <span className="text-secondary">

              Karthick

            </span>

            {""}

          </h2>

          <p className="text-gray-400 mt-4">

            Turning ideas into scalable web applications.

          </p>

        </div>

        {/* Navigation */}

        <div className="flex flex-wrap justify-center gap-8 mt-10">

          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-secondary transition"
          >
            Home
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-secondary transition"
          >
            About
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-secondary transition"
          >
            Skills
          </Link>

          <Link
            to="education"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-secondary transition"
          >
            Education
          </Link>

          {/* <Link
            to="certifications"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-secondary transition"
          >
            Certifications
          </Link> */}

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-secondary transition"
          >
            Contact
          </Link>

        </div>

        {/* Social Icons */}

        <div className="flex justify-center gap-8 text-2xl mt-10">

          <a
            href="https://github.com/Karthick385"
            target="_blank"
            rel="noreferrer"
            className="hover:text-secondary transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/karthick-narayanan-113237324?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noreferrer"
            className="hover:text-secondary transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:karthicknarayanan385@gmail.com"
            className="hover:text-secondary transition"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Copyright */}

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">

          <p className="text-gray-500">

            © 2026 Karthick Narayanan. All Rights Reserved.

          </p>

          <p className="text-gray-600 mt-2 text-sm">

            Built with React, Tailwind CSS & Framer Motion

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;