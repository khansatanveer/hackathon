import Image from 'next/image';
import Sofa from '@/app/public/sofa.png'
import Seeter from '@/app/public/Mask group.png'
import Table from '@/app/public/Granite square side table 1.png'
import Pic1 from '@/app/public/Trenton modular .png'
import Pic2 from '@/app/public/table.png'
import Pic3 from '@/app/public/Mask1.png'
import Pic4 from '@/app/public/Mask2.png'
import Pic5 from '@/app/public/Asgaard sofa 1.png'
import Pic6 from '@/app/public/Rectangle 13.png'
import Pic7 from '@/app/public/Rectangle 14.png'
import Pic8 from '@/app/public/Rectangle 15.png'
import Pic9 from '@/app/public/bg-2.png'
import Clock from "@/app/public/clock-fill.png";
import  Calendar from "@/app/public/Calendar .png";
import Header from '@/app/components/header'

const Home = () => {
  return (
    <div>
      <div className="bg-[#FBEBB5]  h-[170px]">
        <Header />
      </div>
      <div className="w-full h-screen bg-[#FBEBB5] flex flex-col lg:flex-row-reverse items-center justify-center ">
        {/* Right Content: Image */}
        <div className="mt-[-150px] sm:mt-[-90px] lg:mt-0 mb-2 lg:mr-[-130px] lg:mb-[100px]">
        <Image
  src={Sofa}
  alt="Sofa Single Seater"
  className="md:w-[600px] md:h-[700px] w-[500px] h-[400px] scale-x-[-1]"
  priority
/>
        </div>

        {/* Left Content: Text */}
        <div className="text-center lg:text-left lg:ml-[-40px]">
          <h1 className="text-[#000000] font-medium text-[30px] sm:text-[48px] lg:text-[64px] leading-[40px] sm:leading-[60px] lg:leading-[96px] lg:mt-[0px] mt-[-80px]">
            Rocket single <br /> seater
          </h1>
          <br />
          <button className="font-medium hover:text-[23px] hover:sm-text-[23px] text-[18px] sm:text-[22px] lg:text-[24px] text-black lg:mt-[0px] mt-[-70px]">
            Shop Now
            <hr className="mt-1 border-1 lg:border-2 border-black lg:w-[121px] w-[90px] mx-auto mb-3" />
          </button>
        </div>
      </div>

      <section className=" bg-[#FAF4F4] py-12  lg:h-[672px] h-[660px] sm:h-[850px]">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-32  ">
          <div className="text-center flex flex-col items-center mr-10 gap-4 mt-[-50px] lg:mt-[0px]">
            <Image src={Table}
              alt="Side Table"
              className="mx-auto mb-[-100px] sm:mb-[-150px] lg:mb-[-90px]  h-[auto] w-[800px] sm:w-[400px] lg:w-[790px]" />
            <h3 className="text-[30px] sm:text-[40px] lg:text-[48px] font-medium leading-[54px] mt-[30px] lg:mt-[-40px] ">Side table</h3>
            <a href="../Shop"  rel="noopener noreferrer" aria-label="Profile">
            <button className="mt-[-24px] lg:mt-[-8px] text-[20px] sm:text-[26px] lg:text-[28px] font-medium leading-[36px] hover:text-[24px] hover:sm:text-[30px]  hover:lg:text-[32px]">
              View More
              <hr className="mt-1 lg:border-2 border-1 border-black lg:w-[121px] w-[90px] mx-auto" />
            </button>
            </a>
          </div>

          <div className="text-center flex flex-col items-center mr-10 gap-4  mt-[-50px] lg:mt-[0px]">
            <Image src={Seeter}
              alt="Side Table"
              className="mx-auto  sm:mb-[-110px] mb-[-90px] lg:mb-[-90px] h-[auto] w-[800px] sm:w-[400px] lg:w-[790px]" />
            <h3 className="text-[30px] sm:text-[40px] lg:text-[48px] font-medium leading-[54px] mt-[0px] lg:mt-[-40px]">Side table</h3>
            <a href="../Shop"  rel="noopener noreferrer" aria-label="Profile">
            <button className="mt-[-24px] lg:mt-[-8px] text-[20px] sm:text-[26px] lg:text-[28px] font-medium leading-[36px] hover:text-[24px] hover:sm:text-[30px]  hover:lg:text-[32px]">
              View More
              <hr className="mt-1 lg:border-2 border-1 border-black lg:w-[121px] w-[90px] mx-auto" />
            </button>
            </a>
          </div>
        </div>
      </section>

      <section className="h-auto bg-[#FFFFFF]">
        <div className="container mx-auto text-center">
          <h2 className="text-[36px] sm:text-[40px] lg:text-[48px] font-medium mb-4 mt-5">Top Picks For You</h2>
          <p className="text-[#9F9F9F] text-[16px] sm:text-[18px] lg:text-[20px] mb-10 px-4">
            Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Image src={Pic1} alt="Item 1" height={600} width={600} className="mx-auto mb-2 max-w-full" />
              <p className="font-[400] text-[16px] sm:text-[18px] lg:text-[20px]">Trenton modular sofa</p>
              <p className="font-[500] text-[24px] sm:text-[26px] lg:text-[28px]">Rs. 25,000.00</p>
            </div>

            <div className="text-center">
              <Image src={Pic2} alt="Item 2" height={1000} width={1000} className="mx-auto mb-2 max-w-full" />
              <p className="font-[400] text-[16px] sm:text-[18px] lg:text-[20px]">Granite dining table</p>
              <p className="font-[500] text-[24px] sm:text-[26px] lg:text-[28px]">Rs. 25,000.00</p>
            </div>

            <div className="text-center">
              <Image src={Pic3} alt="Item 3" height={500} width={500} className="mx-auto mb-2 max-w-full" />
              <p className="font-[400] text-[16px] sm:text-[18px] lg:text-[20px]">Outdoor bar table and stool</p>
              <p className="font-[500] text-[24px] sm:text-[26px] lg:text-[28px]">Rs. 25,000.00</p>
            </div>

            <div className="text-center">
              <Image src={Pic4} alt="Item 4" height={500} width={500} className="mx-auto mb-2 max-w-full" />
              <p className="font-[400] text-[16px] sm:text-[18px] lg:text-[20px]">Plain console with teak mirror</p>
              <p className="font-[500] text-[24px] sm:text-[26px] lg:text-[28px]">Rs. 25,000.00</p>
            </div>
          </div>
          <a href="../Shop"  rel="noopener noreferrer" aria-label="Profile">
          <button className="h-[50px] text-[24px] sm:text-[26px] lg:text-[28px] text-black font-medium leading-[36px] hover:text-[24px] hover:sm:text-[30px]  hover:lg:text-[32px] mt-10 mb-10">
            View More
            <hr className="mt-2 lg:mt-3  border-1 lg:border-2 border-black w-[120px] mx-auto" />
          </button>
          </a>
        </div>
      </section>

      <section className="bg-yellow-100 lg:py-2 py-9">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-8 gap-2 px-4">
          <div className="w-[325px] lg:w-[100%] h-auto">
            <Image src={Pic5} alt="Asgaard Sofa"
              className="mx-auto max-w-full" />
          </div>
          <div className="lg:w-[50%] text-center lg:text-left">
            <h2 className="text-black font-[500] text-[17px] sm:text-[30px] lg:text-[36px] lg:px-20">New Arrivals</h2>
            <h3 className="text-black font-extrabold text-[35px] sm:text-[56px] lg:text-[64px]">Asgaard sofa</h3>
            <div className="px-9 mt-2 ">
              <button className="h-[50px] lg:h-[70px] lg:w-[300px] w-[150px]  border-2 border-black text-black text-[20px] hover:text-[23px] sm:text-[23px] hover:sm:text-[26px] lg:text-[25px] hover:lg:text-[28px] ">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center py-12 ">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">Our Blogs</h2>
          <p className="text-gray-600 mb-8 text-lg sm:text-xl lg:text-2xl">Find a bright idea to suit your taste with our great selection</p>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 md:px-4 ">
            {/* Blog Card 1 */}
            <div className="bg-white h-[400px] sm:h-[450px] lg:h-[580px]  w-[300px] sm:w-[350px] lg:w-full shadow-lg rounded-lg overflow-hidden mx-auto">
              <Image
                src={Pic6}
                alt="Blog 1"
                className="w-full h-[200px] sm:h-[250px] lg:h-[393px] object-cover"
              />
              <div className="p-6 sm:p-7 lg:p-8">
                <h3 className="text-[18px] sm:text-[18px] lg:text-[20px] font-medium mb-5">
                  Going all-in with millennial design
                </h3>
                <a href="#" className="text-black  font-medium text-base sm:text-lg lg:text-xl hover:lg:text-[24px] hover:sm:text-[20px] hover:text-[18px]">
                  Read More
                  <hr className="mt-1 lg:mt-3 lg:border-2 border-1 border-black w-[100px] sm:w-[120px] mx-auto" />
                </a>
                <div className="flex justify-center gap-4 mt-3 lg:mt-7">
                  <span className="flex items-center gap-1 text-[#9F9F9F] text-sm">
                  <Image src={Clock} 
                      alt=''
                      className="text-black text-lg"/>
                    <p className="text-[14px]">5 mins</p>
                  </span>
                  <span className="flex items-center gap-1 text-[#9F9F9F] text-sm">
                  <Image src={Calendar} 
                      alt=''
                      className="text-black text-lg"/>
                    <p className="text-[14px]">{new Date().toLocaleDateString()}</p>
                  </span>
                </div>
              </div>
            </div>
            {/* Blog Card 2 */}
            <div className="bg-white h-[400px] sm:h-[450px] lg:h-[580px] w-[300px] sm:w-[350px] lg:w-full shadow-lg rounded-lg overflow-hidden mx-auto">
              <Image
                src={Pic7}
                alt="Blog 2"
                className="w-full h-[200px] sm:h-[250px] lg:h-[393px] object-cover"
              />
              <div className="p-6 sm:p-7 lg:p-8">
                <h3 className="text-[18px] sm:text-[18px] lg:text-[20px] font-medium mb-5">
                  Going all-in with millennial design
                </h3>
                <a  href="../Blog"  rel="noopener noreferrer" aria-label="Profile" className="text-black  font-medium text-base sm:text-lg lg:text-xl hover:lg:text-[24px] hover:sm:text-[20px] hover:text-[18px]">
                  Read More
                  <hr className="mt-1 lg:mt-3 lg:border-2 border-1 border-black w-[100px] sm:w-[120px] mx-auto" />
                </a>
                <div className="flex justify-center gap-4 mt-3 lg:mt-7">
                    <span className="flex items-center gap-1 text-[#9F9F9F] text-sm">
                      <Image src={Clock} 
                      alt=''
                      className="text-black text-lg"/>
                    
                    <p className="text-[14px]">5 mins</p>
                  </span>
                  <span className="flex items-center gap-1 text-[#9F9F9F] text-sm">
                  <Image src={Calendar} 
                      alt=''
                      className="text-black text-lg"/>
                    <p className="text-[14px]">{new Date().toLocaleDateString()}</p>
                  </span>
                </div>
              </div>
            </div>
            {/* Blog Card 3 */}
            <div className="bg-white h-[400px] sm:h-[450px] lg:h-[580px] w-[300px] sm:w-[350px] lg:w-full shadow-lg rounded-lg overflow-hidden mx-auto">
              <Image
                src={Pic8}
                alt="Blog 3"
                className="w-full h-[200px] sm:h-[250px] lg:h-[393px] object-cover"
              />
              <div className="p-6 sm:p-7 lg:p-8">
                <h3 className="text-[18px] sm:text-[18px] lg:text-[20px] font-medium mb-5">
                  Going all-in with millennial design
                </h3>
                <a  href="#"   className="text-black  font-medium text-base sm:text-lg lg:text-xl hover:lg:text-[24px] hover:sm:text-[20px] hover:text-[18px]">
                  Read More
                  <hr className="mt-1 lg:mt-3 lg:border-2 border-1 border-black w-[100px] sm:w-[120px] mx-auto" />
                </a>
                <div className="flex justify-center gap-4 mt-3 lg:mt-7">
                  <span className="flex items-center gap-1 text-[#9F9F9F] text-sm">
                  <Image src={Clock} 
                      alt=''
                      className="text-black text-lg"/>
                    <p className="text-[14px]">5 mins</p>
                  </span>
                  <span className="flex items-center gap-1 text-[#9F9F9F] text-sm">
                  <Image src={Calendar} 
                      alt=''
                      className="text-black text-lg"/>
                    <p className="text-[14px]">{new Date().toLocaleDateString()}</p>
                  </span>
                </div>
              </div>
            </div>
            <a href="../Blog"  rel="noopener noreferrer" aria-label="Profile">
            <button className="lg:mr-[-900px] h-[50px] text-[24px] sm:text-[26px] lg:text-[28px] text-black font-medium leading-[36px] hover:text-[24px] hover:sm:text-[30px]  hover:lg:text-[32px] mt-5 mb-5">
            View More
            <hr className="mt-2 lg:mt-3  border-1 lg:border-2 border-black w-[120px] mx-auto" />
          </button>
          </a>
          </div>
        </div>
      </section>
      <section className="relative w-full h-[350px] sm:h-[500px] md:h-[500px] text-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={Pic9}
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-4">Our Instagram</h2>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-8">Follow our store on Instagram</p>
          <button className="w-[200px] sm:w-[280px] md:w-[300px] hover:w-[220px] hover:sm:w-[300px] hover:md:w-[320px] h-[64px] bg-[#FAF4F4] text-black font-medium text-lg sm:text-xl md:text-2xl rounded-full shadow-lg  hover:text-[20px] hover:sm:text-[22px] hover:md:text-[26px]">
            Follow Us
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;


