import RateCard from "./RateCard"

const Hero = () => {
  return (
    <div className="relative">
        <img className="  object-cover w-screen absolute inset-0 -z-10" src="hero.png" alt="" />
        <div className="z-10 flex flex-col justify-center items-center w-full text-center pt-[200px]  space-y-10">
            <div className="max-w-[900px]">
                <p className="text-[5rem] text-center font-bold text-white leading-[5rem]">Scale your business with our expertise</p>
            </div>
            <div className="max-w-[900px]">
                <p className="text-[1.6rem] font-light text-white">Get qualified leads and scale your business  by 20-60% increase in monthly revenue with our proven ad strategies</p>
            </div>
            <div className="flex gap-4 items-center">
                <div className="bg-[#050BA5] py-3 px-5 rounded-lg text-white font-medium">
                    Book a call with our experts
                </div>
                <div className="flex items-center gap-3">
                    <img className="w-[40px] h-[40px]" src="play.png" alt="" />
                    <p className="text-white font-medium">How it Works</p>
                </div>
            </div>
        </div>
        <RateCard />
    </div>
  )
}

export default Hero