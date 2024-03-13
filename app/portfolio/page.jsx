'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollSvg from '@/components/ScrollSvg';
import { data } from '@/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PortfolioPage = () => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
	});
	const x = useTransform(scrollYProgress, [0.23, 0.81], ['0%', '-90.9%']);

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div className='h-[600vh] ref={ref}'>
				{/* HERO */}
				<div className='flex items-center justify-center text-center xl:text-8xl sm:text-5xl text-4xl md:text-6xl lg:text-7xl h-[calc(100vh-6rem)] flex-col gap-10'>
					<h1>My Works</h1>
					<ScrollSvg />
				</div>
				{/* PROJECTS */}
				<div className='sticky top-0 flex items-center h-screen gap-4 overflow-hidden'>
					<motion.div style={{ x }} className='flex'>
						{data.map((item) => (
							<div
								key={item.id}
								className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
							>
								<div className='flex flex-col items-start justify-center gap-8 text-white'>
									<h1 className='text-3xl md:text-4xl xl:text-5xl'>
										{item.title}
									</h1>
									{/* <div className='relative h-[180px] w-[320px] sm:h-[225px] sm:w-[400px] md:h-[281px] md:w-[500px] lg:h-[351px] lg:w-[625px] 2xl:h-[439px] 2xl:w-[781px]'> */}
									<div className='relative h-[180px] w-[320px] sm:h-[225px] sm:w-[400px] md:h-[281px] md:w-[500px] lg:h-[351px] lg:w-[625px] xl:h-[50vh] xl:w-[50vw]'>
										<Image
											src={item.img}
											alt={item.title}
											fill
										/>
									</div>
									<p className='w-[320px] sm:w-[400px] md:w-[500px] lg:w-[625px] xl:w-[50vw] lg:text-lg'>
										{item.desc}
									</p>
									{/* BUTTONS */}
									<div className='flex items-center justify-start w-full gap-4'>
										<Link
											href={item.code}
											className='w-32 p-3 font-semibold text-center text-white duration-300 bg-black border-4 border-black rounded-lg hover:bg-amber-500 hover:border-amber-500'
										>
											Github
										</Link>
										<Link
											href={item.link}
											className='w-32 p-3 font-semibold text-center duration-300 border-4 border-black rounded-lg hover:bg-amber-500 hover:text-white hover:border-amber-500'
										>
											See Demo
										</Link>
									</div>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
			{/* CIRCLE */}
			<div className='flex flex-col items-center justify-center h-screen gap-5 text-center p-[5%] bg-gradient-to-b from-pink-100 to-sky-200'>
				<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
					Do you have a project?
				</h1>
				<div className='relative'>
					<motion.svg
						animate={{ rotate: 360 }}
						transition={{
							duration: 8,
							ease: 'linear',
							repeat: Infinity,
						}}
						viewBox='0 0 300 300'
						className='w-64 h-64 md:w-[500px]
						md:h-[500px]'
					>
						<defs>
							<path
								id='circlePath'
								d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 1,1 -120,0'
							/>
						</defs>
						<text fill='#000'>
							<textPath
								xlinkHref='#circlePath'
								className='text-xl font-semibold tracking-tight'
							>
								Growth-Minded Front-End Developer
							</textPath>
						</text>
					</motion.svg>
					<Link
						href='/contact'
						className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-20 h-20 m-auto text-white bg-black rounded-full md:text-xl md:w-28 md:h-28'
					>
						Hire Me
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default PortfolioPage;
