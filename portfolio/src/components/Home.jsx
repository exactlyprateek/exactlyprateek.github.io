import { Center, SimpleGrid, Heading, Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Cardboard from './Cardboard'
import Main from './Main.jsx'
import Nav from './Nav'
// import { Link, animateScroll as scroll } from 'react-scroll';
import Footer from './Footer'
import PROJECT_DATA from '../constants/main'
import "./../App.css"
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

		// <Grid
		// 	// bg="black"
		// 	// className=""
		// 	// bgImage={"/public/circle-scatter.svg"}
		// 	// backgroundRepeat={0}
		// 	// backgroundSize={"cover"}

		// 	// h='2000px'
		// 	// templateRows='repeat(2, 1fr)'
		// 	// templateColumns='repeat(5, 1fr)'
		// 	// gap={4}
		// 	// overflow="scroll"

		// 	className='main-grid magicpattern'
		// >
		// 	<GridItem className="grid-element grid-element-1x2">hello</GridItem>
		// 	<GridItem className='grid-element' rowSpan={2} colSpan={1} />
		// 	<GridItem className='grid-element' rowSpan={2} colSpan={1} />
		// 	<GridItem className='grid-element' rowSpan={1} colSpan={3} />
		// 	<GridItem className='grid-element' rowSpan={1} colSpan={2} />

		// </Grid>

	)
}

export default Home
