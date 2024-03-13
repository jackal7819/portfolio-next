'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import ScrollSvg from './ScrollSvg'

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
			<ScrollSvg />
		</div>
	);
};

export default Experience;
