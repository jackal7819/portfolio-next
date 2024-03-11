'use client';

import Biography from '@/components/Biography'
import Brain from '@/components/Brain';
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import { motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';

const AboutPage = () => {
	const containerRef = useRef();
	const { scrollYProgress } = useScroll({
		container: containerRef,
	});
	// const skillRef = useRef();
	// const isSkillRefInView = useInView(skillRef);
	// console.log('about: ', isSkillRefInView);
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
				<div className="flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2 p-[5vw] 2xl:pr-[5vw]">
					<Biography />
					<Skills />
					<Experience />
					<Education />
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
