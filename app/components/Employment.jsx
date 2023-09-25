"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA_EMPLOYMENT = [
    {
        title: "Professional",
        id: "professional",
        content: (
            <div className='md:grid md:grid-cols-2 gap-8 items-center '>
                <div className='flex flex-col h-full'>
                    <h3 className='font-bold text-white mb-4'>Teradata Consulting<br></br>Technical Consultant<br></br>2023/06 ~ Current</h3>
                    <ul className='pl-2 list-disc'>
                        <li>Engaged with clients in the Network and Automobile industries to understand their current data warehousing goals and challenges.</li>
                        <li>Collaborated with cross-functional teams, including data scientists, engineers, and analysts, to design and architect innovative solutions for our clients.</li>
                        <li>Focused on improving documentation for our clients for future requests, and maintenance after implementation.</li>
                        <li>Created POCs(Proof of Concepts) for our solutions in the cloud, both AWS and GCP. Including setting up and architecting the entire infrastructure for our On-Prem clients.</li>
                        <li>Migrated On-Prem services to the cloud in a timely fashion, while adhering to best practices for data migration.</li>
                        <li>Set up AWS MSK(Managed Service for Kafka) for one of our clients to streamline thier microservices.</li>
                    </ul>
                </div>
                <div className='flex flex-col h-full'>
                    <h3 className='font-bold text-white mb-4'>Paidy Inc.<br></br>Data Engineer<br></br>2021/02 ~ 2023/05</h3>
                    <ul className='pl-2 list-disc'>
                        <li>Worked on fraud detection and real time analysis of purchases made through our services.</li>
                        <li>Created and managed ETL jobs and pipelines to satisfy business needs of our internal users.</li>
                        <li>Worked with data engineering best principles within the data pipeline through AWS, Kafka and Elastic Search.</li>
                        <li>Maintained legacy software crucial to Fraud Detection.</li>
                        <li>Created and maintained of internal data-science and data-engineering tooling.</li>
                        <li>Focused on proper data sanitation and data architecture. For eg. implementation of the Medallion Architecture on all new data sources in Paidy.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Internships",
        id: "internships",
        content: (
            <div className='md:grid md:grid-cols-2 gap-8 items-center '>
                <div className='flex flex-col h-full'>
                    <h3 className='font-bold text-white mb-4'>Bosch Center for Artificial Intelligence<br></br>Data Scientist Intern<br></br>2020/04 ~ 2020/11</h3>
                    <ul className='pl-2 list-disc'>
                        <li>Working on research, improving and streamlining supply chains and workflows.</li>
                        <li>Used numerical methods, deep learning and various methods of data analysis to test POCs for internal projects.</li>
                        <li>Researched on GAN(Generative Adversarial Network)s to provide insights to Data Scientists.</li>
                        <li>Used GANs to create datasets for self-parking cars.</li>
                    </ul>
                </div>
                <div className='flex flex-col h-full'>
                    <h3 className='font-bold text-white mb-4'>Intes Japan<br></br>Simulations Engineer<br></br>2020/02 ~ 2020/04</h3>
                    <ul className='pl-2 list-disc'>
                        <li>Learned the principals and uses of FEA Finite Element Analysis.</li>
                        <li>Used internal tooling (Permans & Medina) to simulate stress strain behaviour in joints.</li>
                        <li>Created product analysis for a large automobile corporation in Japan .</li>
                        <li>Debugged issues in our software in Fortran.</li>
                    </ul>
                </div>
            </div>
        )
    },

    {
        title: "Volunteer",
        id: "volunteer",
        content: (
            <ul className='list-disc pl-2'>
                <li>Yokohama National University, YNU105</li>
                <li>Yokohama National University, Judo School for Kids</li>

            </ul>
        )
    }

]


const Employment = () => {
    const [tab, setTab] = useState("professional");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className='text-white' id="employment">
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>Employment</h2>
                    <p className='text-base lg:text-lg '>I have been working, in some form or the other since my first year in University. The first job I
                        ever held was a pasty chef in Shibuya. The work was hard and kept me bust. I decided to take an easier approach. I picked up my Computer
                        and installed python. That is where my passion for programming began. Here I am now, being constantly employed in the technology industry
                        in one way or another since 2018. I worked on a lot of projects, made a lot of friends and have enjoyed every moment of it. Every day I
                        wake up, to make myself a better person and an even better Techie.</p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("professional")} active={tab === "professional"}> Professional </TabButton>
                        <TabButton selectTab={() => handleTabChange("internships")} active={tab === "internships"}> Internships </TabButton>

                        <TabButton selectTab={() => handleTabChange("volunteer")} active={tab === "volunteer"}> Volunteer </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA_EMPLOYMENT.find((t) => t.id === tab).content}
                    </div>

                </div>
                <div className=' items-end flex flex-col h-full pt-10 '>
                    <Image src={"/images/picture_6.jpg"} width={500} height={500} className='rounded-2xl' />
                </div>
                <br></br>
            </div>
        </section>
    )
}

export default Employment