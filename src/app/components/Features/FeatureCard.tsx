import React from 'react';
import Image from 'next/image';

interface Props {
  image: string;
  title: string;
}

const FeatureCard = ({ image, title }: Props) => {
  return (
    <div className="text-center bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
      <Image src={image} alt={`${title} icon`} width={70} height={70} className="mx-auto" />
      <h3 className="mt-4 text-lg font-semibold text-gray-800"></h3>
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-[#02073e]">
      {title}
      </h1>
      <p className="mt-[1rem] text-black opacity-90 text-[15px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam, voluptatum est repudiandae facilis praesentium?
      </p>
      <p className="mt-[1rem] text-red-600 font-[500] cursor-pointer hover:text-red-800">Learn More</p>
    </div>
  );
};

export default FeatureCard;
