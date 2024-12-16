import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex  h-[100px] items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-1  lg:grid-cols-1">
        {/* Navigation */}
        <div className="absolute top-[20px] left-4 lg:top-[38px] lg:left-[505px] sm:top-[38px] sm:left-[130px] md:left-[220px]">
          <nav className="flex gap-4 sm:gap-4 md:gap-5 lg:gap-20 text-[15px] sm:text-[16px]  lg:text-[18px] px-6 lg:px-0 font-medium">
            <Link
              href="/Home"
              className="text-black hover:underline  leading-7"
            >
              Home
            </Link>
            <Link
              href="/Shop"
              className="text-black hover:underline  leading-7"
            >
              Shop
            </Link>
            <Link
              href="/About"
              className="text-black hover:underline  leading-7"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-black hover:underline leading-7"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Icons */}
        <div className="flex gap-5 sm:gap-3 md:gap-4 lg:gap-[40px] ml-0 md:mr-[-90px] sm:ml-[440px] lg:ml-[1093px] px-24 sm:px-6 lg:px-0 mr-4 lg:mr-12 mt-8 sm:mt-0 lg:mt-0 ">
          <div className="text-black">
          <a href="../Account"  rel="noopener noreferrer" aria-label="Profile">
  <div className="text-[18px] sm:text-[18px] lg:text-[24px]">
    <IoPersonOutline />
  </div>
</a>

          </div>
          <div className="text-black">
          <a href=""  rel="noopener noreferrer" aria-label="Profile">
            <div className="text-[20px] sm:text-[20px]  lg:text-[28px]">
              <CiSearch />
            </div>
            </a>
          </div>
          <div className="text-black">
          <a href=""  rel="noopener noreferrer" aria-label="Profile">
            <div className="text-[18px] sm:text-[18px]  lg:text-[24px]">
              <IoIosHeartEmpty />
            </div>
            </a>
          </div>
          <div className="text-black">
          <a href=""  rel="noopener noreferrer" aria-label="Profile">
            <div className="text-[18px] sm:text-[18px]  lg:text-[24px]">
              <AiOutlineShoppingCart />
            </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
