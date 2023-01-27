import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Avatar } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from '@mui/material/ListItemButton';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

import api from '../../api';

import Loading from '../../component/Loading';
import Arena from '../../assets/outpost.webp';
import Arco from '../../assets/weapons/arco.png';
import Bacamarte from '../../assets/weapons/bacamarte.png';
import BastaoFlamejante from '../../assets/weapons/bastaoflamejante.png';
import EspadaEscudo from '../../assets/weapons/espadaeescudo.png';
import EspadaGrande from '../../assets/weapons/espadao.png';
import Lanca from '../../assets/weapons/lanca.png';
import Machadao from '../../assets/weapons/machadao.png';
import Machadinha from '../../assets/weapons/machadinha.png';
import ManoplaGelo from '../../assets/weapons/manopladegelo.png';
import ManoplaImaterial from '../../assets/weapons/manoplaimaterial.png';
import MarteloGuerra from '../../assets/weapons/martelodeguerra.png';
import Mosquete from '../../assets/weapons/mosquete.png';
import Rapieira from '../../assets/weapons/rapieira.png';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
        keys.reduce((output, key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key));
            return !output && matches ? key : output;
        }, null) || 'xs'
    );
};

const weapon = (weapon) => {
    const weapons = {
        "Arco":Arco,
        "Bacamarte":Bacamarte,
        "Bastão Flamejante":BastaoFlamejante,
        "Espada e Escudo":EspadaEscudo,
        "Espada Grande":EspadaGrande,
        "Lança":Lanca,
        "Machadão":Machadao,
        "Machadinha":Machadinha,
        "Manopla de Gelo":ManoplaGelo,
        "Manopla Imaterial":ManoplaImaterial,
        "Martelo de Guerra":MarteloGuerra,
        "Mosquete":Mosquete,
        "Rapieira":Rapieira
    };

    return weapons[weapon];
};

const stage = (number) => {
    const stages = {
        "2":"Final",
        "4":"Semifinais",
        "8":"Quartas de final",
        "16":"Oitavas de final",
        "32":"Primeira fase"
    };

    return stages[number.toString()];
};

const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.white,
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 11,
        },
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.white,
        },
    })
);

export default () => {
    const navigate = useNavigate();
    const width = useWidth();
    const [championships, setChampionships] = React.useState([]);
    const [championship, setChampionship] = React.useState([]);
    const [duels, setDuels] = React.useState([]);
    const [modal, setModal] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        (async() => {
            const championships = await api.getChampionships();
            setChampionships(championships.data)
            setLoading(false);
        })();
    },[]);

    const handleCloseModal = () => setModal(false);

    const handleDuelsChampionship = async(id_championship, active) => {
        if(active) {
            navigate('/');
        };

        const response = await api.getDuelsChampionship(id_championship);
        setDuels(response.data);
        setChampionship(championships.filter(x => x.id == id_championship)[0]);
        setModal(true);
    }

    const handleWatcher = (link) => window.open(link);

    return (
        loading
            ?
            <Loading/>
            :
            <Container component="main" maxWidth="lg">
                {championships.map((championship, indexChampionship) => (
                    <Box
                        key={indexChampionship}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly'
                        }}
                    >
                        <Box 
                            sx={{
                                marginTop: {lg:4, md:4, sm:4, xs:4},
                                display: {lg:'none', md:'none', sm:'none', xs:'flex'},
                                width:'100%',
                                flexDirection:'column',
                                alignItems:'center',
                                justifyContent:'space-between',
                                padding:'10px',
                                background: championship.active === 1 ? '#2e4a5e96' : '#1b262f78',
                                borderRadius: '5px',
                                boxShadow: 'rgb(19 28 34 / 40%) 0px 2px 4px, rgb(21 27 32 / 50%) 0px 7px 13px -3px, rgb(0 0 0 / 20%) 0px -3px 0px inset',
                                height:'180px'
                            }}
                            onClick={() => handleDuelsChampionship(championship.id, championship.active === 1)}
                        >
                            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
                                <Box>
                                    <Typography sx={{fontSize:{lg:10, md:10, sm:10, xs:10},}}>Descrição</Typography>
                                    <Typography sx={{fontSize:{lg:12, md:12, sm:12, xs:12},}}>{championship.description}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        width: '60px',
                                        height: '55px',
                                        backgroundImage:`url(${Arena})`,
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                />
                            </Box>
                            <Box>
                                <Typography sx={{fontSize:{lg:10, md:10, sm:10, xs:10},}}>Data do evento</Typography>
                                <Typography sx={{fontSize:{lg:12, md:12, sm:12, xs:12},}}>{new Date(championship.date).getDate()} de {months[new Date(championship.date).getMonth()]} de {new Date(championship.date).getFullYear()} às {new Date(championship.date).getHours()}:{('00'+new Date(championship.date).getMinutes()).slice(-2)}</Typography>
                            </Box>
                            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
                                <Box>
                                    <Typography sx={{fontSize:{lg:10, md:10, sm:10, xs:10},}}>Prêmio</Typography>
                                    <Typography sx={{fontSize:{lg:12, md:12, sm:12, xs:12},}}>{championship.value}</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{fontSize:{lg:10, md:10, sm:10, xs:10},}}>Campeão atual</Typography>
                                    <Typography sx={{fontSize:{lg:12, md:12, sm:12, xs:12},}}>{championship.nickname || 'À definir'}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <Typography sx={{fontSize:{lg:12, md:12, sm:12, xs:12}, textAlign:'center'}}>
                                    {championship.active === 1 ? championship.register === 0 ? 'Inscrições finalizadas' : 'Inscrições abertas' : <MoreHorizIcon/>} 
                                </Typography>
                            </Box>
                        </Box>
                        {/* Completo */}
                        <Box 
                            sx={{
                                marginTop: {lg:4, md:4, sm:4, xs:4},
                                display:{lg:'flex', md:'flex', sm:'flex', xs:'none'},
                                width:'100%',
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-between',
                                paddingBottom: {lg:'5px', md:'5px', sm:'5px', xs:'5px'},
                                paddingLeft: '10px',
                                paddingRight: '25px',
                                paddingTop:  {lg:'5px', md:'5px', sm:'5px', xs:'5px'},
                                background: championship.active === 1 ? '#2e4a5e96' : '#1b262f78',
                                borderRadius: '5px',
                                boxShadow: 'rgb(19 28 34 / 40%) 0px 2px 4px, rgb(21 27 32 / 50%) 0px 7px 13px -3px, rgb(0 0 0 / 20%) 0px -3px 0px inset',
                                height:{lg:'100px', md:'100px', sm:'100px', xs:'100px'},
                                cursor:'pointer',
                            }}
                            onClick={() => handleDuelsChampionship(championship.id, championship.active === 1)}
                        >
                            <Box
                                sx={{
                                    width: '60px',
                                    height: '55px',
                                    backgroundImage:`url(${Arena})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                }}
                            />
                            <Box>
                                <Typography sx={{fontSize:{lg:12, md:12, sm:10, xs:10}}}>Descrição</Typography>
                                <Typography sx={{fontSize:{lg:14, md:14, sm:12, xs:12}}}>{championship.description}</Typography>
                            </Box>
                            <Box sx={{display:{lg:'flex', md:'none', sm:'none', xs:'none'}, flexDirection:'column'}}>
                                <Typography sx={{fontSize:{lg:12, md:12, sm:10, xs:10}}}>Data do evento</Typography>
                                <Typography sx={{fontSize:{lg:14, md:14, sm:12, xs:12}}}>{new Date(championship.date).getDate()} de {months[new Date(championship.date).getMonth()]} de {new Date(championship.date).getFullYear()} às {new Date(championship.date).getHours()}:{('00'+new Date(championship.date).getMinutes()).slice(-2)}</Typography>
                            </Box>
                            <Box sx={{display:{lg:'none', md:'flex', sm:'flex', xs:'none'}, flexDirection:'column'}}>
                                <Typography sx={{fontSize:{lg:12, md:12, sm:10, xs:10}}}>Data do evento</Typography>
                                <Typography sx={{fontSize:{lg:14, md:14, sm:12, xs:12}}}>{new Date(championship.date).getDate()}/{new Date(championship.date).getMonth()}/{new Date(championship.date).getFullYear()} às {new Date(championship.date).getHours()}:{('00'+new Date(championship.date).getMinutes()).slice(-2)}</Typography>
                            </Box>
                            <Box sx={{display:{lg:'flex', md:'flex', sm:'none', xs:'none'}, flexDirection:'column'}}>
                                <Typography sx={{fontSize:{lg:12, md:12, sm:10, xs:10}}}>Prêmio</Typography>
                                <Typography sx={{fontSize:{lg:14, md:14, sm:12, xs:12}}}>{championship.value}</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{fontSize:{lg:12, md:12, sm:10, xs:10}}}>Campeão atual</Typography>
                                <Typography sx={{fontSize:{lg:14, md:14, sm:12, xs:12}}}>{championship.nickname || 'À definir'}</Typography>
                            </Box>
                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <Typography sx={{fontSize:{lg:12, md:12, sm:12, xs:12}, textAlign:'center'}}>
                                    {championship.active === 1 ? championship.register === 0 ? 'Inscrições finalizadas' : 'Inscrições abertas' : <MoreVertIcon/>} 
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                ))}
                <Dialog
                    open={modal}
                    TransitionComponent={Transition}
                    onClose={handleCloseModal}
                    scroll={"paper"}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    fullWidth={true}
                    maxWidth={'sm'}
                >
                    <DialogTitle sx={{backgroundColor:'#101820bd'}}>Histórico de Combate</DialogTitle>
                    <DialogContent dividers={true} sx={{backgroundColor:'#101820bd', pl:{lg:'10px', md:'10px', sm:'10px', xs:'2px'}, pr:{lg:'10px', md:'10px', sm:'10px', xs:'2px'}}}>
                        <List>
                            {championship.link !== null &&
                                <Box sx={{mb:2, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                    <Box>

                                    </Box>
                                    <Box sx={{display:'flex'}}>
                                        <Box onClick={() => window.open(championship.link)} sx={{cursor:'pointer', display:'flex', flexDirection:'row', alignItems:'center'}}>
                                            <PlaylistPlayIcon/> Lista das partidas
                                        </Box>
                                    </Box>
                                </Box>
                            }
                            {duels.map((value, index) => (
                                <ListItemButton key={index} sx={{cursor:'auto', pt:0, pb:0, pr:{lg:4, md:4, sm:4, xs:1}, pl:{lg:4, md:4, sm:4, xs:1}}}>
                                    <Box sx={{width:'100%', pt:1, pb:1, borderBottom: index !== duels.length-1 ? '1px solid #ffffff0d' : 'none'}}>
                                        <Box sx={{textAlign:'center', fontSize:'12px', mb:1, color:'white'}}>{width !== 'xs' && "Campeonato "}{value.championship} - {stage(value.round)}</Box>

                                        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                            <Box sx={{width:'42%', display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
                                                <Box sx={{display: {lg:'flex', md:'flex', sm:'flex', xs:'none'}}}>
                                                    <Avatar
                                                        variant="rounded"
                                                        src={`https://cdn.discordapp.com/avatars/${value?.id_discord && value?.avatar ? value?.id_discord : '587052973637763073'}/${value?.avatar || 'a941105029ab60929857a517686baaeb'}`}
                                                        sx={{ width: 32, height: 32 }}
                                                    />
                                                </Box>
                                                <Box sx={{ml:{lg:1, md:1, sm:1, xs:0}}}>
                                                    <Box>
                                                        <Typography sx={{lineHeight:1, color:value.winner == 1 ? '#95ed95' : '#e28f8f', fontSize:{lg:'16px', md:'16px', sm:'16px', xs:'12px', wordBreak: 'break-word'}}}>{value.nickname}</Typography>
                                                    </Box>
                                                    <Box sx={{display:'flex', mt:0.3}}>
                                                        <LightTooltip title={value.weapon_primary}>
                                                            <Box sx={{width:{lg:'26px', md:'26px', sm:'26px', xs:'24px'}, height:{lg:'26px', md:'26px', sm:'26px', xs:'24px'}, backgroundImage:`url(${weapon(value.weapon_primary)})`, backgroundPosition: {lg:'top', md:'top', sm:'top', xs:'center'}, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}/>
                                                        </LightTooltip>
                                                        <LightTooltip title={value.weapon_secondary}>
                                                            <Box sx={{width:{lg:'26px', md:'26px', sm:'26px', xs:'24px'}, height:{lg:'26px', md:'26px', sm:'26px', xs:'24px'}, backgroundImage:`url(${weapon(value.weapon_secondary)})`, backgroundPosition: {lg:'top', md:'top', sm:'top', xs:'center'}, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}/>
                                                        </LightTooltip>
                                                    </Box>
                                                </Box>
                                            </Box>

                                            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', ml:1, mr: 1}}>
                                                <Box sx={{width:'16%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'center', color:'white'}}>
                                                    <Box sx={{fontSize:{lg:24, md:24, sm:24, xs:18}, mr:{lg:2, md:2, sm:2, xs:1}}}>
                                                        {value.kills}
                                                    </Box>
                                                    x
                                                    <Box sx={{fontSize:{lg:24, md:24, sm:24, xs:18}, ml:{lg:2, md:2, sm:2, xs:1}}}>
                                                        {value.deaths}
                                                    </Box>
                                                </Box>
                                                {value.link != null && <Box onClick={() => handleWatcher(value.link)} sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%', cursor:'pointer'}}>
                                                    <YouTubeIcon sx={{mr:1, color:'#e75757', fontSize:20}}/><Typography sx={{fontSize:'12px', color:'white'}}>ASSISTIR</Typography>
                                                </Box>}

                                            </Box>

                                            <Box sx={{width:'42%', display:'flex', flexDirection:'row-reverse', alignItems:'flex-start'}}>
                                                <Box sx={{display: {lg:'flex', md:'flex', sm:'flex', xs:'none'}}}>
                                                    <Avatar
                                                        variant="rounded"
                                                        src={`https://cdn.discordapp.com/avatars/${value?.id_discord_opponent && value?.avatar_opponent ? value?.id_discord_opponent : '587052973637763073'}/${value?.avatar_opponent || 'a941105029ab60929857a517686baaeb'}`}
                                                        sx={{ width: 32, height: 32 }}
                                                    />
                                                </Box>
                                                <Box sx={{mr:{lg:1, md:1, sm:1, xs:0}}}>
                                                    <Box sx={{textAlign:'end'}}>
                                                        <Typography sx={{lineHeight:1, color:value.winner == 1 ? '#e28f8f' : '#95ed95', fontSize:{lg:'16px', md:'16px', sm:'16px', xs:'12px', wordBreak: 'break-word'}}}>{value.opponent}</Typography>
                                                    </Box>
                                                    <Box sx={{display:'flex', justifyContent:'flex-end', mt:0.3}}>
                                                        <LightTooltip title={value.weapon_primary_opponent}>
                                                            <Box sx={{width:{lg:'26px', md:'26px', sm:'26px', xs:'24px'}, height:{lg:'26px', md:'26px', sm:'26px', xs:'24px'}, backgroundImage:`url(${weapon(value.weapon_primary_opponent)})`, backgroundPosition: {lg:'top', md:'top', sm:'top', xs:'center'}, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}/>
                                                        </LightTooltip>
                                                        <LightTooltip title={value.weapon_secondary_opponent}>
                                                            <Box sx={{width:{lg:'26px', md:'26px', sm:'26px', xs:'24px'}, height:{lg:'26px', md:'26px', sm:'26px', xs:'24px'}, backgroundImage:`url(${weapon(value.weapon_secondary_opponent)})`, backgroundPosition: {lg:'top', md:'top', sm:'top', xs:'center'}, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}/>
                                                        </LightTooltip>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            
                                        </Box>
                                    </Box> 
                                </ListItemButton>
                            ))}
                        </List>
                    </DialogContent>
                    <DialogActions sx={{backgroundColor:'#101820bd'}}>
                        <Button onClick={handleCloseModal}>Fechar</Button>
                    </DialogActions>
                </Dialog>
            </Container>
        
    );
};