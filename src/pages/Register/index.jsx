import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom'
import api from '../../api';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FaDiscord } from 'react-icons/fa'
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';

import Logo from '../../component/Logo';
import Setima from '../../assets/patron/setima.png'
import Twitch from '../../assets/patron/twitch.png'
import Modern from '../../assets/patron/modern.jpg'

import './index.css'

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

const DiscordButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#242326',
    '&:hover': {
      backgroundColor: '#161516',
    },
}));

const Register = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = React.useState(true);

    const [auth, setAuth] = React.useState(false);
    const [user, setUser] = React.useState([]);
    const [register, setRegister] = React.useState(false);
    const [registered, setRegistered] = React.useState(false);
    const [complete, setComplete] = React.useState(false);

    const [nickname, setNickname] = React.useState('');
    const [nicknameError, setNicknameError] = React.useState(false);
    const [nicknameErrorMsg, setNicknameErrorMsg] = React.useState('');

    const [primary, setPrimary] = React.useState('');
    const [primaryError, setPrimaryError] = React.useState(false);

    const [secondary, setSecondary] = React.useState('')
    const [secondaryError, setSecondaryError] = React.useState(false);

    const [days, setDays] = React.useState([]);
    const [daysError, setDaysError] = React.useState(false);
    
    const [hour, setHour] = React.useState('');
    const [hourError, setHourError] = React.useState(false);

    const [registerError, setRegisterError] = React.useState([]);
    const [registerErrorModal, setRegisterErrorModal] = React.useState(false);
    
    const weapons = [
        'Espada e Escudo',
        'Rapieira',
        'Machadinha',
        'Lança',
        'Machadão',
        'Martelo de Guerra',
        'Espada Grande',
        'Arco',
        'Mosquete',
        'Bacamarte',
        'Bastão Flamejante',
        'Bastão Vital',
        'Manopla de Gelo',
        'Manopla Imaterial'
    ];

    const week = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ];

    const hours = [
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:30',
        '20:00',
        '20:30'
    ];

    useEffect(() => {
        (async() => {
            if(searchParams.get('code')) {
                const response = await api.AuthDiscord(searchParams.get('code'));
                if(response.data.auth){
                    setUser(response.data);
                    setRegister(response.data.register);
                    setRegistered(response.data.registered);
                    setAuth(true);
                };
            } else {
                setAuth(false);
            }
            setLoading(false);
        })();
    }, []);

    const handleGetAuthDiscord = async() => {
        const response = await api.getAuthDiscord(nickname);
        window.location.replace(response.data);
    };

    const handlePrimary = (event) => {
        setPrimaryError(false);
        setPrimary(event.target.value);
    };

    const handleSecondary = (event) => {
        setSecondaryError(false);
        setSecondary(event.target.value);
    };
    
    const handleHour = (event) => {
        setHourError(false);
        setHour(event.target.value);
    };

    const handleDays = (event) => {
        const { target: { value }, } = event;
        setDaysError(false);
        setDays(typeof value === 'string' ? value.split(',') : value,);
    };

    const handleSave = async() => {
        const data = {
            nickname:nickname,
            id:user.user.id,
            email:user.user.email,
            weapon_primary: primary,
            weapon_secondary: secondary,
            days: days,
            hour: hour,
            access_token: user.access_token
        };

        if(nickname == '') {
            setNicknameError(true)
            setNicknameErrorMsg('O campo é obrigatório')
        };

        if(nickname.length > 20) {
            setNicknameError(true)
            setNicknameErrorMsg('Limite máximo de 20 caracteres')
        };

        if(nickname.length < 5 && nickname != '') {
            setNicknameError(true)
            setNicknameErrorMsg('Limite minímo de 5 caracteres')
        };
    
        if(primary == '') {
            setPrimaryError(true)
        };

        if(secondary == '') {
            setSecondaryError(true)
        };

        if(days == '') {
            setDaysError(true)
        };

        if(hour == '') {
            setHourError(true)
        };

        if(primary != '' && secondary != '' && days != '' && hour != '' && nickname != '' && nickname.length > 5 && nickname.length < 20) {
           const response = await api.setUser(data);
            if(response.status == 400) {
                setRegisterError(response.data.errors);
                setRegisterErrorModal(true);
            };

            if(response.status == 200) {
                if(response.data.register) {
                    setComplete(true);
                };
            };
        };
    };

    const handleCloseModalRegisterErro = () => {
        setRegisterErrorModal(false);
    };

    const handleNickname = (event) => {
        setNickname(event.target.value);
        setNicknameError(false);
        setNicknameErrorMsg('');
    };

    const handleTwitch = () => {
        window.open('https://www.twitch.tv/sinehtv')
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <CssBaseline />
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 6,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Logo width={200} height={250}/>
                        {loading
                            ?
                                <Box sx={{mt:12}}><CircularProgress color="secondary" /></Box>
                            :
                                <>
                                    <Box sx={{display: auth ? 'none' : 'flex', mt: 3, width:'100%', justifyContent:'center'}}>
                                        <Box sx={{display:'flex', justifyContent:'center'}}>
                                            <DiscordButton variant="contained" onClick={handleGetAuthDiscord} startIcon={<FaDiscord style={{color:'white'}}/>}>
                                                <div className={"text-discord"}>CONECTAR COM O DISCORD</div>
                                            </DiscordButton>
                                        </Box>
                                    </Box>
                                    {auth &&
                                        //Verificar se inscrições estão abertas
                                        !register
                                            ?
                                                <Box sx={{mt:12}}>
                                                    <Box sx={{fontStyle: 'italic'}}>
                                                        As inscrições foram encerradas
                                                    </Box>
                                                    <Box sx={{mt:5}}>
                                                        <Link to="/">
                                                            <Button fullWidth variant="outlined">VOLTAR</Button>
                                                        </Link>
                                                    </Box>
                                                </Box>
                                            :
                                        //Verificar se usuário já está cadastrado no campeonato
                                        registered
                                            ?
                                                <Box sx={{mt:12}}>
                                                    <Box sx={{fontStyle: 'italic'}}>
                                                        O usuário já está cadastrado para o evento.
                                                    </Box>
                                                    <Box sx={{mt:5}}>
                                                        <Link to="/">
                                                            <Button fullWidth variant="outlined">VOLTAR</Button>
                                                        </Link>
                                                    </Box>
                                                </Box>
                                            :
                                                <>
                                                    <Box sx={{display: auth && !complete ? 'grid' : 'none', mt: 2, width:'100%'}}>
                                                        <Box >
                                                            <Box sx={{display:'flex', flexDirection:'column', gap:'5px', alignItems:'center'}}>
                                                                <Avatar
                                                                    alt="Remy Sharp"
                                                                    src={`https://cdn.discordapp.com/avatars/${user.user?.id}/${user.user?.avatar}`}
                                                                    sx={{ width: 40, height: 40 }}
                                                                />
                                                                <Typography color="white">{user.user?.username}</Typography>
                                                                <FaDiscord className={"icon-discord"} />
                                                            </Box>
                                                            <Box sx={{display:'flex', flexDirection:'column', gap:'5px', alignItems:'center'}}>
                                                                <TextField
                                                                    fullWidth
                                                                    error={nicknameError}
                                                                    helperText={nicknameErrorMsg}
                                                                    value={nickname}
                                                                    id="nickname"
                                                                    label="Nome do personagem"
                                                                    variant="standard"
                                                                    onChange={handleNickname}
                                                                />
                                                            </Box>

                                                            <Box sx={{ mt:2, display:'flex', justifyContent:'space-between'}}>
                                                                <FormControl variant="standard" sx={{width:'48%'}} size="small">
                                                                    <InputLabel id="select-primary-label">Arma primária</InputLabel>
                                                                    <Select
                                                                        error={primaryError}
                                                                        labelId="select-primary-label"
                                                                        id="select-primary"
                                                                        value={primary}
                                                                        label="Arma primária"
                                                                        onChange={handlePrimary}
                                                                    >
                                                                        {
                                                                            weapons.map((weapon, index) => (
                                                                                <MenuItem key={index} value={weapon}>{weapon}</MenuItem>
                                                                            ))
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                                <FormControl variant="standard" sx={{width:'48%'}} size="small">
                                                                    <InputLabel id="select-secundary-label">Arma secundária</InputLabel>
                                                                    <Select
                                                                        error={secondaryError}
                                                                        labelId="select-secundary-label"
                                                                        id="select-secundary"
                                                                        value={secondary}
                                                                        label="Arma secundária"
                                                                        onChange={handleSecondary}
                                                                    >
                                                                        {
                                                                            weapons.map((weapon, index) => (
                                                                            
                                                                                <MenuItem key={index} value={weapon}>{weapon}</MenuItem>
                                                                            ))
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </Box>

                                                            <Box sx={{ mt:2, display:'flex', justifyContent:'space-between'}}>
                                                                <FormControl variant="standard" sx={{ width: '70%', maxWidth:'277.19px' }} size="small">
                                                                    <InputLabel id="checkbox-week-label">Dias da semana</InputLabel>
                                                                    <Select
                                                                        error={daysError}
                                                                        labelId="checkbox-week-label"
                                                                        id="checkbox-week"
                                                                        multiple
                                                                        value={days}
                                                                        onChange={handleDays}
                                                                        renderValue={(selected) => selected.join(', ')}
                                                                    >
                                                                        {week.map((day) => (
                                                                            <MenuItem key={day} value={day}>
                                                                            <Checkbox checked={days.indexOf(day) > -1} />
                                                                            <ListItemText primary={day} />
                                                                            </MenuItem>
                                                                        ))}
                                                                    </Select>
                                                                </FormControl>
                                                                <FormControl variant="standard" sx={{width:'26%'}} size="small">
                                                                    <InputLabel id="select-hours-label">Horário</InputLabel>
                                                                    <Select
                                                                        error={hourError}
                                                                        labelId="select-hours-label"
                                                                        id="select-hours"
                                                                        value={hour}
                                                                        label="Horário"
                                                                        onChange={handleHour}
                                                                    >
                                                                        {
                                                                            hours.map((value, index) => (
                                                                                <MenuItem key={index} value={value}>{value}</MenuItem>
                                                                            ))
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </Box>

                                                            <Box sx={{ mt:3, display:'flex', justifyContent:'space-between'}}>
                                                                <Button fullWidth className={"alistar"} variant="contained" onClick={handleSave}>ALISTAR-SE</Button>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    {complete &&
                                                        <Box sx={{mt:12}}>
                                                            <Box sx={{fontStyle: 'italic'}}>
                                                                Cadastro efetuado com sucesso
                                                            </Box>
                                                            <Box sx={{mt:5}}>
                                                                <Link to="/">
                                                                    <Button fullWidth variant="outlined">VOLTAR</Button>
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    }
                                                </>
                                    }
                                </>
                            
                        }
                        <Dialog
                            open={registerErrorModal}
                            onClose={handleCloseModalRegisterErro}
                            scroll={'body'}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">
                                <Box sx={{textAlign:'center'}}>Falha em efetuar registro</Box>
                                <Box sx={{fontSize:'12px', textAlign:'center', fontWeight:'300'}}>Verifique os campos abaixo e tente novamente</Box>
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText
                                    id="scroll-dialog-description"
                                    tabIndex={-1}
                                    component="span"
                                    sx={{fontWeight: '100'}}
                                >
                                    {
                                        registerError.map((error, index) => (
                                            <Box key={index} sx={{mt:2}}>
                                                <Box>Valor: {error.value}</Box>
                                                <Box>Motivo: <span style={{fontStyle: 'italic'}}>{error.msg}</span></Box>
                                            </Box>
                                        ))
                                    }
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseModalRegisterErro}>Fechar</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                </Container>
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                    }}
                >
                    <Container maxWidth="sm" sx={{display:'flex', flexDirection:'column', gap:3}}>
                        <Box sx={{display:'flex', flexDirection:'row', gap:2, justifyContent: 'center'}}>
                            <span className={"text-discord"}>Patrocionadores</span>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'row', gap:3, justifyContent: 'center'}}>
                            <Box
                                sx={{
                                    display:'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap:1
                                }}
                            >
                                <Typography sx={{fontSize:'12px', color:'#c9c9c9'}}>
                                    Sétima Expedição
                                </Typography>
                                <img width={32} height={32} src={Setima}/>
                            </Box>
                            <Box
                                sx={{
                                    display:'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap:1,
                                    cursor:'pointer'
                                }}
                                onClick={handleTwitch}
                            >
                                <Typography sx={{fontSize:'12px', color:'#c9c9c9'}}>
                                    Twitch.tv/sinehtv
                                </Typography>
                                <img width={32} height={32} src={Twitch}/>
                            </Box>
                            <Box
                                sx={{
                                    display:'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap:1
                                }}
                            >
                                <Typography sx={{fontSize:'12px', color:'#c9c9c9'}}>
                                    Espaço Modern
                                </Typography>
                                <img width={32} height={32} src={Modern} style={{borderRadius:'10px'}}/>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Register;