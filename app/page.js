'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div className='flex flex-col h-full gap-20 pb-24 lg:flex-row lg:pb-0 px-[5vw]'>
				{/* IMAGE CONTAINER */}
				<div className='relative h-1/2 lg:h-full lg:w-1/2'>
					<Image
						src='/image.svg'
						alt=''
						fill
						className='object-contain'
					/>
				</div>
				{/* TEXT CONTAINER */}
				<div className='flex flex-col items-center justify-center gap-8 h-1/2 lg:h-full lg:w-1/2'>
					{/* TITLE */}
					<h1 className='text-4xl font-bold md:text-6xl'>
						Crafting Digital Experiences, <br></br>Designing
						Tomorrow
					</h1>
					{/* DESCRIPTION */}
					<p className='md:text-xl'>
						Welcome to my digital canvas, where innovation and
						creativity converge. With a keen eye for aesthetics and
						a mastery of code, my portfolio showcases a diverse
						collection of projects that reflect my commitment to
						excellence.
					</p>
					{/* BUTTONS */}
					<div className='flex items-center justify-center w-full gap-4 lg:justify-start'>
						<Link
							href='/portfolio'
							className='w-40 p-3 font-semibold text-center text-white duration-300 bg-black border-4 border-black rounded-lg hover:bg-amber-500 hover:border-amber-500 active:bg-amber-400'
						>
							View My Work
						</Link>
						<Link
							href='/contact'
							className='w-40 p-3 font-semibold text-center duration-300 border-4 border-black rounded-lg hover:bg-amber-500 hover:text-white hover:border-amber-500 active:bg-amber-400'
						>
							Contact Me
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Home;
