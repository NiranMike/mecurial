import  { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < to) {
          const increment = (to - from) / (duration * 60); // 60 frames per second
          return Math.min(prevCount + increment, to);
        } else {
          clearInterval(controls);
          return to;
        }
      });
    }, 1000 / 60); // 60 frames per second

    return () => clearInterval(controls);
  }, [from, to, duration]);

  return <span>{Math.round(count)}</span>;
};

const RateCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="bg-white mx-4 hidden md:block md:mx-10 shadow-md p-5 justify-center items-center text-center rounded-xl absolute left-0 right-0 bottom-[-150px] lg:bottom-[-70px]">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-600 bwmgradual-bold">
            {isInView && <Counter from={0} to={50} duration={2} />}K +
          </p>
          <p className="font-normal text-sm md:text-base lg:text-lg text-gray-400 aeonik-light">Happy Clients</p>
        </div>
        <div>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-600 bwmgradual-bold">
            +{isInView && <Counter from={0} to={434} duration={2} />}%
          </p>
          <p className="font-normal text-sm md:text-base lg:text-lg text-gray-400 aeonik-light">Indexed Pages</p>
        </div>
        <div>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-600 bwmgradual-bold">
            {isInView && <Counter from={0} to={20} duration={2} />} - {isInView && <Counter from={20} to={60} duration={2} />}%
          </p>
          <p className="font-normal text-sm md:text-base lg:text-lg text-gray-400 aeonik-light">Sure Revenue Increase</p>
        </div>
        <div>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-600 bwmgradual-bold">
            {isInView && <Counter from={0} to={50} duration={2} />}K +
          </p>
          <p className="font-normal text-sm md:text-base lg:text-lg text-gray-400 aeonik-light">Successful Ads</p>
        </div>
      </motion.div>
    </div>
  );
};

export default RateCard;
