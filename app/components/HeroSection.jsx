"use client";
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';



export const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left '>
                    <h1 className='text-white mb-4 text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r  from-violet-500 to-red-500'> Hello, I'm Pinakpani Mukherjee. I'm a {""}</span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Consultant',
                                1000,
                                'Data Engineer',
                                1000,
                                'Software Developer',
                                1000,
                                'Full Stack Engineer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}

                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-lg mb-6 l:text-xl '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi nemo debitis sapiente unde ducimus quae itaque magnam ut!
                        Laborum repudiandae qui deleniti odit cumque. Quisquam provident
                        fugit itaque blanditiis error?
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-violet-500 to-red-600 hover:bg-slate-200 text-white'>
                            For a Consult
                        </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-violet-500 to-red-500 hover:bg-slate-800 text-white  mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-0'>
                    <div className='rounded-full bg-[#121212] w-[500px] h-[500px] relative'>
                        <Image
                            src="/images/photo2_modified.png"
                            alt="hero image"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={400}
                            height={400}
                        />
                    </div>

                </div>
            </div>

        </section>
    )
};
export default HeroSection;
