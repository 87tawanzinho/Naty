import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import house from '@/public/house.gif';
import Image from 'next/image';
const SecondNav = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: '20px' }}
        >
            <Stack className="card">
                <Image src={house} alt="house" width={120} height={120} />

                <Typography
                    sx={{ color: '#6243E9', fontWeight: 'bold' }}
                    variant="h5"
                >
                    Time Vendas
                </Typography>

                <Typography sx={{ color: '#2D2874' }}>
                    Um time comercial único, coeso, separado por núcleos,
                    trabalhando com um método consistente de atendimento.
                </Typography>
            </Stack>
        </Box>
    );
};

export default SecondNav;
