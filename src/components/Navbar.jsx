import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";


function Navbar() {

  const [open, setOpen] = useState(false);


  const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" }
];


  return (

    <nav className="fixed top-0 left-0 w-full z-50 
    bg-dark/80 backdrop-blur-md border-b border-gray-800">


      <div className="max-w-7xl mx-auto px-6 py-4 
      flex justify-between items-center">


        {/* Logo */}

        <h1 className="text-2xl font-heading font-bold 
        text-secondary">

          Karthick

        </h1>



        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-gray-300">

          {
  navLinks.map((link) => (
    <li key={link.id}>
      <a
        href={`#${link.id}`}
        className="hover:text-secondary transition cursor-pointer"
      >
        {link.name}
      </a>
    </li>
  ))
}

        </ul>



        {/* Button */}

        <a
            href="https://www.linkedin.com/in/karthick-narayanan-113237324?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block
            px-5 py-2 rounded-lg
            border border-secondary
            text-secondary
            hover:bg-secondary
            hover:text-black
            transition duration-300"
>
          Let's Connect
</a>



        {/* Mobile Menu Icon */}

        <button 
        className="md:hidden text-3xl"
        onClick={()=>setOpen(!open)}
        >

          {
            open ?
            <HiX/>
            :
            <HiMenuAlt3/>
          }

        </button>


      </div>



      {/* Mobile Menu */}

      {
        open && (

          <div className="md:hidden 
          bg-dark-card px-6 py-5">


           {
  navLinks.map((link) => (
    <a
      key={link.id}
      href={`#${link.id}`}
      onClick={() => setOpen(false)}
      className="block py-3 text-gray-300 hover:text-secondary"
    >
      {link.name}
    </a>
  ))
}


          </div>

        )
      }



    </nav>

  );

}


export default Navbar;