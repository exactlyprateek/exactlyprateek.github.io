import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorModeScript } from '@chakra-ui/react';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac'
	},
	main: {
		900: '#180904',
		800: '#50071A',
		700: '#B24522',
		600: '#FF6431',
		500: '#FF6431',
		400: '#FF6431',
		300: '#FF7F30',
		200: '#FF9830',
		100: '#FAD9B4'
	}
};
const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false
};
const theme = extendTheme({ colors, config });

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
