import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        <img src="/footer-logo.png" alt="Mercurial logo" className="w-[180px] h-[50px] mb-8 md:mb-0" />
        
        <div className="mb-8 md:mb-0">
          <h4 className="mb-4 font-medium">About Mercurial</h4>
          <ul>
            <li className="mb-2"><a href="#services" className="hover:underline">Service</a></li>
            <li className="mb-2"><a href="#contact" className="hover:underline">Contact us</a></li>
            <li className="mb-2"><a href="#faqs" className="hover:underline">FAQs</a></li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h4 className="mb-4 font-medium">Products</h4>
          <ul>
            <li className="mb-2"><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li className="mb-2"><a href="#services" className="hover:underline">Our services</a></li>
            <li className="mb-2"><a href="#how-it-works" className="hover:underline">How it works</a></li>
            <li className="mb-2"><a href="mailto:onyedikachukwujosephjmc@gmail.com" className="hover:underline">support@mercurialtech.co</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-medium">Socials</h4>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-2xl hover:text-gray-400"><FaTwitter /></a></li>
            <li><a href="#" className="text-2xl hover:text-gray-400"><FaInstagram /></a></li>
            <li><a href="#" className="text-2xl hover:text-gray-400"><FaFacebook /></a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t border-gray-800 pt-4 text-center">
        <p className="text-sm">&copy; Copyright 2024 Mercurial Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
