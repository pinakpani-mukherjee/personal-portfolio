"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className='md:grid md:grid-cols-5 gap-8 items-center '>
                <div className='flex flex-col h-full'>
                    <h3 className='font-bold text-white mb-4'>Programming Languages</h3>
                    <ul className='list-disc pl-2'>
                        <li>Python</li>
                        <li>Go</li>
                        <li>Scala</li>
                        <li>Typescript</li>
                        <li>Swift</li>
                        <li>Rust</li>
                        <li>C++</li>

                    </ul>
                </div>
                <div className='flex flex-col h-full'>
                    <h3 className='font-bold text-white mb-4'>Technology Frameworks </h3>
                    <ul className='list-disc pl-2'>
                        <li><a href='https://pytorch.org/' className='no-underline hover:underline'>Pytorch</a></li>
                        <li><a href='https://www.tensorflow.org/' className='no-underline hover:underline'>Tensorflow</a></li>
                        <li><a href='https://kafka.apache.org/' className='no-underline hover:underline'>Apache Kafka</a></li>
                        <li><a href='https://spark.apache.org/' className='no-underline hover:underline'>Apache Spark</a></li>
                        <li><a href='https://airflow.apache.org/' className='no-underline hover:underline'>Apache Airflow</a></li>
                        <li><a href='https://www.prefect.io/' className='no-underline hover:underline'>Prefect</a></li>
                        <li><a href='https://nextjs.org/' className='no-underline hover:underline'>NEXT.js</a></li>
                        <li><a href='https://tailwindcss.com/' className='no-underline hover:underline'>Tailwind</a></li>
                    </ul>
                </div>
                <div className='flex flex-col h-full'>
                    <h3 className='font-bold text-white mb-4'>Databases / Datastores </h3>
                    <ul className='list-disc pl-2'>
                        <li><a href='https://www.postgresql.org/' className='no-underline hover:underline'>Postgres</a></li>
                        <li><a href='https://www.mysql.com/' className='no-underline hover:underline'>MySQL</a></li>
                        <li><a href='https://www.mongodb.com/' className='no-underline hover:underline'>MongoDB</a></li>
                        <li><a href='https://firebase.google.com/docs/firestore' className='no-underline hover:underline'>Firestore</a></li>
                        <li><a href='https://aws.amazon.com/documentdb/' className='no-underline hover:underline'>DocumentDB</a></li>
                        <li><a href='https://cassandra.apache.org/_/index.html' className='no-underline hover:underline'>Cassandra</a></li>
                        <li><a href='https://redis.io/' className='no-underline hover:underline'>Redis</a></li>
                        <li><a href='https://www.teradata.com/Platform/VantageCloud' className='no-underline hover:underline'>Teradata Vantage</a></li>
                    </ul>
                </div>
                <div className='flex flex-col h-full'>
                    <h3 className='font-bold text-white mb-4'>Cloud Frameworks </h3>
                    <ul className='list-disc pl-2'>
                        <li><a href='https://aws.amazon.com/lambda/' className='no-underline hover:underline'>Lambda</a></li>
                        <li><a href='https://aws.amazon.com/sagemaker/' className='no-underline hover:underline'>SageMaker</a></li>
                        <li><a href='https://aws.amazon.com/emr/' className='no-underline hover:underline'>EMR</a></li>
                        <li><a href='https://aws.amazon.com/gamelift/' className='no-underline hover:underline'>Gamelift</a></li>
                        <li><a href='https://aws.amazon.com/athena/' className='no-underline hover:underline'>Athena</a></li>
                        <li><a href='https://aws.amazon.com/api-gateway/' className='no-underline hover:underline'>API Gateway</a></li>
                        <li><a href='https://cloud.google.com/functions' className='no-underline hover:underline'>Cloud Functions</a></li>
                        <li><a href='https://cloud.google.com/bigquery' className='no-underline hover:underline'>Big Query</a></li>
                        <li><a href='https://cloud.google.com/dataflow' className='no-underline hover:underline'>Dataflow</a></li>
                        <li><a href='https://cloud.google.com/run' className='no-underline hover:underline'>Cloud Run</a></li>
                        <li><a href='https://cloud.google.com/dataproc?hl=en' className='no-underline hover:underline'>Dataproc</a></li>
                    </ul>
                </div>
                <div className='flex flex-col h-full'>
                    <h3 className='font-bold text-white mb-4 '>Soft / Personal </h3>
                    <ul className='list-disc pl-2'>
                        <li>Project Management</li>
                        <li>Time Management</li>
                        <li>Interpersonal Relationships</li>
                        <li>Goal Setting</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <div className='md:grid md:grid-cols-2 gap-8 items-center '>
                <div className='flex flex-col h-full'>
                    <h3 className='font-bold text-white mb-4'><a href='https://www.ynu.ac.jp/english/' className='no-underline hover:underline'>Yokohama National University <br></br>横浜国立大学</a></h3>
                    <ul className='pl-2 list-item'>
                        <li>Bachelors in Electronics and Information Technology,</li>
                        <li>Department of Mathematics, Physics, Electrical Engineering and Computer Science,</li>
                        <li>College of Engineering Sciences,</li>
                        <li>2018-2023</li>
                    </ul>
                </div>
                <div className='flex flex-col h-full'>
                    <h3 className='font-bold text-white mb-4'><a href='https://www.tufs.ac.jp/english/' className='no-underline hover:underline'>Tokyo University of Foreign Studies<br></br>東京外国語大学</a></h3>
                    <ul className='pl-2 list-item'>
                        <li>Diploma in Japanese,</li>
                        <li>Japanese Language Center for International Students,</li>
                        <li>School of Language and Culture Studies,</li>
                        <li>2017-2018</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Python</li>
                <li>Go</li>
                <li>Postgres</li>
                <li>Javascript</li>
                <li>Python</li>
            </ul>
        )
    },
    {
        title: "Certificates",
        id: "certificates",
        content: (
            <ul className='list-disc pl-2'>
                <li>AWS Cloud Practitioner, Foundational</li>
                <li>AWS Solutions Architect, Associate</li>
                <li>AWS Developer, Associate</li>
                <li>GCP Associate Cloud Engineer</li>
                <li>GCP Professional Cloud Architect</li>
            </ul>
        )
    }

]


const AboutMe = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src={"/images/picture_5.jpg"} width={500} height={500} className='rounded-2xl' />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut asperiores doloremque facere aliquid laboriosam,
                        reprehenderit consectetur in dolore voluptatibus. Sunt velit minus quis tempore earum animi, commodi impedit consequuntur eius!</p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}> Experience </TabButton>
                        <TabButton selectTab={() => handleTabChange("certificates")} active={tab === "certificates"}> Certificates </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>

                </div>
                <br></br>
            </div>
        </section>
    )
}

export default AboutMe