'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

interface ExtendedBackground {
    secondary: string;
}

declare module '@mui/material/styles' {
    interface TypeBackground extends ExtendedBackground {}
}

const roboto = Roboto({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin']
});

const themeOptions: ThemeOptions = {
    typography: {
        fontSize: 14,
        fontWeightRegular: roboto.style.fontWeight,
        fontFamily: roboto.style.fontFamily
    },
    palette: {
        background: {
            default: '#fff',
            secondary: '#111f3d'
        },
        primary: {
            main: '#1976d2'
        },
        secondary: {
            main: '#fff'
        },

        text: {
            primary: '#000'
        }
    }
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
