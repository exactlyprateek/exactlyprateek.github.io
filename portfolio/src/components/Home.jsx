import { Center, SimpleGrid, Heading, Box, Grid, GridItem, useColorMode, Button, useColorModeValue, Stack, Link } from '@chakra-ui/react'
import React from 'react'
import Cardboard from './Cardboard'
import Main from './Main.jsx'
import Nav from './Nav'
// import { Link, animateScroll as scroll } from 'react-scroll';
import Footer from './Footer'
import PROJECT_DATA from '../constants/main'
import "./../App.css"
import { ExternalLinkIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
function Home() {
	const { colorMode, toggleColorMode } = useColorMode()
	// const
	// _hover = {{
	// 	outline: useColorModeValue("2px solid ", "2px solid")
	// }
	// }
	const oneXtwo = { rowSpan: [1, 1, 1, 1, 1], p: "4", colSpan: [4, 4, 4, 2, 2], bg: useColorModeValue("rgba(255,255,255,0.4)", "rgba(0,0,0,0.2)"), className: useColorModeValue('grid-element grid-element-light', 'grid-element grid-element-dark') }
	const oneXone = { rowSpan: [1, 1, 1, 1, 1], p: "4", colSpan: [4, 4, 4, 1, 1], bg: useColorModeValue("rgba(255,255,255,0.4)", "rgba(0,0,0,0.2)"), className: useColorModeValue('grid-element grid-element-light', 'grid-element grid-element-dark') }
	const twoXone = { rowSpan: [2, 2, 2, 2, 2], p: "4", colSpan: [4, 4, 4, 1, 1], bg: useColorModeValue("rgba(255,255,255,0.4)", "rgba(0,0,0,0.2)"), className: useColorModeValue('grid-element grid-element-light', 'grid-element grid-element-dark') }

	return (
		// <div>
		// 	<Nav />
		// 	<Box maxH="50vh">
		// 		<Main />
		// 	</Box>
		// 	<Box mt={['52vh', '42vh', '32vh', '22vh']}>
		// 		<Center>
		// 			<Heading pt="2rem" id="projects" as="h2" size="2xl">
		// 				My Projects
		// 			</Heading>
		// 		</Center>

		// 		<SimpleGrid
		// 			id="cards"
		// 			backgroundImage="/blobs.svg"
		// 			backgroundRepeat="no-repeat"
		// 			backgroundSize="cover"
		// 			minChildWidth="400px"
		// 			mt="4rem"
		// 		>
		// 			{PROJECT_DATA.map((i, idx) => (
		// 				<Cardboard
		// 					tags={i.tags}
		// 					key={idx}
		// 					description={i.description}
		// 					title={i.title}
		// 					visit={i.visit}
		// 					code={i.code}
		// 					demo={i.demo}
		// 					image={i.image}
		// 				/>
		// 			))}
		// 		</SimpleGrid>
		// 	</Box>
		// 	<Footer />
		// </div>
		<Box bg="black"
			bgImage={useColorModeValue("/public/circle-scatter-light.svg", "/public/circle-scatter.svg")}
			backgroundSize="cover"
			h="100vh"
			backgroundRepeat={0}
		>
			<Grid
				overflowY="scroll"
				height="100%"
				// width="100vw"
				// overflowX="hidden"
				p={8}
				templateRows='repeat(2, 1fr)'
				templateColumns='repeat(4, 1fr)'
				gap={8}
			>
				<GridItem {...twoXone}>
					<Button rounded="full" px="0" mr="2" onClick={toggleColorMode}>
						{colorMode === 'light' ? <MoonIcon w={6} h={6} /> : <SunIcon w={6} h={6} />}
					</Button>
				</GridItem>
				<GridItem {...oneXtwo} >
					{/* <Box h="100%" w="100%" bg={useColorModeValue("rgba(255,255,255,0.7)", "rgba(0,0,0,0.5)")} rounded="16px"></Box> */}
				</GridItem>
				<GridItem {...oneXone}>
					<Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
						<a href={"https://github.com/exactlyprateek/exactlyprateek/blob/master/PrateekRohillaResume.pdf"} target="_blank">
							{' '}
							<Button
								rounded='full'
								size='lg'
								fontWeight='normal'
								px={6}
								colorScheme='main'
								bg="main.500"
								_hover={{ bg: 'main.700' }}
							>
								<Heading size="md">Resume</Heading>
							</Button>
						</a>
						<Link smooth={true} to={'projects'}>
							<Button
								rounded='full'
								size='lg'
								fontWeight='normal'
								px={6}
								leftIcon={<ExternalLinkIcon h={4} w={4} color='gray.300' />}
							>
								<Heading size="md">Projects</Heading>
							</Button>{' '}
						</Link>
					</Stack>
				</GridItem>
				<GridItem {...oneXone} >
				</GridItem>
				<GridItem {...oneXtwo} >
				</GridItem>

				{/* <GridItem className="grid-element grid-element-1x2">hello</GridItem>
			<GridItem  className='grid-element' rowSpan={2} colSpan={1} />
			<GridItem className='grid-element' rowSpan={2} colSpan={1} />
			<GridItem className='grid-element' rowSpan={1} colSpan={3} />
			<GridItem className='grid-element' rowSpan={1} colSpan={2} /> */}

			</Grid>
		</Box>
	)
}

export default Home
