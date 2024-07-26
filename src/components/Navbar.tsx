import { IoMdSearch } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";


const Navbar = () => {
    return <div className="container">
        <div className="flex justify-between items-center pt-8 gap-2">
            <img src="./Logo.jpeg" alt="Logo" className="w-14 h-14 md:flex hidden" />
            <div className="relative w-full max-w-[500px]">
                <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" type="text" placeholder="Search Product..."
                />
                <IoMdSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={15} />
            </div>
            <div className="flex gap-4">
                <div className="icon__wrapper ">
                    <AiOutlineUser />
                </div>
                <div className="icon__wrapper relative ">
                    <AiOutlineShopping />
                    <CartCountBadge size="w-[25px] h-[25px]" />
                </div>
            </div>
        </div>
    </div>
}

export default Navbar;