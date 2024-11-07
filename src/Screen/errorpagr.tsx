import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://th.bing.com/th/id/OIP.Z64A9O2v2s-F5vzNbZ1QMAHaEo?rs=1&pid=ImgDetMain')`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <h1 className="text-9xl font-bold animate-bounce hover:scale-110 transition-transform duration-300">
          404
        </h1>
        <p className="text-2xl md:text-3xl mt-5 animate-fadeIn">Oops! Page not found</p>
        <div className="mt-8">
          <a
            href="/"
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-gray-900 bg-white border border-gray-100 rounded group hover:bg-gray-50 focus:outline-none focus:ring"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-gray-900 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <Link to={'/'}>
            
            <span className="relative text-gray-900 group-hover:text-white transition-all duration-400">
              Go Home
            </span>
            
            </Link>
            
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
