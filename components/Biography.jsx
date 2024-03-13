import Image from 'next/image';

import ScrollSvg from './ScrollSvg'

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
			<ScrollSvg />
		</div>
	);
};

export default Biography;
