'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import Navbar from './Navbar';

const TransitionProvider = ({ children }) => {
	const pathName = usePathname();

	return (
		<AnimatePresence mode='wait'>
			<div
				key={pathName}
				className='w-screen h-screen bg-gradient-to-b from-pink-100 to-sky-200'
			>
				<motion.div
					className='fixed w-screen h-screen bg-black rounded-b-[100px] z-40'
					animate={{ height: 0 }}
					exit={{ height: '140vh' }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				/>
				<motion.div
					className='fixed top-0 bottom-0 left-0 right-0 z-40 m-auto text-white cursor-default text-8xl w-fit h-fit'
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					{pathName.substring(1) || 'home'}
				</motion.div>
				<motion.div
					className='fixed w-screen h-screen bg-black rounded-t-[100px] z-30 bottom-0'
					initial={{ height: '140vh' }}
					animate={{ height: 0, transition: { delay: 0.5 } }}
				/>
				<div className='h-24 px-[5vw] max-w-[1920px] mx-auto'>
					<Navbar />
				</div>
				<div className="h-[calc(100vh-6rem)] max-w-[1920px] mx-auto">
					{children}
				</div>
			</div>
		</AnimatePresence>
	);
};

export default TransitionProvider;
