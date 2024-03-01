'use client';

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
		hover: 'hover:text-slate-600',
	},
	{
		url: 'https://t.me/jackal3156',
		icon: FaTelegram,
		color: 'text-blue-500',
		hover: 'hover:text-blue-700',
	},
	{
		url: 'https://www.linkedin.com/in/viktor-filippov-51a259241/',
		icon: FaLinkedin,
		color: 'text-blue-700',
		hover: 'hover:text-blue-500',
	},
];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	return (
		<div className='flex items-center justify-between h-full'>
			<div className='hidden gap-5 md:flex'>
				{links.map((link) => (
					<Link
						key={link.title}
						href={link.url}
						className={`rounded-md px-2 py-1 duration-300 ${
							pathname === link.url && 'bg-black text-white'
						}`}
					>
						<p className='text-2xl font-semibold'>{link.title}</p>
					</Link>
				))}
			</div>
			<div className='md:hidden lg:flex'>
				<Link
					href='/'
					className='flex items-center justify-center p-1 text-xl font-semibold bg-black rounded-md'
				>
					<span className='ml-1 mr-2 text-white'>ViK</span>
					<span className='flex items-center justify-center w-10 h-8 text-black bg-white rounded'>
						Tor
					</span>
				</Link>
			</div>
			<div className='items-center hidden gap-5 md:flex'>
				{socials.map((social) => (
					<Link key={social.icon} href={social.url}>
						<social.icon
							className={`text-3xl duration-300 ${social.hover} ${social.color}`}
						/>
					</Link>
				))}
			</div>
			<div className='md:hidden'>
				<button
					className='relative z-50 flex flex-col justify-between w-10 h-7'
					onClick={() => setOpen((prev) => !prev)}
				>
					<div
						className={`w-10 h-1 rounded ${
							open ? 'bg-white' : 'bg-black'
						}`}
					></div>
					<div className={`w-10 h-1 rounded ${
							open ? 'bg-white' : 'bg-black'
						}`}></div>
					<div className={`w-10 h-1 rounded ${
							open ? 'bg-white' : 'bg-black'
						}`}></div>
				</button>
				{open && (
					<div className='absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-screen h-screen gap-8 text-4xl text-white bg-black'>
						{links.map((link) => (
							<Link key={link.title} href={link.url}>
								{link.title}
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
