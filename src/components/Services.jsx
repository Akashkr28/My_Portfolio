import React from 'react'
import { assets, serviceData } from '../../assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div id='services' 
     className='w-full px-[12%] py-10 scroll-mt-48'
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{duration: 1}}
     >
        <motion.h4 
            className='text-center mb-2 text-lg font-Ovo'
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.3, duration: 0.5}}
            >Work I Offer
        </motion.h4>
        <motion.h2 
            className='text-center text-5xl font-Ovo'
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
        >My Services</motion.h2>

        <motion.p 
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.7, duration: 0.5}}
            >
            I'm Akash Kumar Singh, an emerging Full Stack Developer from Jamshedpur, India. Providing end-to-end web development solutions, from frontend design to backend development and deployment.
        </motion.p>

        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.9, duration: 0.6}} 
            className='grid grid-cols-auto gap-6 my-10'>
            {serviceData.map(({icon, title, description, link}, index) => (
                <motion.div
                    key={index}
                    whileHover={{scale: 1.05}}
                    className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
                >
                    <Image src={icon} alt='' className='w-10'/>
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                        {description}
                    </p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read More <Image src={assets.right_arrow} alt='' className='w-4'/>
                    </a>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services