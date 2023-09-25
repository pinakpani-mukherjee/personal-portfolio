"use client";
import React, { useState } from 'react'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();


        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    }
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id="contact">
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
             from-red-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute 
             top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 '></div>
            <div className='z-10'>
                <h5 className='text-4xl font-bold text-white my-2'> Let's Connect.</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    Im always looking to connect with new and like minded people and my inbox is always open.
                    Whether you have a question or a consulting request or you just want to say hi, I'll try my
                    best to get back to you!
                </p>
            </div>
            <div>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor='email'
                            className='text-white block text-sm font-medium mb-2'>
                            Your Email
                        </label>
                        <input name='email'
                            type='email'
                            id="email"
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            required
                            placeholder='test@example.com' />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='subject'
                            className='text-white block text-sm font-medium mb-2'>
                            Subject
                        </label>
                        <input
                            name='subject'
                            type='text'
                            id="subject"
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            required
                            placeholder='Just saying Hi!' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>
                            Message
                        </label>
                        <textarea
                            name='message'
                            id="message"
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder="Leave a Message ..." >

                        </textarea>
                    </div>
                    <button type='submit' className='bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button>
                    {emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Email sent successfully!
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default EmailSection