'use client';

import Brain from '@/components/Brain';
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const skills = [
	{ id: 1, name: 'JavaScript' },
	{ id: 2, name: 'TypeScript' },
	{ id: 3, name: 'React' },
	{ id: 4, name: 'React Native' },
	{ id: 5, name: 'Next.js' },
	{ id: 6, name: 'Vue' },
	{ id: 7, name: 'Nuxt' },
	{ id: 8, name: 'HTML' },
	{ id: 9, name: 'CSS' },
	{ id: 10, name: 'SCSS' },
	{ id: 11, name: 'Tailwind' },
	{ id: 12, name: 'Bootstrap' },
	{ id: 13, name: 'Material UI' },
	{ id: 14, name: 'Git' },
	{ id: 15, name: 'GitHub' },
	{ id: 16, name: 'Rest API' },
	{ id: 17, name: 'GraphQL' },
	{ id: 18, name: 'Apollo' },
	{ id: 19, name: 'Redux Toolkit' },
	{ id: 20, name: 'Zustand' },
	{ id: 21, name: 'Pinia' },
	{ id: 22, name: 'Framer Motion' },
	{ id: 23, name: 'Firebase' },
	{ id: 24, name: 'Vite' },
];

const AboutPage = () => {
	const containerRef = useRef();
	const { scrollYProgress } = useScroll({
		container: containerRef,
	});

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			{/* CONTAINER */}
			<div
				className='h-full overflow-y-scroll lg:flex'
				ref={containerRef}
			>
				{/* TEXT CONTAINER */}
				<div className='flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:pr-0 p-[5vw] xl:w-1/2 lg:w-2/3'>
					{/* BIOGRAPHY CONTAINER */}
					<div className='flex flex-col justify-center gap-12'>
						{/* BIOGRAPHY TITLE */}
						<h1 className='text-2xl font-bold uppercase'>
							Biography
						</h1>
						{/* BIOGRAPHY DESCRIPTION */}
						<p className='text-lg'>
							Hi there! My name is Victor, and I'm a frontend
							developer with a strong passion for learning and
							growth. My professional journey began in a factory,
							where I found not only stability but also the
							importance of continuous development. Soon, I
							realized that my true calling lies in the world of
							programming.<br></br>
							Deciding to change careers, I devoted myself to
							frontend development. Since then, I have been
							tirelessly learning and expanding my skills in this
							field, striving to achieve the highest results.
							Currently, I am actively involved in volunteer
							projects, where my passion for creating beautiful
							and functional web interfaces finds its expression.
							<br></br>I am eagerly seeking opportunities to apply
							my skills and experience in a professional team,
							where I can not only grow but also contribute to the
							creation of high-quality web products. I look
							forward to the opportunity to meet with you and
							discuss how I can make a positive impact on your
							company!
						</p>
						{/* BIOGRAPHY QUOTE */}
						<span className='text-xl italic'>
							Every day is a new opportunity to become better than
							yesterday and move forward towards your dreams.
						</span>
						{/* BIOGRAPHY SIGN SVG */}
						<div className='self-end'>
							<Image
								src='/name.svg'
								alt='name'
								width={250}
								height={70}
								className='-rotate-3'
							/>
						</div>
						{/* BIOGRAPHY SCROLL SVG */}
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
							<path
								d='M12 6V14'
								stroke='#000000'
								strokeWidth='1'
							></path>
							<path
								d='M15 11L12 14L9 11'
								stroke='#000000'
								strokeWidth='1'
							></path>
						</motion.svg>
					</div>
					{/* SKILLS CONTAINER */}
					<div className='flex flex-col justify-center gap-12'>
						{/* SKILLS TITLE */}
						<h1 className='text-2xl font-bold uppercase'>Skills</h1>
						{/* SKILLS LIST */}
						<div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 auto-rows-fr'>
							{skills.map((skill) => (
								<div
									key={skill.id}
									className='flex items-center justify-center p-2 text-sm text-center text-white duration-300 bg-black rounded cursor-pointer hover:bg-amber-500'
								>
									{skill.name}
								</div>
							))}
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
							<path
								d='M12 6V14'
								stroke='#000000'
								strokeWidth='1'
							></path>
							<path
								d='M15 11L12 14L9 11'
								stroke='#000000'
								strokeWidth='1'
							></path>
						</motion.svg>
					</div>
					{/* EXPERIENCE CONTAINER */}
					<div className='flex flex-col justify-center gap-12 pb-48'>
						{/* EXPERIENCE TITLE */}
						<h1 className='text-2xl font-bold uppercase'>
							Experience
						</h1>
						{/* EXPERIENCE LIST */}
						<div>
							{/* EXPERIENCE LIST ITEM*/}
							<div>
								{/* LEFT */}
								<div>
									{/* JOB TITLE */}
									<div>Front-End Developer</div>
									{/* JOB DESCRIPTION */}
									<div>
										I create unique and engaging web
										applications using cutting-edge frontend
										technologies, ensuring optimal
										performance and responsive design for
										enhanced user experience. My work
										involves not only crafting functional
										and beautiful interfaces, but also
										actively collaborating with the team to
										effectively achieve project goals and
										continuously improving skills to align
										with the latest trends in frontend
										development.
									</div>
									{/* JOB DATE */}
									<div>October 2023 - Present</div>
									{/* JOB COMPANY */}
									<div>BAZA TRAINEE UKRAINE</div>
								</div>
								{/* CENTER */}
								<div>
									{/* LINE */}
									<div>
										{/* LINE CIRCLE */}
										<div></div>
									</div>
								</div>
								{/* RIGHT */}
								<div></div>
							</div>
							{/* EXPERIENCE LIST ITEM*/}
							<div className='flex justify-between h-48'>
								{/* LEFT */}
								<div className='w-1/3 bg-pink-200'>
									{/* JOB TITLE */}
									<div className='p-3 font-semibold bg-white rounded-b-lg rounded-s-lg'>
										Power Unit Engineer
									</div>
									{/* JOB DESCRIPTION */}
									<div className='p-3 text-sm italic'>
										I was responsible for process control
										and maintenance of power equipment. My
										responsibilities included monitoring and
										ensuring the efficient operation of
										power systems, participating in the
										planning and implementation of
										maintenance processes, as well as
										troubleshooting and resolving issues to
										ensure uninterrupted production.
										Additionally, I actively collaborated
										with other departments and specialists
										to ensure the safety and efficiency of
										equipment operation.
									</div>
									{/* JOB DATE */}
									<div className='p-3 text-sm font-semibold text-pink-400'>
										July 2002 - February 2022
									</div>
									{/* JOB COMPANY */}
									<div className='p-1 text-sm font-semibold bg-white rounded'>
										METINVEST
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
								<div className='w-1/3 bg-pink-200'></div>
							</div>
						</div>
					</div>
				</div>
				{/* SVG CONTAINER */}
				<div className='sticky top-0 z-30 hidden w-1/3 xl:w-1/2 lg:block'>
					<Brain scrollYProgress={scrollYProgress} />
				</div>
			</div>
		</motion.div>
	);
};

export default AboutPage;
