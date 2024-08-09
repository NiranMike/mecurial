const ProcessSection = () => {
  return (
    <div id="how-it-works" className="bg-[#292929] py-10 md:py-20 my-10">
      <div className="text-center mb-10 md:mb-20">
        <h1 className="font-bold text-white text-2xl md:text-3xl lg:text-4xl bwmgradual-bold">
          Our Proven Process for Scaling Your Business
        </h1>
        <p className="font-normal text-lg md:text-xl text-[#D7D7D7] Montserrat-medium">
          To scale your monthly revenue by 20-60%, we use this unique process
        </p>
      </div>
      <div className="grid grid-cols-1 lg:px-20 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-x-5 md:gap-y-10">
        {/* md container */}
        <div className="flex items-center gap-5 px-4 md:px-0">
          <div className="bg-[#EBEB8C] w-12 h-12 md:w-[50px] md:h-[45px] flex justify-center items-center rounded-full text-lg md:text-2xl font-bold">
            1
          </div>
          <div className="text-white">
            <p className="font-bold text-lg md:text-xl bwmgradual-bold">
              Consultation
            </p>
            <p className="font-normal text-base md:text-lg  Montserrat-light">
              Discover your business goals and challenges with a personalized
              consultation
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 px-4 md:px-0">
          <div className="bg-[#EBEB8C] w-12 h-12 md:w-[50px] md:h-[45px] flex justify-center items-center rounded-full text-lg md:text-2xl font-bold">
            2
          </div>
          <div className="text-white">
            <p className="font-bold text-lg md:text-xl bwmgradual-bold">
              Ad Strategy Development
            </p>
            <p className="font-normal text-base md:text-lg  Montserrat-light">
              Get a customized ad strategy tailored to your unique needs and
              objectives
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 px-4 md:px-0">
          <div className="bg-[#EBEB8C] w-12 h-12 md:w-[50px] md:h-[45px] flex justify-center items-center rounded-full text-lg md:text-2xl font-bold">
            3
          </div>
          <div className="text-white">
            <p className="font-bold text-lg md:text-xl bwmgradual-bold">
              Ad Launch and Optimization
            </p>
            <p className="font-normal text-base md:text-lg  Montserrat-light">
              Launch your ads and continuously optimize for maximum performance
              and ROI
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 px-4 md:px-0">
          <div className="bg-[#EBEB8C] w-12 h-12 md:w-[50px] md:h-[45px] flex justify-center items-center rounded-full text-lg md:text-2xl font-bold">
            4
          </div>
          <div className="text-white">
            <p className="font-bold text-lg md:text-xl bwmgradual-bold">
              Ongoing Support and Analysis
            </p>
            <p className="font-normal text-base md:text-lg  Montserrat-light">
              Receive regular support and analysis to ensure your ads stay on
              track and drive results
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 px-4 md:px-0">
          <div className="bg-[#EBEB8C] w-12 h-12 md:w-[50px] md:h-[45px] flex justify-center items-center rounded-full text-lg md:text-2xl font-bold">
            5
          </div>
          <div className="text-white">
            <p className="font-bold text-lg md:text-xl bwmgradual-bold">
              Results and Scaling
            </p>
            <p className="font-normal text-base md:text-lg  Montserrat-light">
              Achieve significant revenue growth and scale your business with
              our expert guidance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
