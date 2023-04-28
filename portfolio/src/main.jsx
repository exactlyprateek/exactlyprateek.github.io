import {ChakraProvider} from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import {ColorModeScript} from '@chakra-ui/react'
// 1. import `ChakraProvider` component
// import { ChakraProvider } from '@chakra-ui/react'
import {extendTheme} from '@chakra-ui/react'
import React from 'react'
import App from './App'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
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
}
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}
const theme = extendTheme({colors, config})

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>
        </ChakraProvider>
    </React.StrictMode>,
)