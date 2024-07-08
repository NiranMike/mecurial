/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "Our service portfolio includes digital marketing, social media management, content creation, email marketing, search engine optimization, and software solutions, all designed to drive growth and success for our clients.",
  },
  {
    question: "How long does the free trial last?",
    answer:
      "Our free trial lasts for 2 weeks, giving you a risk-free opportunity to experience our expertise and see the results for yourself.",
  },
  {
    question: "How much does it cost after the trial?",
    answer:
      "Our pricing plans are customized based on the specific needs and requirements of each client. After the trial, we'll work with you to understand your unique needs and provide a personalized quote that aligns with your goals and budget .",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Our clients typically experience significant improvements in their online presence and business growth within 1-2 weeks of engaging our services. While results may vary depending on industry and market conditions, we assure you that our expert team will diligently work to understand your unique needs and develop tailored strategies to drive optimal outcomes. We are dedicated to delivering exceptional results and fostering long-term success for your business.",
  },
  {
    question: "What makes your agency unique?",
    answer:
      "Our expert team, customized strategies, and dedication to delivering exceptional results set us apart. Additionally, our ability to offer comprehensive software solutions, including Software as a Service (SaaS) and custom software development, makes us a one-stop-shop for businesses looking to elevate their online presence and operations.",
  },
  {
    question: "Are your ad spend budget-friendly?",
    answer:
      "Yes, we understand the importance of maximizing your ROI. Our team works closely with you to set a budget that aligns with your goals and ensures cost-effective ad spend. We offer flexible pricing models and continuously monitor and optimize your campaigns to ensure optimal performance within your budget.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button onClick={onClick} className="flex justify-between items-center w-full text-left">
        <span className="text-lg font-medium aeonik-bold">{question}</span>
        <span className="text-2xl">{isOpen ? '-' : '+'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            className="mt-2 text-[#3A3A3ACC] font-normal aeonik-medium text-[1rem]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id='faqs' className="mx-4 md:mx-10 lg:mx-20 my-[70px]">
      <h2 className="text-3xl font-bold mb-6 bwmgradual-bold text-center">Frequently Asked Questions</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
