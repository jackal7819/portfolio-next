'use client';

import { motion, useInView } from 'framer-motion';
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
	{ id: 25, name: 'Storybook' },
];

const Skills = () => {
	const skillsRef = useRef();
	const isSkillsRefInView = useInView(skillsRef);
	return (
		<div className='flex flex-col justify-center gap-12' ref={skillsRef}>
			{/* SKILLS TITLE */}
			<motion.h1
				initial={{ x: '-300px' }}
				animate={isSkillsRefInView ? { x: '0px' } : {}}
				transition={{ delay: 0.3 }}
				className='text-2xl font-bold uppercase'
			>
				Skills
			</motion.h1>
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

export default Skills;
