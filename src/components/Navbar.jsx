import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between px-4 md:px-6 py-4 items-center bg-white shadow-md">

        <a href="http://mercurialtech.co"> 
        <img
          className="w-[100px] md:w-[150px] h-[25px] md:h-[35px]"

          src="/logo.png"
          alt="Logo"
        />
        </a>

        <ul className="hidden md:flex gap-5 items-center text-[#3A3A3A]">
          <li>
            <a href="#services" className="hover:underline">
              Service
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact us
            </a>
          </li>
          <li>
            <a href="#faqs" className="hover:underline">
              FAQs
            </a>
          </li>
        </ul>
        <div className="hidden md:block bg-[#050BA5] py-3 px-8 rounded-lg text-white cursor-pointer">
          <a href="#contact" className="hover:underline">
            Contact Us
          </a>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <AiOutlineMenu className="w-8 h-8" />
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md absolute top-16 left-0 right-0 z-20"
        >
          <ul className="flex flex-col items-center gap-5 py-4 text-[#3A3A3A]">
            <li>
              <a
                href="#services"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </a>
            </li>
            <li className="bg-[#050BA5] py-3 px-8 rounded-lg text-white">
              <a
                href="#contact"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
