'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin, FaSquareGithub, FaTelegram } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
	{ url: '/', title: 'Home' },
	{ url: '/about', title: 'About' },
	{ url: '/portfolio', title: 'Portfolio' },
	{ url: '/contact', title: 'Contact' },
];

const socials = [
	{
		url: 'https://github.com/jackal7819',
		icon: FaSquareGithub,
		color: 'text-black',
		hover: 'hover:text-amber-500',
	},
	{
		url: 'https://t.me/jackal3156',
		icon: FaTelegram,
		color: 'text-blue-500',
		hover: 'hover:text-amber-500',
	},
	{
		url: 'https://www.linkedin.com/in/viktor-filippov-51a259241/',
		icon: FaLinkedin,
		color: 'text-blue-700',
		hover: 'hover:text-amber-500',
	},
];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	const topVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: 45,
			backgroundColor: '#fff',
		},
	};

	const centerVariants = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	};

	const bottomVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: -45,
			backgroundColor: '#fff',
		},
	};

	const listVariants = {
		closed: {
			x: '100vw',
		},
		opened: {
			x: 0,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.2,
			},
		},
	};

	const listItemVariants = {
		closed: {
			x: -50,
			opacity: 0,
		},
		opened: {
			x: 0,
			opacity: 1,
		},
	};

	return (
		<div className='flex items-center justify-between h-full'>
			{/* LINKS */}
			<div className='hidden gap-5 md:flex'>
				{links.map((link) => (
					<Link
						key={link.title}
						href={link.url}
						className={`rounded-md px-2 py-1 duration-300 hover:text-amber-500 ${
							pathname === link.url && 'bg-black text-white'
						}`}
					>
						<p className='text-2xl font-semibold'>{link.title}</p>
					</Link>
				))}
			</div>
			{/* LOGO */}
			<div className='md:hidden lg:flex'>
				<Link
					href='/'
					className='flex items-center justify-center p-1 text-xl font-semibold duration-300 bg-black rounded-md group hover:bg-amber-500'
				>
					<span className='ml-1 mr-2 text-white duration-300 group-hover:text-white'>
						ViK
					</span>
					<span className='flex items-center justify-center w-10 h-8 text-black duration-300 bg-white rounded group-hover:text-amber-500'>
						Tor
					</span>
				</Link>
			</div>
			{/* SOCIALS */}
			<div className='items-center hidden gap-5 md:flex'>
				{socials.map((social) => (
					<Link key={social.icon} href={social.url}>
						<social.icon
							className={`text-3xl duration-300 ${social.hover} ${social.color}`}
						/>
					</Link>
				))}
			</div>
			{/* MOBILE MENU */}
			<div className='md:hidden'>
				{/* HAMBURGER */}
				<button
					className='relative z-50 flex flex-col justify-between w-10 h-8'
					onClick={() => setOpen((prev) => !prev)}
				>
					<motion.div
						variants={topVariants}
						animate={open ? 'opened' : 'closed'}
						className='w-10 h-1 origin-left bg-black rounded'
					></motion.div>
					<motion.div
						variants={centerVariants}
						animate={open ? 'opened' : 'closed'}
						className='w-10 h-1 bg-black rounded'
					></motion.div>
					<motion.div
						variants={bottomVariants}
						animate={open ? 'opened' : 'closed'}
						className='w-10 h-1 origin-left bg-black rounded'
					></motion.div>
				</button>
				{/* MOBILE LINKS */}
				{open && (
					<motion.div
						variants={listVariants}
						initial='closed'
						animate='opened'
						className='absolute top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen gap-8 text-4xl text-white bg-black'
					>
						{links.map((link) => (
							<motion.div
								variants={listItemVariants}
								key={link.title}
							>
								<Link href={link.url}>{link.title}</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
