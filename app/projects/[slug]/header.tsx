'use client'
import arrowLeft from '@iconify/icons-line-md/arrow-left'
import arrowSmallRight from '@iconify/icons-line-md/arrow-small-right'
import githubIcon from '@iconify/icons-line-md/github'
import twitterXAlt from '@iconify/icons-line-md/twitter-x-alt'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
	project: {
		title: string
		description: string
		repository?: string
	}
}
export const Header: React.FC<Props> = ({ project }) => {
	const ref = useRef<HTMLElement>(null)
	const [isIntersecting, setIntersecting] = useState(true)

	const links: { label: string; href: string }[] = []
	if (project.repository) {
		links.push({
			label: 'Source',
			href: `https://github.com/${project.repository}`,
		})
	}
	if (project.title) {
		links.push({
			label: 'Website',
			href: `https://${project.title}`,
		})
	}
	useEffect(() => {
		if (!ref.current) return
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		)

		observer.observe(ref.current)
		return () => observer.disconnect()
	}, [])

	return (
		<header
			ref={ref}
			className='relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black'
		>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
					isIntersecting
						? 'bg-zinc-900/0 border-transparent'
						: 'bg-white/10 border-zinc-200 lg:border-transparent'
				}`}
			>
				<div className='container flex flex-row-reverse items-center justify-between p-6 mx-auto'>
					<div className='flex justify-between gap-8'>
						<Link target='_blank' href='https://twitter.com/redwerkz'>
							<Icon
								icon={twitterXAlt}
								width='20'
								height='20'
								className={`w-6 h-6 duration-200 hover:font-medium ${
									isIntersecting
										? ' text-zinc-400 hover:text-zinc-100'
										: 'text-zinc-600 hover:text-zinc-900'
								} `}
							/>
						</Link>
						<Link target='_blank' href='https://github.com/rdwz'>
							<Icon
								icon={githubIcon}
								width='24'
								height='24'
								className={`w-6 h-6 duration-200 hover:font-medium ${
									isIntersecting
										? ' text-zinc-400 hover:text-zinc-100'
										: 'text-zinc-600 hover:text-zinc-900'
								} `}
							/>
						</Link>
					</div>

					<Link
						href='/projects'
						className={`duration-200 hover:font-medium ${
							isIntersecting
								? ' text-zinc-400 hover:text-zinc-100'
								: 'text-zinc-600 hover:text-zinc-900'
						} `}
					>
						<Icon
							icon={arrowLeft}
							width='24'
							height='24'
							className='w-6 h-6 '
						/>
					</Link>
				</div>
			</div>
			<div className='container mx-auto relative isolate overflow-hidden py-24 sm:py-32'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center'>
					<div className='mx-auto max-w-2xl lg:mx-0'>
						<h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl font-display'>
							{project.title}
						</h1>
						<p className='mt-6 text-lg leading-8 text-zinc-300'>
							{project.description}
						</p>
					</div>

					<div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
						<div className='grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10'>
							{links.map((link) => (
								<Link target='_blank' key={link.label} href={link.href}>
									{link.label}{' '}
									<Icon
										icon={arrowSmallRight}
										className='inline'
										aria-hidden='true'
									/>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
