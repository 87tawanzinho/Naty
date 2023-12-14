import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';

import React from 'react';
import SecondNav from './components/SecondNav';

import ThirdNav from './components/ThirdNav';
import ForNav from './components/ForNav';

import WhatsappTsx from './components/Whatsapp';
const Header = dynamic(() => import('./components/Header'));

export default function Home() {
    return (
        <Box>
            <WhatsappTsx />
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
            <ForNav />
        </Box>
    );
}
