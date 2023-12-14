import { Box, Button, Stack, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/AccountCircle';
export default function Header() {
    return (
        <Box
            sx={{
                background:
                    'linear-gradient(to right top, #8060f6, #7f53f4, #8044f2, #8131ef, #8312eb)',
                height: 'auto',
                width: '100vw',
                paddingTop: '20px',
                paddingLeft: { xs: 'none', md: '400px' },
                paddingRight: { xs: 'none', md: '400px' },

                paddingBottom: '80px'
            }}
        >
            <Box>
                <Box
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Box display="flex" alignItems="center">
                        <img
                            src="https://secretarianaty.com/wp-content/uploads/2023/07/logo-branca-novo.png.webp"
                            alt=""
                            style={{
                                width: '150px',
                                height: 'auto',
                                objectFit: 'cover'
                            }}
                        />

                        <PersonIcon
                            color="secondary"
                            sx={{
                                position: 'absolute',
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
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                        <Typography variant="body1" className="animatingMenu">
                            Início
                        </Typography>
                        <Typography variant="body1" className="animatingMenu">
                            Quem Somos
                        </Typography>
                        <Typography variant="body1" className="animatingMenu">
                            Funcionalidades
                        </Typography>
                        <Typography variant="body1" className="animatingMenu">
                            Planos e Preços
                        </Typography>
                        <Typography variant="body1" className="animatingMenu">
                            Contato
                        </Typography>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={2}
                        borderRadius="10px"
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                        <Button
                            variant="contained"
                            style={{
                                borderRadius: '12px',
                                backgroundColor: '#18BD95',
                                width: '140px',
                                whiteSpace: 'nowrap',

                                '&:hover': {
                                    backgroundColor: '#45a049' // Cor diferente no hover
                                }
                            }}
                        >
                            Teste Grátis
                        </Button>
                        <Button
                            variant="outlined"
                            style={{
                                borderRadius: '12px',
                                border: '2px solid white',
                                color: 'white',
                                width: '140px',
                                whiteSpace: 'nowrap'
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
                        marginLeft: { xs: 'none', md: '100px' },
                        marginRight: { xs: 'none', md: '100px' },
                        marginTop: '80px'
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
                            sx={{
                                background: '#18BD95',
                                width: '160px',
                                textTransform: 'initial',
                                whiteSpace: 'nowrap',
                                color: '#fff',
                                borderRadius: '30px'
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
