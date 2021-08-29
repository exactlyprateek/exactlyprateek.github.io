import React from 'react';
import {
	Box,
	Flex,
	HStack,
	Link,
	IconButton,
	Button,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
const Links = [
	{ title: 'Linkedin', url: 'https://www.linkedin.com/in/prateek-rohilla/' },
	{ title: 'Github', url: 'https://github.com/exactlyprateek' },
	{ title: 'Email', url: 'mailto:prateekrohilla4.pr@gmail.com' }
];
function NavLink(props) {
	return (
		<Link
			
			href={props.link}
			target="_blank"
		>
			<Button px={4}
			py={2}
			rounded={'full'}
			
			colorScheme={'main'}
			bg="main.500"
			_hover={{bg: "main.700"}}
			>
					{props.title}
			</Button>
		
		</Link>
	);
}

function Nav() {
	const { colorMode, toggleColorMode } = useColorMode();

	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
	
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<title>Prateek Rohilla - Frontend Web Dev</title>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<IconButton
						size={'md'}
						rounded="full"
						px={4}
						py={2}
						icon={isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={6} h={6} />}
						aria-label={'Open Menu'}
						display={{ md: 'none' }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack spacing={8} alignItems={'center'}>
						{/* <Box>Logo</Box> */}
						<HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
							{Links.map((link, idx) => <NavLink key={idx} title={link.title} link={link.url} />)}
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
						<Button rounded="full" px="0" mr="2" onClick={toggleColorMode}>
							{colorMode === 'light' ? <MoonIcon w={6} h={6} /> : <SunIcon w={6} h={6} />}
						</Button>
						{/* <Button variant={'solid'} colorScheme={'teal'} size={'sm'} mr={4} leftIcon={<AddIcon />}>
							Action
						</Button>
						<Menu>
							<MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'}>
								<Avatar
									size={'sm'}
									src={
										'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
									}
								/>
							</MenuButton>
							<MenuList>
								<MenuItem>Link 1</MenuItem>
								<MenuItem>Link 2</MenuItem>
								<MenuDivider />
								<MenuItem>Link 3</MenuItem>
							</MenuList>
						</Menu> */}
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: 'none' }}>
						<Stack as={'nav'} spacing={4}>
							{Links.map((link, idx) => <NavLink key={idx} title={link.title} link={link.url} />)}
						</Stack>
					</Box>
				) : null}
			</Box>
		
	);
}

export default Nav;
