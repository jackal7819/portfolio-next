'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactPage = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const text = 'Say Hello!';

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div className='flex flex-col items-center justify-center h-full px-[5%]'>
				{/* TEXT CONTAINER */}
				<div className='flex items-center justify-center text-6xl h-1/2 lg:h-full lg:w-1/2'>
					<div>
						{text.split('').map((char, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 1 }}
								animate={{ opacity: 0 }}
								transition={{
									duration: 3,
									repeat: Infinity,
									delay: index * 0.1,
								}}
							>
								{char}
							</motion.span>
						))}
						😊
					</div>
				</div>
				{/* FORM CONTAINER */}
				<form className='flex flex-col justify-center gap-8 p-[5%] text-xl bg-sky-200 h-1/2 lg:h-full lg:w-1/2 rounded-xl w-full'>
					<span>Dear Viktor,</span>
					<textarea
						rows='6'
						className='bg-transparent border-b-2 border-black outline-none resize-none'
					/>
					<span>My mail address is:</span>
					<input
						type='text'
						className='bg-transparent border-b-2 border-black outline-none'
					/>
					<button className='w-full p-3 font-semibold text-center duration-300 border-4 border-black rounded-lg hover:bg-amber-500 hover:text-white hover:border-amber-500 active:bg-amber-400'>
						Send
					</button>
				</form>
			</div>
		</motion.div>
	);
};

export default ContactPage;
