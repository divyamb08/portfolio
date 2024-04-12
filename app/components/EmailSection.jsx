import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function EmailSection() {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div className=''>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>I am currently looking for new opportunities. Whether you have a question or just want to have a coffee chat, my inbox is always open. </p>
            <p className='pb-5'>P.S. I love telling and listening to stories <span role="img" aria-label="smiley">😊</span></p>
        <div className='socials flex flex-row gap-2'>
        <a href="https://linkedin.com/in/divyam-bansal" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                    <FaLinkedin alt="LinkedIn" className="h-10 w-10"/>
                </a>
                <a href="https://github.com/divyamb08" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                    <FaGithub alt="GitHub" className="h-10 w-10"/>
                </a>
        </div>
        
        </div>
        <div>
            <form className='flex flex-col gap-4 text-black'>
                {/* <label htmlFor='email' type="email" className='text-white block mb-1/2 text-sm font-medium mt-4 px-1'>Your Email</label> */}
                <label htmlFor="email" className='text-white px-1 mb-1/2'>Email</label>
                <input type='email' id='email' required className="rounded-full px-3 max-w-96 border border-black" placeholder='tonystark@gmail.com'/>
                <label htmlFor='subject' type="subject" className='text-white block mb-1/2 text-sm font-medium mt-4 px-1'>Subject</label>
                <input type='subject' id='subject' required className="rounded-full px-3 max-w-96 border border-black" placeholder='Voice assistant required.'/>
                <label htmlFor='message' type="message" className='text-white block mb-1/2 text-sm font-medium mt-4 px-1'>Message</label>
                <textarea name="message" id='message' required className="rounded-3xl px-3 max-w-96 border border-black pt-2 pb-2 min-h-fit" placeholder='Can you help me build Jarvis? ~TS'/>
                <div className='button px-0'>

                <button type='submit' className='px-6 py-3 align-self:center bg-gradient-to-br rounded-full mr-4 bg-black border-white hover:bg-white text-white hover:text-[#004c4c] cursor-pointer'>Submit</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default EmailSection
