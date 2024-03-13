'use client';

import Image from 'next/image';
import Link from 'next/link';
import { data } from '@/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PortfolioPage = () => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
	});
	const x = useTransform(scrollYProgress, [0.23, 1], ['0%', '-90.9%']);

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div className='h-[600vh] ref={ref}'>
				{/* HERO */}
				<div className='flex items-center justify-center text-center xl:text-8xl text-3xl md:text-4xl lg:text-5xl h-[calc(100vh-6rem)]'>
					My Works
				</div>
				{/* PROJECTS */}
				<div className='sticky top-0 flex items-center h-screen gap-4 overflow-hidden'>
					<motion.div style={{ x }} className='flex'>
						{data.map((item) => (
							<div
								key={item.id}
								className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
							>
								<div className='flex flex-col gap-8 text-white'>
									<h1>{item.title}</h1>
									<div className='relative'>
										<Image
											src={item.img}
											alt={item.title}
											width={500}
											height={500}
										/>
									</div>
									<p>{item.desc}</p>
									{/* BUTTONS */}
									<div className='flex items-center justify-center w-full gap-4 lg:justify-start'>
										<Link
											href={item.code}
											className='p-3 font-semibold text-white duration-300 bg-black border-4 border-black rounded-lg hover:bg-amber-500 hover:border-amber-500'
										>
											Github
										</Link>
										<Link
											href={item.link}
											className='p-3 font-semibold duration-300 border-4 border-black rounded-lg hover:bg-amber-500 hover:text-white hover:border-amber-500'
										>
											See Demo
										</Link>
									</div>
								</div>
							</div>
						))}
					</motion.div>
					{/* CIRCLE */}
					<div className='flex flex-col items-center justify-center w-screen h-screen gap-16 text-center'>
						<h1>Do you have a project?</h1>
					</div>
					<div className='relative'>
						<svg viewBox='0 0 300 300'>
							<defs>
								<path
									id='circlePath'
									d='M 150, 150 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0'
								/>
							</defs>
						</svg>
						<Link
							href='/contact'
							className='absolute top-0 bottom-0 left-0 right-0 w-16 h-16 m-auto md:w-28 md:h-28'
						>
							Hire Me
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default PortfolioPage;
