import { motion, useInView } from 'framer-motion';
import { useInView as View } from 'react-intersection-observer'; // Import useInView from react-intersection-observer package

const MarketingSection = () => {
  const [ref, inView] = View({
    triggerOnce: true,
    threshold: 0.5, // Adjust threshold as needed
  });

  return (
    <div className="my-8 mx-4 md:mx-[200px]" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-10 bg-[#EBEB8C] p-2 lg:p-3 lg:rounded-[20px]">
          <img src="check-circle.png" alt="" className="w-5 h-5 md:w-auto md:h-auto" />
          <p className="text-sm md:text-base">say goodbye to wasted ad spend and hello to revenue-driving leads</p>
        </div>
        <div className="text-center space-y-4 lg:space-y-6 mb-5">
          <p className="font-bold text-2xl md:text-3xl lg:leading-[3.8rem] mt-5 text-center bwmgradual-bold">Get Qualified Leads and increase your monthly revenue</p>
          <p className="font-normal text-lg md:text-xl text-[#3A3A3A] aeonik-medium">Our expert team will help you identify and target high-quality leads, boosting your monthly revenue by 20-60%.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="bg-[#E9EAFF] py-10 md:py-20 flex flex-col md:flex-row justify-between rounded-2xl px-6 md:px-12 font-bold gap-5 relative">
          <div className="offer-banner absolute top-8 left-3 px-5 py-1 text-white text-xs md:text-sm">Ongoing Offer</div>
          <div className="md:w-1/2">
            <p className="text-xl md:text-2xl bwmgradual-bold">Test drive our solutions</p>
            <p className="font-normal text-lg md:text-xl text-[#3A3A3A] leading-6 mt-4">Experience our expertise with a 2-week free trial</p>
            <button className="px-8 md:px-12 rounded-lg mt-5 py-3 bg-[#050BA5] text-white text-lg md:text-xl font-medium">
              Book a call
            </button>
          </div>
          <div className="md:w-1/2 space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 aeonik-light">
                <img src="check-circle-blue.png" alt="" className="w-6 h-6" />
                <p className="aeonik-light text-[#5B5D80] font-medium text-base md:text-lg">Experience the value we bring to your business with our 2-week free trial offer!</p>
              </div>
              <div className="flex items-center gap-2 aeonik-light">
                <img src="check-circle-blue.png" alt="" className="w-6 h-6" />
                <p className="aeonik-light text-[#5B5D80] font-medium text-base md:text-lg">Test our expertise and see the results.</p>
              </div>
              <div className="flex items-center gap-2 aeonik-light">
                <img src="check-circle-blue.png" alt="" className="w-6 h-6" />
                <p className="aeonik-light text-[#5B5D80] font-medium text-base md:text-lg">Then let's discuss ongoing support to take your business to the next level.</p>
              </div>
              <div className="flex items-center gap-2 aeonik-light">
                <img src="check-circle-blue.png" alt="" className="w-6 h-6" />
                <p className="aeonik-light text-[#5B5D80] font-medium text-base md:text-lg">No strings attached, just pure result-driven value.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MarketingSection;
