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
			<div className='flex flex-col h-full gap-20 pb-24 lg:flex-row lg:pb-0'>
				<div className='relative h-1/2 lg:h-full lg:w-1/2'>
					<Image
						src='/image.svg'
						alt=''
						fill
						className='object-contain'
					/>
				</div>
				<div className='flex flex-col items-center justify-center gap-8 h-1/2 lg:h-full lg:w-1/2'>
					<h1 className='text-4xl font-bold md:text-6xl'>
						Crafting Digital Experiences, <br></br>Designing
						Tomorrow
					</h1>
					<p className='md:text-xl'>
						Welcome to my digital canvas, where innovation and
						creativity converge. With a keen eye for aesthetics and
						a mastery of code, my portfolio showcases a diverse
						collection of projects that reflect my commitment to
						excellence.
					</p>
					<div className='flex items-center justify-center w-full gap-4 lg:justify-start'>
						<Link
							href='/portfolio'
							className='p-3 font-semibold text-white duration-300 bg-black border-4 border-black rounded-lg hover:bg-amber-500 hover:border-amber-500'
						>
							View My Work
						</Link>
						<Link
							href='/contact'
							className='p-3 font-semibold duration-300 border-4 border-black rounded-lg hover:bg-amber-500 hover:text-white hover:border-amber-500'
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
