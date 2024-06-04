
const Navbar = () => {
  return (
    <div className="flex justify-between px-6 py-4 items-center">
        <img className="w-[150px] h-[35px]" src="/logo.png" alt="" />
        <ul className="flex gap-5 items-center text-[#3A3A3A]">
            <li>Service</li>
            <li>Contact us</li>
            <li>FAQs</li>
        </ul>
        <div className="bg-[#050BA5] py-3 px-8 rounded-lg text-white">
            Contact Us
        </div>
    </div>
  )
}

export default Navbar