import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';

import React, { lazy, Suspense } from 'react';
import SecondNav from './components/SecondNav';
import ThirdNav from './components/ThirdNav';
const Header = dynamic(() => import('./components/Header'));

export default function Home() {
    return (
        <Box>
            <Box sx={{ position: 'relative' }}>
                <Header />
            </Box>
            <Box
                sx={{
                    position: { xs: 'default', md: 'absolute' },
                    bottom: 0,
                    left: 0,
                    right: 0,
                    marginBottom: '20px'
                }}
            >
                <SecondNav />
            </Box>
            <ThirdNav />
        </Box>
    );
}
