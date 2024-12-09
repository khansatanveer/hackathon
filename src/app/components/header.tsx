import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";


const Header = () => {
  return (
    <header className="flex w-full h-[100px] items-center justify-center bg-white">
      <div>
        {/* Navigation */}
        <nav className="absolute flex gap-4 md:gap-20 top-[20px] left-4 md:top-[38px] md:left-[505px]">
          <ul className="flex gap-4 md:gap-20">
            <li>
              <Link
                href="../home/hero.tsx"
                className="text-[14px] md:text-[16px] font-medium leading-[24px] text-black hover:text-gray-700 hover:underline"
              >
                Home
              </Link>
            </li>
            <li  className="text-[14px] hover:text-[16px] md:text-[16px] font-medium leading-[24px] text-black hover:text-gray-700 hover:underline">
              <Link
                href="../Shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[14px] md:text-[16px] font-medium leading-[24px] text-black hover:text-gray-700 hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[14px] md:text-[16px] font-medium leading-[24px] text-black hover:text-gray-700 hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>


        {/* Icons */}
        <div className="flex gap-4 md:gap-[50px] ml-4 md:ml-[1093px] mr-4 md:mr-12">
          <div className="hover:text-gray-700">
          <div className="text-[18px] md:text-[24px]" >
            <FaUser /></div>
          </div>
          <div className="hover:text-gray-700">
          <div className="text-[18px] md:text-[24px]" >
            <FaSearch  /></div>
          </div>
          <div className="hover:text-gray-700">
          <div className="text-[18px] md:text-[24px]" >
            <FaHeart  /></div>
          </div>
          <div className="hover:text-gray-700">
          <div className="text-[18px] md:text-[24px]" >
            <FaShoppingCart  /></div>
          </div>
        </div>
      </div>
    </header>
    
  );
};

export default Header;
