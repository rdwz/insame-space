'use client'
import homeSimple from '@iconify/icons-line-md/home-simple'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null)
	const [isIntersecting, setIntersecting] = useState(true)

	useEffect(() => {
		if (!ref.current) return
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		)

		observer.observe(ref.current)
		return () => observer.disconnect()
	}, [])

	return (
		<header ref={ref}>
			<nav
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? 'bg-zinc-900/0 border-transparent'
						: 'bg-zinc-900/500 border-zinc-800 '
				}`}
			>
				<div className='container flex flex-row-reverse items-center justify-between p-6 mx-auto'>
					<ul className='flex justify-between gap-8'>
						<li>
							<Link
								href='/projects'
								className='duration-200 text-zinc-400 hover:text-zinc-100'
							>
								/projects
							</Link>
						</li>
						<li>
							<Link
								href='/contact'
								className='duration-200 text-zinc-400 hover:text-zinc-100'
							>
								/contact
							</Link>
						</li>
					</ul>

					<Link
						aria-label='Go back'
						href='/'
						className='duration-200 text-zinc-300 hover:text-zinc-100'
					>
						<Icon
							icon={homeSimple}
							width='24'
							height='24'
							className='w-6 h-6'
						/>
					</Link>
				</div>
			</nav>
		</header>
	)
}
