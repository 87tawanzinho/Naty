import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
interface ModalProps {
    clicked: boolean;
    setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ clicked, setClicked }: ModalProps) {
    const handleClicked = () => {
        setClicked(false);
    };
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                backgroundColor: 'rgba(128, 60, 160, 0.3)',
                right: 0,
                zIndex: 50
            }}
        >
            {clicked ? (
                <Box
                    sx={{
                        background: 'white',
                        height: { xs: '70vh', md: '60vh' },
                        padding: { xs: '20px', md: '48px' },

                        width: { xs: '80vw', md: '500px' },
                        borderRadius: '20px',
                        border: '2px solid #A9A9A9'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'end',
                            fontSize: '18px',
                            color: '#6243E9',
                            fontWeight: 'bold'
                        }}
                    >
                        <Button
                            onClick={handleClicked}
                            sx={{ cursor: 'pointer' }}
                        >
                            x
                        </Button>
                    </Box>
                    <Typography
                        sx={{
                            color: '#2D2874',
                            lineHeight: 0,
                            marginBottom: '4px',
                            marginTop: '20px',
                            fontSize: { xs: '24px', lg: '32px' }
                        }}
                    >
                        Entre em contato e{' '}
                    </Typography>
                    <Typography
                        sx={{
                            color: '#18BD95',
                            fontSize: { xs: '24px', lg: '32px' }
                        }}
                    >
                        {' '}
                        Solicite seu Orçamento!
                    </Typography>

                    <Typography
                        sx={{
                            color: '#2D2874',
                            marginTop: '20px',
                            fontSize: { xs: '14px', md: '16px' }
                        }}
                    >
                        Explore possibilidades de alavancar seus resultados por
                        meio de atendimentos padronizados e ordenados, reduzindo
                        o tempo de espera por atendimento e garantindo vendas
                        constantes.
                    </Typography>
                </Box>
            ) : null}
        </Box>
    );
}
