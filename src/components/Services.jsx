
const Services = () => {
  return (
    <div className="pt-[500px]">
        <p className="text-[#3A3A3A] font-bold text-[2.4rem] text-center pb-[60px]">Our Services</p>
        <div className="flex flex-col lg:flex-row gap-10 justify-center mx-[100px]">
            <div className="bg-[#FFD1D1] flex flex-col gap-[80px] rounded-[50px] py-[80px] px-[40px]">
                <img src="f (4).png" className="w-[80px]" alt="" />
                <div className="space-y-2">
                    <p className="text-[#6B2E2E] font-medium text-[1.2rem]">Best Marketing Team</p>
                    <p className="w-[300px] text-[#6B2E2E] font-normal">Crafting compelling campaigns that drive real results</p>
                </div>
            </div>
            <div className="bg-[#FFFDC2] flex flex-col gap-[80px] rounded-[50px] py-[80px] px-[40px]">
                <img src="f (2).png" className="w-[80px]" alt="" />
                <div className="space-y-2">
                    <p className="text-[#66620C] font-medium text-[1.2rem]">Best Marketing Team</p>
                    <p className="w-[300px] text-[#66620C] font-normal">Crafting compelling campaigns that drive real results</p>
                </div>
            </div>
            <div className="bg-[#D0DDFF] flex flex-col gap-[80px] rounded-[50px] py-[80px] px-[40px]">
                <img src="f (1).png" className="w-[80px]" alt="" />
                <div className="space-y-2">
                    <p className="text-[#24396D] font-medium text-[1.2rem]">Best Marketing Team</p>
                    <p className="w-[300px] text-[#24396D] font-normal">Crafting compelling campaigns that drive real results</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Services