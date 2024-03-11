'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Biography = () => {
	return (
		<div className='flex flex-col justify-center gap-12'>
			{/* BIOGRAPHY TITLE */}
			<h1 className='text-2xl font-bold uppercase'>Biography</h1>
			{/* BIOGRAPHY DESCRIPTION */}
			<p className='md:text-lg'>
				Hi there! My name is Victor, and I'm a frontend developer with a
				strong passion for learning and growth. My professional journey
				began in a factory, where I found not only stability but also
				the importance of continuous development. Soon, I realized that
				my true calling lies in the world of programming.<br></br>
				Deciding to change careers, I devoted myself to frontend
				development. Since then, I have been tirelessly learning and
				expanding my skills in this field, striving to achieve the
				highest results. Currently, I am actively involved in volunteer
				projects, where my passion for creating beautiful and functional
				web interfaces finds its expression.
				<br></br>I am eagerly seeking opportunities to apply my skills
				and experience in a professional team, where I can not only grow
				but also contribute to the creation of high-quality web
				products. I look forward to the opportunity to meet with you and
				discuss how I can make a positive impact on your company!
			</p>
			{/* BIOGRAPHY QUOTE */}
			<span className='italic md:text-xl'>
				Every day is a new opportunity to become better than yesterday
				and move forward towards your dreams.
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

export default Biography;
