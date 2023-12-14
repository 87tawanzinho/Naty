'use client';
import { Box, Button, Stack, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react';

export default function Header() {
    const [navbar, setNavBar] = useState(false);

    const changeBackground = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY >= 80) {
                setNavBar(true);
            } else {
                setNavBar(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <Box
            sx={{
                background:
                    'linear-gradient(to right top, #8060f6, #7f53f4, #8044f2, #8131ef, #8312eb)',
                height: 'auto',
                width: '100%',

                paddingTop: '20px',
                paddingLeft: { xs: 'none', sm: '1x', xl: '400px' },
                paddingRight: {
                    xs: 'none',
                    sm: '1px',

                    xl: '400px'
                },

                paddingBottom: '80px'
            }}
        >
            <Box>
                <Box
                    display="flex"
                    position={'fixed'}
                    gap={'2rem'}
                    top={'0'}
                    paddingTop={2}
                    paddingBottom={'1rem'}
                    justifyContent="space-around"
                    alignContent={'center'}
                    alignItems="center"
                    className={`photoIcon ${
                        navbar ? 'navbar active' : 'navbar'
                    }`}
                >
                    <Box display="flex" alignItems="center">
                        <Box>
                            <img
                                src="https://secretarianaty.com/wp-content/uploads/2023/07/logo-branca-novo.png.webp"
                                alt=""
                                className={navbar ? 'filtering' : 'null'}
                                style={{
                                    width: '150px',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    filter: navbar ? 'invert(100%)' : 'none'
                                }}
                            />
                        </Box>

                        <PersonIcon
                            color="secondary"
                            sx={{
                                position: 'fixed',
                                right: 20,
                                display: { md: 'none', xs: 'default' }
                            }}
                            fontSize="large"
                        ></PersonIcon>
                    </Box>
                    <Stack
                        direction="row"
                        spacing={4}
                        color="#fff"
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'flex',
                                whiteSpace: 'nowrap'
                            }
                        }}
                    >
                        <Typography
                            variant="body1"
                            className={`animatingMenu ${
                                navbar ? 'color-font' : ''
                            }`}
                        >
                            Início
                        </Typography>
                        <Typography
                            variant="body1"
                            className={`animatingMenu ${
                                navbar ? 'color-font' : ''
                            }`}
                        >
                            Quem Somos
                        </Typography>
                        <Typography
                            variant="body1"
                            className={`animatingMenu ${
                                navbar ? 'color-font' : ''
                            }`}
                        >
                            Funcionalidades
                        </Typography>
                        <Typography
                            variant="body1"
                            className={`animatingMenu ${
                                navbar ? 'color-font' : ''
                            }`}
                        >
                            Planos e Preços
                        </Typography>
                        <Typography
                            variant="body1"
                            className={`animatingMenu ${
                                navbar ? 'color-font' : ''
                            }`}
                        >
                            Contato
                        </Typography>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={2}
                        borderRadius="10px"
                        sx={{
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        <Button
                            sx={{
                                borderRadius: '15px',
                                color: 'white',
                                backgroundColor: '#18BD95',
                                width: '150px',
                                height: '40px',
                                fontStyle: 'initial',
                                whiteSpace: 'nowrap',
                                ':hover': {
                                    backgroundColor: '#111f3d'
                                }
                            }}
                        >
                            Teste Grátis
                        </Button>
                        <Button
                            color="secondary"
                            sx={{
                                borderRadius: '15px',
                                border: '2px solid white',
                                color: 'white',
                                width: '150px',
                                height: '40px',
                                fontStyle: 'initial',
                                whiteSpace: 'nowrap',
                                backgroundColor: '#111f3d',
                                ':hover': {
                                    backgroundColor: '#111f3d'
                                }
                            }}
                        >
                            Login
                        </Button>
                    </Stack>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: {
                            xs: '4rem',
                            md: 'none'
                        },
                        marginLeft: { xs: 'none', lg: '100px' },
                        marginRight: { xs: 'none', lg: '100px' },
                        marginTop: '80px',
                        padding: '20px'
                    }}
                    justifyContent={'space-between'}
                    padding="20px"
                >
                    <Stack spacing={2}>
                        <Typography color="white">SECRETÁRIA NATY</Typography>
                        <Typography color="white" variant="h3" width="350px">
                            A Sua Central de Atendimento ao Cliente!
                        </Typography>
                        <Typography sx={{ color: '#fffbcb' }}>
                            Que tal nos conhecermos melhor antes de dar o grande
                            passo?
                        </Typography>
                        <Button
                            className="buttonHoverBlue"
                            sx={{
                                background: '#18BD95',
                                width: '160px',
                                textTransform: 'initial',
                                whiteSpace: 'nowrap',
                                color: '#fff',
                                borderRadius: '30px',
                                ':hover': {
                                    backgroundColor: '#111f3d'
                                }
                            }}
                        >
                            Experimente Grátis {'>'}
                        </Button>
                    </Stack>
                    <img
                        src="https://secretarianaty.com/wp-content/uploads/2023/07/83-desk.png.webp"
                        alt=""
                        width="350px"
                        height="auto"
                        style={{ objectFit: 'contain' }}
                        className="animating photo"
                    />
                </Box>
            </Box>
        </Box>
    );
}
