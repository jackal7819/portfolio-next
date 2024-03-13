'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import ScrollSvg from './ScrollSvg'

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
			<ScrollSvg />
		</div>
	);
};

export default Skills;
