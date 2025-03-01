import React from 'react'
import { motion } from "motion/react"
import { assets, toolsData } from '../../assets/assets'
import Image from 'next/image'

const Tools = () => {
  return (
    <motion.div id='services' 
     className='w-full px-[12%] py-10 scroll-mt-20'
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{duration: 1}}
     >
        <motion.h4 
            className='text-center mb-2 text-lg font-Ovo'
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.3, duration: 0.5}}
            >Tools
        </motion.h4>
        <motion.h2 
            className='text-center text-5xl font-Ovo'
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
        >Tools & Languages</motion.h2>

        <motion.p 
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.7, duration: 0.5}}
            >
                Here are the tools and languages I'm proficient in.
        </motion.p>

        <motion.ul
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{delay: 1.5, duration: 0.6}}
              className='flex items-center justify-center gap-3 sm:gap-5'
            >
                {toolsData.map((tool, index) => (
                    <motion.li 
                      whileHover={{scale: 1.1}}
                      className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500'
                        key={index}>
                        <Image src={tool} alt='tool' className='w-5 sm:w-7'/>
                    </motion.li>
                ))}
            </motion.ul>
    </motion.div>
  )
}

export default Tools
