import Image from 'next/image';
import Sofa from '@/app/public/sofa.png'
import Seeter from '@/app/public/Mask group.png'
import Table from '@/app/public/Granite square side table 1.png'
import Pic1 from '@/app/public/Trenton modular .png'
import Pic2 from '@/app/public/table.png'
import Pic3 from '@/app/public/Mask1.png'
import Pic4 from '@/app/public/Mask2.png'
import Pic5 from '@/app/public/Asgaard sofa 1.png'
import Header from '@/app/components/header'

const Hero = () => {
  return (
    <div>
      <Header/>
    <div className="w-full h-[900px] bg-[#FBEBB5] flex items-center relative pb-28">
      
      <div className="absolute left-[200px] ">
      
        <h1 className="text-[#000000]  font-medium text-[64px] leading-[96px] ">
          Rocket Single <br /> Seater
          </h1>
        <button className=" font-medium underline hover:text-[26px]
        text-[24px] leading-[36px]  text-black">
          Shop Now
        </button>
      </div>
      
      <div className="absolute left-[500px] ">
        <Image
        src={Sofa}
          alt="Sofa Single Seater"
          className="w-[900px] h-[1000px] "
        />
      </div>
    </div>
    
    <div className=" text-gray-800 ">
      {/* Top Section with Two Items */}
      <section className="bg-[#FAF4F4] py-12">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 h-[672px]">
            {/* Side Table 1 */}
            <div className="text-center flex flex-col items-center">
              <Image
                src={Seeter}
                alt="Side Table"
                className="mx-auto  mb-[-100px] w-[100%] h-[auto]" 
              />
              <h3 className="text-[36px] font-medium leading-[54px] mt-0 mb-0">Side table</h3>
              <button className="mt-2 text-[24px] font-medium leading-[36px] underline hover:text-[26px]">
                View More
              </button>
            </div>

            {/* Side Table 2 */}
            <div className="text-center flex flex-col items-center">
              <Image
                src={Table}
                alt="Side Table"
                className="mx-auto  w-[100%] mb-[-100px] h-[auto]" 
              />
              <h3 className="text-[36px] font-medium leading-[54px]  ">Side table</h3>
              <button className="mt-2  text-[24px] font-medium leading-[36px] underline hover:text-[26px]">
                View More
              </button>
            </div>
          </div>
        </section>

      
      <section className="h-[700px] bg-[#FFFFFF] py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Top Picks For You</h2>
          <p className="text-gray-600 mb-8 px-4">
            Find a bright idea to suit your taste with our great selection of
            suspension, floor, and table lights.
          </p>
          <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {/* Card 1 */}
            <div className="text-center">
              <Image
                src={Pic1}
                alt="Item 1"
                height={500}
                width={500}
                className="mx-auto mb-2 max-w-full"
              />
              <p className="text-sm">Trenton modular sofa, 3</p>
              <p className="text-sm font-semibold">Rs. 25,000.00</p>
            </div>
            {/* Card 2 */}
            <div className="text-center">
              <Image
                src={Pic2}
                alt="Item 2"
                height={500}
                width={500}
                className="mx-auto mb-2 max-w-full"
              />
              <p className="text-sm">Granite dining table with dining chair</p>
              <p className="text-sm font-semibold">Rs. 25,000.00</p>
            </div>
        
{/* Card 3 */}
            <div className="text-center">
              <Image
                src={Pic3}
                alt="Item 3"
                height={500}
                width={500}
                className="mx-auto mb-2 max-w-full"
              />
              <p className="text-sm">Outdoor bar table and stool</p>
              <p className="text-sm font-semibold">Rs. 25,000.00</p>
            </div> 

            {/* Card 4 */}
             <div className="text-center">
              <Image
                src={Pic4}
                alt="Item 4"
                height={500}
                width={500}
                className="mx-auto mb-2 max-w-full"
              />
              <p className="text-sm">Plain console with teak mirror</p>
              <p className="text-sm font-semibold">Rs. 25,000.00</p>
            </div>
          </div>
          <button className="  text-[24px] font-medium leading-[36px] underline hover:text-[26px]">
                View More
              </button>
        </div>
      </section> 

{/* New Arrivals Section */}
      <section className="bg-yellow-100 h-[690px]">
       <div className="container mx-auto flex flex-col 
        md:flex-row items-center gap-8 px-4">
          {/* Image */}
            <div className="w-[983px] h-[799px]">
            <Image
              src={Pic5}
              alt="Asgaard Sofa"
              className="mx-auto max-w-full"
            />
          </div>  

          {/* Text */}
          <div className="md:w-[500px] text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">New Arrivals</h2>
            <h3 className="text-6xl font-bold mb-4">Asgaard sofa</h3>
            <button className=" px-6 py-2 bg-black text-white text-sm hover:bg-white hover:text-black">
              Order Now
            </button>
          </div>
        </div>
      </section>
    <div className="text-center py-12">
      <h2 className="text-3xl font-semibold mb-4">Our Blogs</h2>
      <p className="text-gray-600 mb-8">Find a bright idea to suit your taste with our great selection</p>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Blog Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/path-to-your-image-1.jpg"
            alt="Blog 1"
            width={500}
            height={250}
            className="w-full h-[250px] object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-medium mb-2">Going all-in with millennial design</h3>
            <p className="text-sm text-gray-500 mb-4">5 min | 12th Oct 2022</p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/path-to-your-image-2.jpg"
            alt="Blog 2"
            width={500}
            height={250}
            className="w-full h-[250px] object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-medium mb-2">Going all-in with millennial design</h3>
            <p className="text-sm text-gray-500 mb-4">5 min | 12th Oct 2022</p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/path-to-your-image-3.jpg"
            alt="Blog 3"
            width={500}
            height={250}
            className="w-full h-[250px] object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-medium mb-2">Going all-in with millennial design</h3>
            <p className="text-sm text-gray-500 mb-4">5 min | 12th Oct 2022</p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* View All Posts Button */}
      <div className="mt-8">
        <a href="#" className="text-lg font-medium text-blue-500 hover:underline">
          View All Post
        </a>
      </div>
    </div>
 

            </div>
            </div>
  );
};
export default Hero;

            

      
    
