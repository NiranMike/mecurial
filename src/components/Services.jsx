import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id='services' className="pt-16 md:pt-32 lg:pt-[240px]" ref={ref}>
      <p className="text-gray-900 font-bold text-2xl md:text-3xl lg:text-4xl text-center pb-8 md:pb-12 lg:pb-16 bwmgradual-bold">
        Our Services
      </p>
      <motion.div
        className="flex lg:justify-between lg:px-[6rem] flex-col gap-5 lg:flex-row items-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="bg-red-200 rounded-[53px] py-16 px-8 w-[300px]  space-y-[90px]  lg:w-[350px]"
          variants={itemVariants}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="f (4).png" className="w-16 md:w-20 mb-4 " alt="Marketing Team Icon" />
          <div className="space-y-2">
            <p className="text-red-600 font-medium text-lg md:text-xl">Best Marketing Team</p>
            <p className="text-red-600 font-normal">Crafting compelling campaigns that drive real results</p>
          </div>
        </motion.div>
        <motion.div
          className="bg-yellow-200 rounded-[53px] py-16 px-8  space-y-[90px] w-[300px] lg:w-[350px]"
          variants={itemVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="f (2).png" className="w-16 md:w-20 mb-4" alt="Outreach Team Icon" />
          <div className="space-y-2">
            <p className="text-yellow-600 font-medium text-lg md:text-xl">Best Outreach Team</p>
            <p className="text-yellow-600 font-normal">Crafting compelling campaigns that drive real results</p>
          </div>
        </motion.div>
        <motion.div
          className="bg-blue-200 rounded-[53px] py-16 px-8  space-y-[90px] w-[300px] lg:w-[350px]"
          variants={itemVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="f (1).png" className="w-16 md:w-20 mb-4" alt="Media Buyer Icon" />
          <div className="space-y-2">
            <p className="text-blue-600 font-medium text-lg md:text-xl">Best Media Buyer</p>
            <p className="text-blue-600 font-normal">Crafting compelling campaigns that drive real results</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
