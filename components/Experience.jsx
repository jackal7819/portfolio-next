'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
	const experienceRef = useRef();
	const isExperienceRefInView = useInView(experienceRef);
	return (
		<div
			className='flex flex-col justify-center gap-12'
			ref={experienceRef}
		>
			{/* EXPERIENCE TITLE */}
			<motion.h1
				className='text-2xl font-bold uppercase'
				initial={{ x: '-300px' }}
				animate={isExperienceRefInView ? { x: '0px' } : {}}
				transition={{ delay: 0.3 }}
			>
				Experience
			</motion.h1>
			{/* EXPERIENCE LIST */}
			<div>
				{/* EXPERIENCE LIST ITEM*/}
				<div className='flex justify-between h-72'>
					{/* LEFT */}
					<div className='w-5/6 md:w-1/3'>
						{/* JOB TITLE */}
						<div className='p-3 font-semibold bg-white rounded-b-lg rounded-s-lg'>
							Front-End Developer
						</div>
						{/* JOB DESCRIPTION */}
						<div className='p-3 text-sm italic'>
							I create unique and engaging web applications using
							cutting-edge frontend technologies, ensuring optimal
							performance and responsive design for enhanced user
							experience.
						</div>
						{/* JOB DATE */}
						<div className='p-3 text-sm font-semibold text-pink-400'>
							October 2023 - Present
						</div>
						{/* JOB COMPANY */}
						<div className='p-3 text-sm font-semibold bg-white rounded'>
							BAZA TRAINEE UKRAINE
						</div>
					</div>
					{/* CENTER */}
					<div className='flex justify-center w-1/6'>
						{/* LINE */}
						<div className='relative w-1 h-full bg-gray-600 rounded'>
							{/* LINE CIRCLE */}
							<div className='absolute w-5 h-5 bg-white rounded-full ring-4 ring-pink-400 -left-2'></div>
						</div>
					</div>
					{/* RIGHT */}
					<div className='w-0 md:w-1/3'></div>
				</div>
				{/* EXPERIENCE LIST ITEM */}
				<div className='flex flex-row-reverse justify-between h-72 md:flex-row'>
					{/* LEFT */}
					<div className='w-0 md:w-1/3'></div>
					{/* CENTER */}
					<div className='flex justify-center w-1/6'>
						{/* LINE */}
						<div className='relative w-1 h-full bg-gray-600 rounded'>
							{/* LINE CIRCLE */}
							<div className='absolute w-5 h-5 bg-white rounded-full ring-4 ring-pink-400 -left-2'></div>
						</div>
					</div>
					{/* RIGHT */}
					<div className='w-5/6 md:w-1/3'>
						{/* JOB TITLE */}
						<div className='p-3 font-semibold bg-white rounded-b-lg rounded-s-lg'>
							Power Unit Engineer
						</div>
						{/* JOB DESCRIPTION */}
						<div className='p-3 text-sm italic'>
							My responsibilities included monitoring and ensuring
							the efficient operation of power systems,
							participating in the planning and implementation of
							maintenance processes.
						</div>
						{/* JOB DATE */}
						<div className='p-3 text-sm font-semibold text-pink-400'>
							July 2002 - February 2022
						</div>
						{/* JOB COMPANY */}
						<div className='p-3 text-sm font-semibold bg-white rounded'>
							METINVEST
						</div>
					</div>
				</div>
			</div>
			{/* SKILLS SCROLL SVG */}
			<motion.svg
				initial={{ opacity: 0.2, y: 0 }}
				animate={{ opacity: 1, y: '10px' }}
				transition={{
					repeat: Infinity,
					duration: 3,
					ease: 'easeInOut',
				}}
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				width={50}
				height={50}
			>
				<path
					d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
					stroke='#000000'
					strokeWidth='1'
				></path>
				<path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
				<path
					d='M15 11L12 14L9 11'
					stroke='#000000'
					strokeWidth='1'
				></path>
			</motion.svg>
		</div>
	);
};

export default Experience;
