import React from 'react';

const Footer = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 border-b border-b-slate-300 pb-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] items-start">
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">Company</h1>
          <div className="text-[15px] text-black opacity-80 cursor-pointer  space-y-[1rem]">
            <p className='hover:text-yellow-600'>About</p>
            <p className='hover:text-yellow-600'>Affiliate</p>
            <p className='hover:text-yellow-600'>Careers & Culture</p>
            <p className='hover:text-yellow-600'>Blog</p>
            <p className='hover:text-yellow-600'>Press</p>
          </div>
        </div>
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">My Account</h1>
          <div className="text-[15px] text-black opacity-80 cursor-pointer  space-y-[1rem]">
            <p className='hover:text-yellow-600'>Press inquiries</p>
            <p className='hover:text-yellow-600'>Social media</p>
            <p className='hover:text-yellow-600'>Directories</p>
            <p className='hover:text-yellow-600'>Images & B-roll</p>
            <p className='hover:text-yellow-600'>Permissions</p>
          </div>
        </div>
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">Our Information</h1>
          <div className="text-[15px] text-black opacity-80 cursor-pointer  space-y-[1rem]">
            <p className='hover:text-yellow-600'>Return Policys</p>
            <p className='hover:text-yellow-600'>Return Policy</p>
            <p className='hover:text-yellow-600'>Terms & Conditions</p>
            <p className='hover:text-yellow-600'>Site Map</p>
            <p className='hover:text-yellow-600'>Store Hours</p>
          </div>
        </div>
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">About Us</h1>
          <div className="text-[15px] text-black opacity-80 cursor-pointer  space-y-[1rem]">
            <p className='hover:text-yellow-600'>Support Center</p>
            <p className='hover:text-yellow-600'>Customer Support</p>
            <p className='hover:text-yellow-600'>About Us</p>
            <p className='hover:text-yellow-600'>Copyright</p>
            <p className='hover:text-yellow-600'>Popular Campaign</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
