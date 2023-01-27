import React, { useEffect } from "react";

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Avatar } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import YouTubeIcon from '@mui/icons-material/YouTube';
import List from "@mui/material/List";
import ListItemButton from '@mui/material/ListItemButton';
import './index.css';

import api from "../../api";

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
    const width = useWidth();
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(15);
    const [page, setPage] = React.useState(1);
    const [champion, setChampion] = React.useState([]);
    const [duels, setDuels] = React.useState([]);
    const [modalDuels, setModalDuels] = React.useState(false);
    
    useEffect(() => {
        (async () => {
            const responseRanking = await api.getRanking();
            setData(responseRanking.data);

            const responseChampion = await api.getLastChampion();
            setChampion(responseChampion.data[0]);

            setLoading(false);
        })();
    },[]);
    
    const handlePage = (event, value) => setPage(value);
    
    const handleDuelLogs = async(id_discord) => {
        const response = await api.getRankingIndividual(id_discord)
        setDuels(response.data);
        setModalDuels(true);
    };

    const handleCloseModalDuels = () => setModalDuels(false);

    const handleWatcher = (link) => window.open(link);

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}
            >
            {loading
                ?
                    <Box sx={{mt:45}}>
                        <CircularProgress color="secondary" />
                    </Box>
                    :
                    <Box sx={{width:'100%'}}>
                        <Box
                            sx={{
                                marginTop: {lg:2, md:2, sm:2, xs:8},
                                display:'flex',
                                justifyContent:'center',
                                borderRadius: '5px',
                                gap:'10px',
                            }}
                        >
                            <Box>
                                <Avatar
                                    src={`https://cdn.discordapp.com/avatars/${champion?.id_discord && champion?.avatar ? champion?.id_discord : '587052973637763073'}/${champion?.avatar || 'a941105029ab60929857a517686baaeb'}`}
                                    sx={{ width: 64, height: 64 }}
                                />
                            </Box>
                            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: '22px'}}>
                                <Box sx={{fontSize:'12px'}}>
                                    Campeão atual
                                </Box>
                                <Box sx={{fontSize: {lg:'32px', md:'32px', sm:'32px', xs:'28px'}, color:'rgb(255, 221, 204)'}}>
                                    {champion.nickname}
                                </Box>
                                <Box sx={{mt:'2px'}}>
                                    <LightTooltip title={champion.weapon_primary}>
                                        <img src={weapon(champion.weapon_primary)} style={{width:32}}/> 
                                    </LightTooltip>
                                    <LightTooltip title={champion.weapon_secondary}>
                                        <img src={weapon(champion.weapon_secondary)} style={{width:32}}/> 
                                    </LightTooltip>
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                marginTop: {lg:4, md:4, sm:4, xs:4},
                                display:'flex',
                                flexDirection:'column',
                                justifyContent:'flex-start',
                                paddingBottom: {lg:'50px', md:'50px', sm:'50px', xs:'25px'},
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                paddingTop:  {lg:'50px', md:'50px', sm:'50px', xs:'25px'},
                                background: '#1b262f78',
                                borderRadius: '5px',
                                boxShadow: 'rgb(19 28 34 / 40%) 0px 2px 4px, rgb(21 27 32 / 50%) 0px 7px 13px -3px, rgb(0 0 0 / 20%) 0px -3px 0px inset',
                                height:{lg:'540px', md:'540px', sm:'540px', xs:'415px'}
                            }}
                        >
                            <table style={{color:'white'}}>
                                <thead>
                                    {
                                        width === 'xs' 
                                        ?
                                            <tr style={{fontSize:'12px'}}>
                                                <th style={{textAlign: 'center'}}>Nome</th>
                                                <th style={{textAlign: 'center', whiteSpace:'pre-line'}}>
                                                    {`   Abates
                                                    Mortes`}
                                                </th>
                                                <th style={{textAlign: 'center', whiteSpace:'pre-line'}}>
                                                {`   Vitória
                                                    Derrota`}
                                                </th>
                                                <th style={{textAlign: 'center'}}>Camp.</th>
                                            </tr>
                                        :
                                            <tr>
                                                <th style={{textAlign: 'center'}}>Nome</th>
                                                <th style={{textAlign: 'center'}}>Abates</th>
                                                <th style={{textAlign: 'center'}}>Mortes</th>
                                                <th style={{textAlign: 'center'}}>Vitórias</th>
                                                <th style={{textAlign: 'center'}}>Derrotas</th>
                                                <th style={{textAlign: 'center'}}>Campeonatos</th>
                                            </tr>
                                    }

                                </thead>
                                <tbody>
                                    {data.slice((page-1)*rowsPerPage, (page-1)*rowsPerPage+rowsPerPage).map((values, index) => (
                                            width === 'xs' 
                                            ?
                                                <tr key={index} style={{cursor:'pointer'}} onClick={() => handleDuelLogs(values.id_discord)}>
                                                    <td style={{textAlign:'left', fontSize:'12px'}}>{values.nickname}</td>
                                                    <td style={{textAlign:'center', fontSize:'12px'}}>
                                                        <span style={{color: '#6491d5'}}>{values.kills}</span>/<span style={{color: '#b186b9'}}>{values.deaths}</span>
                                                    </td>
                                                    <td style={{textAlign:'center', fontSize:'12px'}}>
                                                        <span style={{color: '#7cc581'}}>{values.wins}</span>/<span style={{color: '#c57c7c'}}>{values.losses}</span>
                                                    </td>
                                                    <td style={{textAlign:'center', fontSize:'12px'}}>{values.champions}</td>
                                                </tr>
                                            :
                                                <tr key={index} style={{cursor:'pointer'}} onClick={() => handleDuelLogs(values.id_discord)}>
                                                    <td style={{textAlign:'right', fontSize:'16px'}}>{values.nickname}</td>
                                                    <td style={{textAlign:'center'}}><span style={{color: '#6491d5'}}>{values.kills}</span></td>
                                                    <td style={{textAlign:'center'}}><span style={{color: '#b186b9'}}>{values.deaths}</span></td>
                                                    <td style={{textAlign:'center'}}><span style={{color: '#7cc581'}}>{values.wins}</span></td>
                                                    <td style={{textAlign:'center'}}><span style={{color: '#c57c7c'}}>{values.losses}</span></td>
                                                    <td style={{textAlign:'center'}}>{values.champions}</td>
                                                </tr>
                                    
                                    ))}
                                </tbody>
                            </table>
                        </Box>

                        <Box sx={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
                            <Pagination count={Math.ceil(data.length/rowsPerPage)} page={page} onChange={handlePage} />
                        </Box>
                    </Box>
            }
            </Box>
            <Dialog
                open={modalDuels}
                onClose={handleCloseModalDuels}
                scroll={"paper"}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                fullWidth={true}
                maxWidth={'sm'}
            >
                <DialogTitle sx={{backgroundColor:'#101820bd'}}>Histórico de Combate</DialogTitle>
                <DialogContent dividers={true}  sx={{backgroundColor:'#101820bd', pl:{lg:'10px', md:'10px', sm:'10px', xs:'2px'}, pr:{lg:'10px', md:'10px', sm:'10px', xs:'2px'}}}>
                    <List>
                        {duels.map((value, index) => (
                                <ListItemButton key={index} sx={{cursor:'auto', pt:0, pb:0, pr:{lg:4, md:4, sm:4, xs:1}, pl:{lg:4, md:4, sm:4, xs:1}}}>
                                    <Box key={index} sx={{width:'100%', pt:1, pb:1, borderBottom: index !== duels.length-1 ? '1px solid #ffffff0d' : 'none'}}>
                                        <Box sx={{textAlign:'center', fontSize:'12px', mb:1}}>{width !== 'xs' && "Campeonato "}{value.championship} - {stage(value.round)}</Box>

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
                                                <Box sx={{width:'16%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'center'}}>
                                                    <Box sx={{fontSize:{lg:24, md:24, sm:24, xs:18}, mr:{lg:2, md:2, sm:2, xs:1}}}>
                                                        {value.kills}
                                                    </Box>
                                                    x
                                                    <Box sx={{fontSize:{lg:24, md:24, sm:24, xs:18}, ml:{lg:2, md:2, sm:2, xs:1}}}>
                                                        {value.deaths}
                                                    </Box>
                                                </Box>
                                                {value.link != null && <Box onClick={() => handleWatcher(value.link)} sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%', cursor:'pointer'}}>
                                                    <YouTubeIcon sx={{mr:1, color:'#e75757', fontSize:20}}/><Typography sx={{fontSize:'12px'}}>ASSISTIR</Typography>
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
                    <Button onClick={handleCloseModalDuels}>Fechar</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};