import { Center, SimpleGrid, Heading, Box } from '@chakra-ui/react';
import React from 'react';
import Cardboard from './Cardboard';
import Main from './Main';
import Nav from './Nav';
// import { Link, animateScroll as scroll } from 'react-scroll';
import Footer from './Footer';
function Home() {
	return (
		<div>
			<Nav />
			<Box maxH="50vh">
				<Main />
			</Box>
			<Box mt={[ '52vh', '42vh', '32vh', '22vh' ]}>
				<Center>
					<Heading pt="2rem" id="projects" as="h2" size="2xl">
						My Projects
					</Heading>
				</Center>

				<SimpleGrid id="cards" backgroundImage="/wave.svg" backgroundRepeat="no-repeat" backgroundPosition={["0 83rem","0 82rem","0 78rem","0 9rem" ]} minChildWidth="400px" mt="4rem">
					{[
						{
							title: 'Zira Tickets',
							visit: 'https://exactlyprateek.github.io/zira/',
							code: 'https://github.com/exactlyprateek/exactlyprateek.github.io',
							image: '/zira.png',
							dark: '/zira.png'
						},
						{
							title: 'SkinX',
							visit: 'http://3.128.170.254/',
							code: null,
							image: '/skinx.png',
							dark: '/skinx.png'
						},
						{
							title: 'Zira Tickets',
							visit: 'https://commonrooom.vercel.app/',
							code: 'https://github.com/exactlyprateek/common-room-final',
							image: '/commonroom.png',
							dark: '/common2.png'
						}
					].map((i, idx) => <Cardboard key={idx} dark={i.dark} title={i.title} visit={i.visit} code={i.code} image={i.image} />)}
				</SimpleGrid>
			</Box>
			<Footer />
		</div>
	);
}

export default Home;
