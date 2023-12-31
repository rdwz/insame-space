import '../global.css'
import { Analytics } from './components/analytics'
import LocalFont from '@next/font/local'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: {
		default: 'insame.space',
		template: '%s | insame.space',
	},
	description: 'Full Stack Web Developer and founder of spiritual.codes',
	openGraph: {
		title: 'insame.space',
		description: 'Full Stack Web Developer and founder of spiritual.codes',
		url: 'https://insame.space',
		siteName: 'insame.space',
		images: [
			{
				url: 'https://insame.space/og.jpg',
				width: 1200,
				height: 630,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Insame',
		card: 'summary_large_image',
	},
	icons: {
		shortcut: '/favicon.png',
	},
}
const inter = LocalFont({
	src: '../public/fonts/Inter-Regular-subset.woff2',
	variable: '--font-inter',
	display: 'swap',
})

const calSans = LocalFont({
	src: '../public/fonts/CalSans-SemiBold-subset.woff2',
	variable: '--font-calsans',
	display: 'swap',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={[inter.variable, calSans.variable].join(' ')}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
				}`}
			>
				{children}
			</body>
		</html>
	)
}
