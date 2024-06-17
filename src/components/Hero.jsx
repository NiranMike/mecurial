import { motion } from 'framer-motion';
import RateCard from './RateCard';

const Hero = () => {
  return (
    <div 
      className="relative h-screen bg-cover bg-center hero" 
      style={{ backgroundImage: `url('/hero.png')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center pt-12 md:pt-24 space-y-6 md:space-y-10 px-4 hero-div">
        <motion.div
          className="max-w-[900px] px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight md:leading-tight font-bold text-white bwmgradual-bold">
            Scale your business with our expertise
          </p>
        </motion.div>
        <motion.div
          className="max-w-[900px] px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl font-light text-white bwmgradual-light">
            Get qualified leads and scale your business by 20-60% increase in monthly revenue with our proven ad strategies
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row gap-4 items-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="bg-[#050BA5] py-3 px-5 rounded-lg text-white font-medium aeonik-light cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact">Book a call with our experts</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#services" className="flex items-center gap-3 cursor-pointer">
              <img className="w-[30px] md:w-[40px] h-[30px] md:h-[40px]" src="play.png" alt="Play icon" />
              <p className="text-white font-medium aeonik-light">How it Works</p>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <RateCard />
    </div>
  );
}

export default Hero;
