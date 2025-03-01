import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Contact = () => {

    const [result, setResult] = useState("");

        const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "022e5daf-2b27-41cb-9aa6-97ab872d5e3a");
    
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

  return (
    <motion.div id='contact' 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'

    >
        <motion.h4 
            className='text-center mb-2 text-lg font-Ovo'
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
        >Connect With Me
        </motion.h4>

        <motion.h2 
            className='text-center text-5xl font-Ovo'
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
        >Get in Touch</motion.h2>

        <motion.p 
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.7, duration: 0.5}}
        >
            I'd love to connect with you! Whether you have a project in mind or just want to chat, feel free to get in touch. Let's collaborate and bring your ideas to life.
        </motion.p>

        <motion.form onSubmit={onSubmit} 
            className='max-w-2xl mx-auto'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.9, duration: 0.5}}
        >
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <motion.input 
                    type="text" placeholder='Enter Your Name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='name'
                    initial={{x: -50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 1.1}}
                />

                <motion.input 
                    type="email" placeholder='Enter Your Email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email'
                    initial={{x: 50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 1.2}}
                    />
            </div>

            <motion.textarea 
                rows='6' placeholder='Enter Your Message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' name='message'
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 1.3}}    
            >
            </motion.textarea>

            <motion.button 
                type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
                whileHover={{scale: 1.05}}
                transition={{duration: 0.3}}    
            >Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4'/
            ></motion.button>

            <p className='mt-4'>{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default Contact
