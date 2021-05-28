import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Center, useColorModeValue, Heading, Text, Stack, Image, Button, Link, Tooltip } from '@chakra-ui/react';

function Cardboard(props) {
	return (
		<Center id="centercard" py={12}>
			<Box
				rounded={'lg'}
				mt={-12}
				id="box"
				transition="all 0.3s ease"
				_after={{
					transition: 'all .3s ease',
					content: '""',

					pos: 'absolute',
					top: 5,
					left: 0,
					backgroundImage: useColorModeValue(`url(${props.image})`, `url(${props.dark})`),
					filter: 'blur(15px)',
					zIndex: -1
				}}
				_groupHover={{
					_after: {
						filter: 'blur(20px)'
					}
				}}
			>
				<Box
					role={'group'}
					p={6}
					maxW={'330px'}
					w={'full'}
					border={useColorModeValue('1px solid rgba(0,0,0, 0.2)', '1px solid rgba(255,255,255,0.4)')}
					bg={useColorModeValue('rgba(181, 181, 181, 0.2)', 'rgba(94, 94, 94,0.2)')}
					boxShadow={'2xl'}
					transition="all 0.3s ease"
					backdropFilter="blur(8px)"
					_hover={{ boxShadow: 'var(--chakra-shadows-md)' }}
					rounded={'lg'}
					pos={'relative'}
					zIndex={1}
				>
					<Box
					border={useColorModeValue('1px solid rgba(0,0,0, 0.2)', '1px solid rgba(255,255,255,0.4)')}
					overflow={'hidden'}
						id="blur"
						rounded={'lg'}
						mt={-12}
						pos={'relative'}
						height={'230px'}
						transition="all 0.3s ease"
						_hover={{ transform: 'scale(1.02)' }}
						_after={{
							transition: 'all .3s ease',
							content: '""',
							w: 'full',
							h: 'full',
							pos: 'absolute',
							top: 5,
							left: 0,
							backgroundImage: useColorModeValue(`url(${props.image})`, `url(${props.dark})`),
							filter: 'blur(15px)',
							zIndex: -1
						}}
						_groupHover={{
							_after: {
								filter: 'blur(20px)'
							}
						}}
					>
						<Link target="_blank" href={props.visit}>
							<Image
								rounded={'lg'}
								height={230}
								width={282}
								objectFit={'cover'}
								src={useColorModeValue(props.image, props.dark)}
							/>
						</Link>
					</Box>
					<Stack pt={10} align={'center'}>
						<Center>
							<Text fontSize={'sm'} textTransform={'capitalise'}>
								{props.desciption}
							</Text>
						</Center>

						<Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
							{props.title}
						</Heading>
						<Stack direction={'row'} align={'center'}>
							<Link target="_blank" href={props.visit}>
								<Button
									rightIcon={<ExternalLinkIcon />}
									fontWeight={800}
									fontSize={'xl'}
									colorScheme={'purple'}
								>
									Visit
								</Button>
							</Link>
							<Link target="_blank" href={props.code}>
								<Tooltip
									label={props.code ? 'Click to check code' : 'Code is private!'}
									aria-label="A tooltip"
								>
									<Button
										disabled={!props.code}
										rightIcon={<ExternalLinkIcon />}
										textDecoration={'underline'}
										colorScheme={'red'}
									>
										Code
									</Button>
								</Tooltip>
							</Link>
						</Stack>
					</Stack>
				</Box>
			</Box>
		</Center>
	);
}

export default Cardboard;
