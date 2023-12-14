import { Fab, Link } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import whatsappIcon from '@/public/whatsapp.png';
export default function WhatsappTsx() {
    return (
        <Box>
            <Link
                href="https://api.whatsapp.com/send/?phone=554521037110&text&type=phone_number&app_absent=0"
                target="blank"
            >
                <Box>
                    <Fab
                        size="large"
                        sx={{
                            position: 'fixed',
                            display: { sm: 'none' },
                            left: { xs: 20 },
                            zIndex: 100,
                            top: { xs: 10 },
                            background: '#18BD95'
                        }}
                    >
                        <Image src={whatsappIcon} alt="WhatsApp Icon" />
                    </Fab>
                </Box>
            </Link>
            <Link
                href="https://api.whatsapp.com/send/?phone=554521037110&text&type=phone_number&app_absent=0"
                target="blank"
            >
                <Box
                    sx={{
                        position: 'fixed',
                        display: { xs: 'none', sm: 'initial' },
                        zIndex: 100,
                        bottom: { sm: 40 },
                        right: { sm: 40 }
                    }}
                >
                    <Fab size="large" sx={{ background: '#18BD95' }}>
                        <Image src={whatsappIcon} alt="WhatsApp Icon" />
                    </Fab>
                </Box>
            </Link>
        </Box>
    );
}
