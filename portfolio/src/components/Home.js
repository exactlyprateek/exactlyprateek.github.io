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

				<SimpleGrid id="cards" backgroundImage="/blobs.svg" backgroundRepeat="no-repeat" backgroundSize="cover" minChildWidth="400px" mt="4rem">
					{[
						{
							title: 'Zira Tickets',
							desciption: "Zira Tickets - To do tasks manager",
							visit: '/zira',
							code: 'https://github.com/exactlyprateek/exactlyprateek.github.io',
							image: '/zira.png',
							tags: "html css vanilla-js github-pages"
						},
						{
							title: 'Spotify Clone',
							desciption: "Small scale music player",
							visit: 'https://spotify-clone-rho.vercel.app/',
							code: "https://github.com/exactlyprateek/spotify-clone/",
							image: '/spotify-clone.png',
							tags: "reactjs typescript html css"
						},
						{
							title: 'Best Resources',
							desciption: "Best Resources for Devs/Designers/Stuents",
							visit: 'https://bestresources.vercel.app/',
							code: null,
							image: '/bestresources1.png',
							tags: "reactjs django html css"
						},
						{
							title: 'SkinX',
							desciption: "SkinX - Skin Disease Detection app",
							visit: 'http://3.128.170.254/',
							code: null,
							image: '/skinx.png',
							tags: "reactjs chakra-ui"
						},
						{
							title: 'Excel Clone',
							desciption: "Clone of Microsoft Excel",
							visit: 'excel/',
							code: null,
							image: '/excel.png',
							tags: "html css vanilla-js"
						},
						{
							title: 'Common Room',
							desciption: "Common Room for all things MSIT",
							visit: 'https://commonrooom.vercel.app/',
							code: 'https://github.com/exactlyprateek/common-room-final',
							image: '/commonroom.png',
							tags: "reactjs nextjs"
						}
					].map((i, idx) => <Cardboard tags={i.tags} key={idx} desciption={i.desciption} title={i.title} visit={i.visit} code={i.code} image={i.image} />)}
				</SimpleGrid>
			</Box>
			<Footer />
		</div>
	);
}

export default Home;
