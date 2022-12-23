import { Center, SimpleGrid, Heading, Box } from '@chakra-ui/react'
import React from 'react'
import Cardboard from './Cardboard'
import Main from './Main.jsx'
import Nav from './Nav'
// import { Link, animateScroll as scroll } from 'react-scroll';
import Footer from './Footer'
function Home() {
	return (
		<div>
			<Nav />
			<Box maxH="50vh">
				<Main />
			</Box>
			<Box mt={['52vh', '42vh', '32vh', '22vh']}>
				<Center>
					<Heading pt="2rem" id="projects" as="h2" size="2xl">
						My Projects
					</Heading>
				</Center>

				<SimpleGrid
					id="cards"
					backgroundImage="/blobs.svg"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					minChildWidth="400px"
					mt="4rem"
				>
					{[
						{
							title: 'DMIS211',
							desciption:
								'DMIS - Resource Stabilization to Prevent Loss of Housing for People at Risk of Homelessness.',
							visit: 'http://demo.dmis211.com/',
							code: null,
							image: '/dmis.png',
							tags: 'React Redux GoogleMaps Chakra-UI TypeScript'
						},
						{
							title: 'Integration Builder',
							desciption:
								'AI Studio - AI Studio to automate customer support.',
							visit: 'https://aistudio-dev.netomi.io/',
							code: null,
							image: '/ais.png',
							tags: 'React Redux Vuejs Material-ui React-Flow TypeScript'
						},
						{
							title: 'Zira Tickets',
							desciption: 'Zira Tickets - To do tasks manager',
							visit: '/zira',
							code: 'https://github.com/exactlyprateek/exactlyprateek.github.io',
							image: '/zira.png',
							tags: 'Vanilla-JS jQuery github-pages'
						},
						{
							title: 'Spotify Clone',
							desciption: 'Small scale music player',
							visit: 'https://spotify-clone-rho.vercel.app/',
							code: 'https://github.com/exactlyprateek/spotify-clone/',
							image: '/spotify-clone.png',
							tags: 'reactjs typescript'
						},
						{
							title: 'Best Resources',
							desciption: 'Best Resources for Devs / Designers / Stuents',
							visit: 'https://bestresources.vercel.app/',
							code: null,
							image: '/bestresources1.png',
							tags: 'ReactJS Django DRF'
						},
						{
							title: 'Excel Clone',
							desciption: 'Clone of Microsoft Excel',
							visit: 'excel/',
							code: null,
							image: '/excel.png',
							tags: 'html css vanilla-js'
						},
						{
							title: 'Common Room',
							desciption: 'Common Room for all things MSIT',
							visit: 'https://commonrooom.vercel.app/',
							code: 'https://github.com/exactlyprateek/common-room-final',
							image: '/commonroom.png',
							tags: 'NextJS Dummy Work_In_Progress'
						}
					].map((i, idx) => (
						<Cardboard
							tags={i.tags}
							key={idx}
							desciption={i.desciption}
							title={i.title}
							visit={i.visit}
							code={i.code}
							image={i.image}
						/>
					))}
				</SimpleGrid>
			</Box>
			<Footer />
		</div>
	)
}

export default Home
