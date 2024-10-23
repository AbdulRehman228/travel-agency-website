import React from 'react'
import Image from 'next/image'

const SupportTeam = () => {
  return (
    <div className='pt-[7rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
            <div>
                <h1 className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]'>
                Do you Need Help? Our Support Team Ready To Help You
                </h1>
                <p className='text-gray-900 opacity-90 text-[17px] mt-[1rem]'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quae eum unde fugiat tempora eius, 
                    saepe accusantium repellendus blanditiis commodi exercitationem provident, temporibus laudantium? Accusamus.
                </p>
                <div className='flex items-center space-x-6 mt-[2rem] '>
                    <Image src="/images/image-2.webp" alt='icon1' width={60} height={60}/>
                    <div>
                        <h1 className='text-[18px] text-gray-900 font-[500] mb-[0.5rem]'>Email client support</h1>

                        <p className='md:w-[70%] w-[90%] text-[15px] text-black opacity-85'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, et.                      
                        </p>
                    </div>
                </div>
                <div className='flex items-center space-x-6 mt-[2rem] '>
                    <Image src="/images/image-3.webp" alt='icon2' width={60} height={60}/>
                    <div>
                        <h1 className='text-[18px] text-gray-900 font-[500] mb-[0.5rem]'>Live ticket support</h1>

                        <p className='md:w-[70%] w-[90%] text-[15px] text-black opacity-85'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, et.                      
                        </p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                <Image src="/images/image-8.webp" alt='supportteam' width={700} height={700}/>
            </div>
        </div>
    </div>
  )
}

export default SupportTeam