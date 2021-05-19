import { Center, SimpleGrid, Heading, Box } from '@chakra-ui/react';
import React from 'react';
import Cardboard from './Cardboard';
import Main from './Main';
import Nav from './Nav';
// import { Link, animateScroll as scroll } from 'react-scroll';
import Footer from './Footer';
function Home() {
	const img =
		'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

	return (
		<div>
			<Nav />
			<Box maxH="50vh">
				<Main />
			</Box>
			<Box mt={[ '52vh', '42vh', '32vh', '22vh' ]}>
				<Center>
					<Heading as="h2" size="2xl">
						My Projects
					</Heading>
				</Center>

				<SimpleGrid id="projects" minChildWidth="400px" mt="4rem">
					{[ img, img, img ].map((i, idx) => <Cardboard link={i} />)}
				</SimpleGrid>
			</Box>
			<Footer />
		</div>
	);
}

export default Home;
