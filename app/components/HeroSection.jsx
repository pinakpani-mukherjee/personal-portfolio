"use client";
import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaSquareXTwitter, FaSquareGithub, FaInstagram } from "react-icons/fa6"
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';


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
                                'Software Dev',
                                1000,
                                'Technologist',
                                1000,
                                'Cloud Architect',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}

                            repeat={Infinity}
                        />

                        <br></br>
                    </h1>
                    <p className='text-[#ADB7BE] text-lg mb-6 l:text-xl '>
                        I am currently a consultant working in the heart of Tokyo. I am a <a href='https://www.studyinjapan.go.jp/en/planning/about-scholarship/#:~:text=to%201%20year.-,3.%20Japanese%20Government%20(Monbukagakusho%20MEXT)%20Scholarship,-There%20are%20two' className="underline">MEXT Scholar</a> and a graduate from Yokohama National University(横浜国立大学) in Electronics and Computer Science.
                        I have worked in the Machine Learning field for some time and also am a certified Cloud Architect. I am proficient in multiple languages, including Japanese and English.
                        Please feel free to contact me. I will respond as quickly as I can.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-violet-500 to-red-600 hover:bg-slate-200 text-white' >
                            <Link href="#contact">For a Consult</Link>
                        </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-violet-500 to-red-500 hover:bg-slate-800 text-white  mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                <a href="/CV_pinakpani.pdf">Download CV</a>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-0'>
                    <div className='rounded-full bg-[#121212] w-[500px] h-[500px] relative'>
                        <Image
                            src="/images/photo3.png"
                            alt="hero image"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className='flex justify-evenly my-2'>
                        <div>
                            <a href='https://www.linkedin.com/in/pinakpani-mukherjee-61573b166/'>
                                <FaLinkedin className='w-8 h-8' />
                            </a>

                        </div>
                        <div>
                            <a href='https://github.com/pinakpani-mukherjee'>
                                <FaSquareGithub className='w-8 h-8' />
                            </a>

                        </div>
                        <div>
                            <a href='https://twitter.com/dibeticpanda'>
                                <FaSquareXTwitter className='w-8 h-8' />
                            </a>

                        </div>
                        <div>
                            <a href='https://www.instagram.com/mukherjee_pinakpani/'>
                                <FaInstagram className='w-8 h-8' />
                            </a>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
};
export default HeroSection;
