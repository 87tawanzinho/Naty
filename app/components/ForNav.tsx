import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export default function ForNav() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column-reverse',
                    md: 'row-reverse',
                    lg: 'row-reverse'
                },
                padding: { xs: '40px' },
                justifyContent: 'center',
                alignContent: 'center',
                gap: '4rem',
                marginTop: '80px'
            }}
        >
            <Box
                sx={{
                    width: {
                        xs: '100%',

                        lg: '420px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }
                }}
            >
                <Typography
                    sx={{
                        color: '#2D2874',
                        fontWeight: 'bold',
                        fontSize: { xs: '26px', md: '30px', lg: '32px' }
                    }}
                >
                    Não perca Vendas por demora no{' '}
                    <span style={{ color: '#18BD95' }}>Atendimento</span> do seu
                    Negócio
                </Typography>
                <Typography
                    sx={{ color: '#6243E9', fontWeight: '500' }}
                    variant="h5"
                >
                    Para Equipes de Marketing
                </Typography>
                <Typography sx={{ color: '#2D2874' }}>
                    Torne sua passagem de bastão entre o lead e o time comercial
                    mais suave e agradável, gerando estatísticas precisas para o
                    acompanhamento da conversão.
                </Typography>

                <Typography
                    sx={{ color: '#6243E9', fontWeight: '500' }}
                    variant="h5"
                >
                    Para Equipes de TI{' '}
                </Typography>
                <Typography sx={{ color: '#2D2874' }}>
                    Automatize relacionamentos e contatos com clientes próximos
                    através de nossas APIs fáceis de implementar, para gerar
                    resultados expressivos.
                </Typography>

                <Button
                    sx={{
                        background: '#18BD95',
                        color: 'white',
                        whiteSpace: 'nowrap',
                        width: '200px',
                        borderRadius: ' 50px'
                    }}
                >
                    Experimente Grátis
                </Button>
            </Box>

            <Box>
                <img
                    className="animating"
                    src="https://secretarianaty.com/wp-content/uploads/2023/07/107-shape-7.png.webp"
                    alt=""
                    width={500}
                />
            </Box>
        </Box>
    );
}
