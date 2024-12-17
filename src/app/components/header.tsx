import Link from "next/link";
import Image from "next/image";
import Icon from "../public/icons_search (2).png"
import Person from "../public/account.png";
import Cart from "../public/shopping-cart.png";
import Heart from "../public/akar-icons_heart.png";

const Header = () => {
  return (
    <header className="flex h-[100px] items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-1">
        {/* Navigation */}
        <div className="absolute top-[20px] left-4 lg:top-[38px]  sm:top-[38px] sm:left-[130px] md:left-[220px] lg:left-[400px]">
          <nav className="flex gap-4 sm:gap-4 md:gap-5 lg:gap-20 text-[15px] sm:text-[16px] lg:text-[18px] px-6 lg:px-0 font-medium">
            <Link href="/Home" className="text-black hover:underline leading-7">
              Home
            </Link>
            <Link href="/Shop" className="text-black hover:underline leading-7">
              Shop
            </Link>
            <Link href="/About" className="text-black hover:underline leading-7">
              About
            </Link>
            <Link href="/Contact" className="text-black hover:underline leading-7">
              Contact
            </Link>
          </nav>
        </div>

        {/* Icons */}
        <div className="flex gap-5 sm:gap-3 md:gap-4 lg:gap-[40px] ml-0 md:mr-[-90px] sm:ml-[440px] lg:ml-[980px] px-24 sm:px-6 lg:px-0 mr-4 lg:mr-12 mt-8 sm:mt-0 lg:mt-0 ">

          <a href="../Account" rel="noopener noreferrer" aria-label="Profile">
            <Image
              src={Person}
              alt="Profile Icon"
              className="block text-black w-[40px] sm:w-[28px] lg:w-[30px] min-w-[24px]"
            />
          </a>


          <a href="" rel="noopener noreferrer" aria-label="Profile">

            <Image
              src={Icon}
              alt="Icon"

              className="block text-black  w-[40px] sm:w-[24px] lg:w-[24px] min-w-[20px]"
            />

          </a>


          <a href="" rel="noopener noreferrer" aria-label="Profile">
            <Image
              src={Heart}
              alt="Heart Icon"

              className="block text-black  w-[40px] sm:w-[24px] lg:w-[24px] min-w-[20px]"
            />
          </a>


          <a href="" rel="noopener noreferrer" aria-label="Profile">
            <Image
              src={Cart}
              alt="Cart Icon"

              className="block text-black  w-[40px] sm:w-[24px] lg:w-[24px] min-w-[20px]"
            />
          </a>
        </div>
      </div>

    </header>
  );
};

export default Header;
