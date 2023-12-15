import { Center, SimpleGrid, Heading, Box } from '@chakra-ui/react'
import React from 'react'
import Cardboard from './Cardboard'
import Main from './Main.jsx'
import Nav from './Nav'
// import { Link, animateScroll as scroll } from 'react-scroll';
import Footer from './Footer'
import PROJECT_DATA from '../constants/main'
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
					{PROJECT_DATA.map((i, idx) => (
						<Cardboard
							tags={i.tags}
							key={idx}
							description={i.description}
							title={i.title}
							visit={i.visit}
							code={i.code}
							demo={i.demo}
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
