import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ThirdNav() {
    return (
        <Box
            sx={{
                marginTop: { md: '350px' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}
        >
            <Stack
                sx={{
                    padding: { xs: '20px' },
                    color: '#2D2874',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem'
                }}
            >
                <Typography sx={{ width: { xs: '80%', md: '700px' } }}>
                    Explore possibilidades de alavancar seus resultados por meio
                    de atendimentos padronizados e ordenados, reduzindo o tempo
                    de espera por atendimento e garantindo vendas constantes.
                </Typography>

                <Button
                    sx={{
                        background: '#18BD95',
                        color: 'white',
                        whiteSpace: 'nowrap',
                        width: '180px',
                        borderRadius: '20px',
                        ':hover': {
                            backgroundColor: '#111f3d'
                        }
                    }}
                >
                    Experimente Grátis
                </Button>
            </Stack>
        </Box>
    );
}
