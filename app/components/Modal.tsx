import {
    Button,
    Select,
    TextField,
    Typography,
    MenuItem,
    InputLabel,
    TextareaAutosize,
    FormControl,
    SelectChangeEvent
} from '@mui/material';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface ModalProps {
    clicked: boolean;
    setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Form {
    nome: string;
    whatsapp: number;
    email: string;
    empresa: string;
    mensagem: string;
    funcionarios: string;
}

export default function Modal({ clicked, setClicked }: ModalProps) {
    const router = useRouter();
    const [value, setValue] = useState<Form>({
        nome: '',
        whatsapp: 0,
        email: '',
        empresa: '',
        mensagem: '',
        funcionarios: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | any) => {
        const { name, value } = event.target as HTMLInputElement;
        setValue((prev) => ({
            ...prev,
            [name]: value
        }));
        console.log(name, value);
    };
    const handleClicked = () => {
        setClicked(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Form Data:', value);
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
                        height: { xs: 'auto', md: '65vh' },
                        paddingX: { xs: '20px', md: '50px' },
                        paddingY: { xs: '30px', md: '50px' },

                        width: { xs: '80vw', md: '500px' },
                        borderRadius: '20px',
                        border: '2px solid #A9A9A9',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
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
                    <form onSubmit={handleSubmit}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: '24px',
                                gap: '8px'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    gap: '1rem'
                                }}
                            >
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    placeholder="Nome:"
                                    className="inputRounded"
                                    onChange={handleChange}
                                    required
                                    name="nome"
                                    sx={{ borderRadius: '40px' }}
                                />

                                <TextField
                                    variant="outlined"
                                    size="small"
                                    type="number"
                                    required
                                    onChange={handleChange}
                                    name="number"
                                    className="inputRounded"
                                    placeholder="Whatsapp:"
                                />
                            </Box>

                            <Box>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    required
                                    onChange={handleChange}
                                    name="email"
                                    className="inputRounded"
                                    placeholder="Email:"
                                />
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    gap: '1rem'
                                }}
                            >
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    name="empresa"
                                    placeholder="Empresa:"
                                    required
                                    className="inputRounded"
                                    sx={{ borderRadius: '40px' }}
                                />

                                <Select
                                    sx={{ width: '50%' }}
                                    size="small"
                                    className="inputRounded"
                                    value={value.funcionarios}
                                    displayEmpty
                                    name="funcionarios"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        N° de Funcionários
                                    </MenuItem>
                                    <MenuItem value={'0-1'}>0-1</MenuItem>
                                    <MenuItem value={'1-5'}>1-5</MenuItem>
                                    <MenuItem value={'5-10'}>5-10</MenuItem>
                                    <MenuItem value={'10-20'}>10-20</MenuItem>
                                    <MenuItem value={'20-50'}>20-50</MenuItem>
                                    <MenuItem value={'+50'}>+ 50</MenuItem>
                                </Select>
                            </Box>

                            <Box>
                                <TextField
                                    rows={2}
                                    placeholder="Mensagem:"
                                    fullWidth
                                    onChange={handleChange}
                                    name="mensagem"
                                    multiline
                                    required
                                />
                            </Box>
                            <Button
                                type="submit"
                                sx={{
                                    width: '150px',
                                    alignItems: 'center',
                                    whiteSpace: 'nowrap',
                                    background: '#18BD95',
                                    color: 'white',
                                    marginTop: '10px',
                                    borderRadius: '20px',
                                    border: '2px solid black',
                                    ':hover': {
                                        backgroundColor: '#111f3d'
                                    }
                                }}
                            >
                                Solicitar Contato
                            </Button>
                        </Box>
                    </form>
                </Box>
            ) : null}
        </Box>
    );
}
