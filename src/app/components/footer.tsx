import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Shop</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Payment Options</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Returns</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-600 mb-4">Enter your email address to subscribe</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full p-3 rounded-l-md border border-gray-300"
            />
            <button className="p-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="text-center mt-8 text-gray-600">
        <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>2022 Meubel House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
