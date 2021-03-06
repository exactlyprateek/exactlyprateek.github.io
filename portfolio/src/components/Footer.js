import { Box, chakra, Container, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialButton = (props) => {
	return (
		<Link href={props.link}  target="_blank" >
			<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
			}}
		>
			{props.icon}
		</chakra.button>
		</Link>
		
	);
};

export default function Footer() {
	return (
		<Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
			<Container
				as={Stack}
				maxW={'6xl'}
				py={4}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}
			>
				<Text>
					No copyright, you can copy it from{' '}
					<Link color="blue.400" href="https://github.com/exactlyprateek/exactlyprateek.github.io.git/">
						my github
					</Link>
				</Text>
				<Stack direction={'row'} spacing={6}>
					<SocialButton label={'Twitter'} link='https://twitter.com/exactlyprateek'  target="_blank" icon={<FaTwitter w={6} h={6} />} />
					<SocialButton label={'YouTube'} link='https://youtube.com/'  target="_blank" icon={<FaYoutube w={6} h={6} />} />
					<SocialButton label={'Instagram'} link='https://instagram.com/prateekprateekprateek'  icon={<FaInstagram w={6} h={6} />} />
				</Stack>
			</Container>
		</Box>
	);
}
