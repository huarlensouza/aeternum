import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CloseIcon from '@mui/icons-material/Close';
import './index.css'

import api from '../../api';

import { useAuth } from '../../context/index';

import YoutubeIframe from '../../component/Youtube';
import Rule from '../../component/Rule';
import TextNinjabet from '../../assets/patron/ninjabet-text.png'


const Register = () => {
    const navigate = useNavigate();
    const { user, handleReload } = useAuth();

    const [nickname, setNickname] = React.useState(user.user.nickname || '');
    const [nicknameError, setNicknameError] = React.useState(false);
    const [nicknameErrorMsg, setNicknameErrorMsg] = React.useState('');

    const [selectPrimary, setSelectPrimary] = React.useState([
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
        'Manopla de Gelo',
        'Manopla Imaterial'
    ]);
    const [selectFilterPrimary, setSelectFilterPrimary] = React.useState([
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
        'Manopla de Gelo',
        'Manopla Imaterial'
    ]);
    const [primary, setPrimary] = React.useState('');
    const [primaryError, setPrimaryError] = React.useState(false);

    const [selectSecondary, setSelectSecondary] = React.useState([
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
        'Manopla de Gelo',
        'Manopla Imaterial'
    ]);
    const [selectFilterSecondary, setSelectFilterSecondary] = React.useState([
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
        'Manopla de Gelo',
        'Manopla Imaterial'
    ]);
    const [secondary, setSecondary] = React.useState('');
    const [secondaryError, setSecondaryError] = React.useState(false);

    const [restrictedWeapon, setRestrictedWeapon] = React.useState([]);
    const [modalRestrictedWeapon, setModalRestrictedWeapon] = React.useState(false);

    const [modalNinjabet, setModalNinjabet] = React.useState(false);

    const [modalEnrollment, setModalEnrollment] = React.useState(false);
    const [enrollment, setEnrollment] = React.useState([])

    const [days, setDays] = React.useState(user.user.days?.split(', ') || []);
    const [daysError, setDaysError] = React.useState(false);
    
    const [hour, setHour] = React.useState(user.user.hours);
    const [hourError, setHourError] = React.useState(false);

    const [registerError, setRegisterError] = React.useState([]);
    const [registerErrorModal, setRegisterErrorModal] = React.useState(false);
    
    const [checked, setChecked] = React.useState(false);

    const [rule, setRule] = React.useState(false);

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
        setSelectFilterPrimary(selectPrimary.filter(x => x != secondary));
        setSelectFilterSecondary(selectSecondary.filter(x => x != primary));
    }, [primary, secondary]);

    const handlePrimary = (event) => {
        if(event.target.value == 'Espada e Escudo') {
            setRestrictedWeapon({
                weapon:'Espada e Escudo',
                message:'No momento não estamos aceitando jogadores com Escudo Torre, peço que certifique seus equipamentos antes de realizar inscrição por favor!'
            });
            setModalRestrictedWeapon(true);
        };

        setPrimaryError(false);
        setPrimary(event.target.value);
    };

    const handleSecondary = (event) => {
        if(event.target.value == 'Espada e Escudo') {
            setRestrictedWeapon({
                weapon:'Espada e Escudo',
                message:'No momento não estamos aceitando jogadores com Escudo Torre, peço que certifique seus equipamentos antes de realizar inscrição por favor!'
            });
            setModalRestrictedWeapon(true);
        };

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
        setDays(typeof value == 'string' ? value.split(',') : value,);
    };

    const handleCheck = (event) => setChecked(event.target.checked);

    const handleSave = async() => {
        const data = {
            nickname: nickname,
            id_discord: user.discord.id,
            email: user.discord.email,
            weapon_primary: primary,
            weapon_secondary: secondary,
            days: days,
            hour: hour,
            access_token: user.access_token,
            refresh_token: user.refresh_token,
            avatar: user.discord.avatar
        };
        
        if(nickname === '') {
            setNicknameError(true);
            setNicknameErrorMsg('O campo é obrigatório');
        };

        if(nickname.length > 20) {
            setNicknameError(true)
            setNicknameErrorMsg('Limite máximo de 20 caracteres')
        };

        if(nickname.length < 4 && nickname !== '') {
            setNicknameError(true);
            setNicknameErrorMsg('Limite minímo de 4 caracteres');
        };
    
        if(primary === '') {
            setPrimaryError(true);
        };

        if(secondary === '') {
            setSecondaryError(true);
        };

        if(days.length === 0) {
            setDaysError(true);
        };

        if(hour === '') {
            setHourError(true);
        };

        if(checked && primary !== '' && secondary !== '' && days.length > 0 && hour !== '' && nickname !== '' && nickname.length >= 4 && nickname.length < 20) {
            const response = await api.setUser(data);
            if(response.status === 400) {
                setRegisterError(response.data.errors);
                setRegisterErrorModal(true);
            };

            if(response.status === 200) {
                if(response.data.enrollment) {
                    setModalNinjabet(true);
                } else {
                    setEnrollment(response.data.message)
                    setModalEnrollment(true);
                }
            };
        };
    };

    const handleCloseModalRegisterErro = () => setRegisterErrorModal(false);

    const handleNickname = (event) => {
        setNickname(event.target.value);
        setNicknameError(false);
        setNicknameErrorMsg('');
    };

    const handleRule = () => setRule(true);

    const handleCloseRule = () => setRule(false);

    const handleCloseModalRestrictedWeapon = () => setModalRestrictedWeapon(false);
    const handleNinjabet = () => window.open('https://www.n1nja.bet/');

    const handleCloseModalNinjabet = () => {
        handleReload();
        navigate('/');
    };

    const handleCloseModalEnrollment = () => {
        handleReload();
        navigate('/');
    };

    return (
        <Box
            sx={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            <Container maxWidth={"xs"}>
                <Box>
                    <Box sx={{mt:-1, display:'flex', flexDirection:'column', gap:'5px', alignItems:'center'}}>
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

                    <Box sx={{mt:2, display:'flex', justifyContent:'space-between'}}>
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
                                    selectFilterPrimary.map((weapon, index) => (
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
                                    selectFilterSecondary.map((weapon, index) => (
                                    
                                        <MenuItem key={index} value={weapon}>{weapon}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{mt:2, display:'flex', justifyContent:'center', textAlign:'center'}}>
                        <Typography sx={{fontSize:'12px', fontStyle:'italic', color:'#c9c9c9'}}>Sugestão da sua agenda para data e hora do Campeonato.</Typography> 
                    </Box>

                    <Box sx={{mt:1, display:'flex', justifyContent:'space-between'}}>
                        <FormControl variant="standard" sx={{ width: '70%', maxWidth:'277.19px' }} size="small">
                            <InputLabel id="checkbox-week-label">Possíveis dias da semana</InputLabel>
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

                    <Box sx={{mt:2, display:'flex', justifyContent:'center', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <Checkbox
                            size="small"
                            checked={checked}
                            onChange={handleCheck}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <Typography sx={{fontSize:'12px', fontStyle:'italic', color:'#c9c9c9', textAlign:'justify'}}>
                            Aceito os termos das <span style={{textDecoration:'underline', cursor:'pointer', color: 'rgb(219, 77, 83)'}} onClick={handleRule}>regras e condutas</span> da Arena Aeternum
                        </Typography> 
                    </Box>

                    <Box sx={{mt:3, display:'flex', justifyContent:'space-between'}}>
                        <Button fullWidth className={"alistar"} variant="contained" onClick={handleSave}>ALISTAR-SE</Button>
                    </Box>
                </Box>
            </Container>
            <Dialog
                open={registerErrorModal}
                onClose={handleCloseModalRegisterErro}
                scroll={'body'}
            >
                <DialogTitle>
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
            <Dialog
                open={modalRestrictedWeapon}
                onClose={handleCloseModalRestrictedWeapon}
            >
                <DialogTitle sx={{backgroundColor:'#101820bd'}}>
                    {restrictedWeapon.weapon}
                </DialogTitle>
                <DialogContent sx={{backgroundColor:'#101820bd'}}>
                    <DialogContentText>
                        {restrictedWeapon.message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{backgroundColor:'#101820bd'}}>
                    <Button onClick={handleCloseModalRestrictedWeapon}>FECHAR</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={modalNinjabet}
                fullWidth
                maxWidth={'sm'}
                sx={{
                    boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                }}
            >
                <Box sx={{display:'flex', flexDirection:'column', backgroundColor:'#101820bd'}}>
                    <Box padding={1} sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <img onClick={handleNinjabet} src={TextNinjabet} style={{width:120, cursor:'pointer'}} alt="" />
                        
                        <CloseIcon onClick={handleCloseModalNinjabet} sx={{mr:1, color:'#c086f5', cursor:'pointer'}}/>
                    </Box>
                    <Box padding={1} sx={{textTransform:'uppercase', mb:1}}>
                        <Typography sx={{fontSize:'13.7px', color:'#dbb570'}}>Cadastro efetuado com sucesso!</Typography>
                        <Typography sx={{fontSize:'13.7px', mb:1}}>Confira o nosso parceiro oficial da Arena Aeternum</Typography>
                        <Typography sx={{fontSize:'13.7px'}}>A partir de agora todas as apostas esportivas que você fizer, você vai ganhar!</Typography>
                        <Typography sx={{fontSize:'13.7px'}}>Quer saber como? <span style={{color:'#c086f5'}}>Assista o nosso vídeo</span></Typography>
                    </Box>
                    <YoutubeIframe videoIdSponser={'EaGmGjM_MZg'}/>
                </Box>
            </Dialog>
            <Dialog
                open={modalEnrollment}
                onClose={handleCloseModalEnrollment}
                fullWidth
                maxWidth={'xs'}
            >
                <DialogTitle sx={{backgroundColor:'#101820bd'}}>
                    Aviso
                </DialogTitle>
                <DialogContent sx={{backgroundColor:'#101820bd'}}>
                    <DialogContentText>
                        {enrollment}
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{backgroundColor:'#101820bd'}}>
                    <Button onClick={handleCloseModalEnrollment}>FECHAR</Button>
                </DialogActions>
            </Dialog>
            <Rule open={rule} handleCloseRule={handleCloseRule}/>
        </Box>
    );
};

export default Register;