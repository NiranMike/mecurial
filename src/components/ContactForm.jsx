/* eslint-disable no-undef */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../config/firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const contactsCollection = collection(db, 'contacts');
      await addDoc(contactsCollection, formData);

      const templateParams = {
        name: formData.name,
        businessName: formData.businessName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID, //  service_ID
        process.env.REACT_APP_TEMPLATE_ID, // template_ID
        templateParams,
        process.env.REACT_APP_USER_ID //  user_ID
      );

      setShowModal(true);
    } catch (error) {
      console.error("Error sending email: ", error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div id='contact' className="px-4 md:px-10 lg:px-20 py-8 md:py-16 bg-cover flex justify-center" style={{ backgroundImage: `url('/hero.png')` }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 bwmgradual-bold text-center">Ready to Scale Your Business?</h2>
        <p className="text-white mb-6 md:mb-8 lg:mb-10 aeonik-medium text-center">Let&apos;s grow your business together. Get in touch!</p>
        <form className="space-y-4 flex flex-col text-white" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent p-2 rounded border border-gray-300"
            required
          />
          <input
            type="text"
            name="businessName"
            placeholder="Business name"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 bg-transparent"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 bg-transparent"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 bg-transparent"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 bg-transparent"
            required
          ></textarea>
          <motion.button
            type="submit"
            className="w-full bg-[#050BA5] text-white py-2 rounded hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reach out to our experts
          </motion.button>
        </form>
      </motion.div>
      
      {/* Modal */}
      {showModal && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white p-8 rounded shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <div className='flex items-center justify-center'>
              <img className='w-[60px]' src="/healthicons_yes.png" alt="" />
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 bwmgradual-bold text-[#3A3A3A] text-center">Your message has been received</h2>
            <p className="text-sm md:text-base lg:text-lg text-[#3A3A3A] text-center aeonik-light">Stay tuned, our team of experts will reach out to you soon</p>
            <motion.button
            className="bg-transparent border-[1px] border-[#050BA5] text-[#050BA5] px-4 py-2 rounded mt-4 w-full relative overflow-hidden"
            onClick={() => setShowModal(false)}
            initial={{ color: '#050BA5' }}
            whileHover={{ color: 'white' }}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#050BA5] z-0"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              exit={{ width: 0 }}
              transition={{ duration: 0.9 }}
            />
            <span className="relative z-10 text-white">Close</span>
          </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;
