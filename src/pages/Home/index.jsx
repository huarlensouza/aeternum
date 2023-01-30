import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import DialogTitle from '@mui/material/DialogTitle';
import Container from '@mui/material/Container';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import './index.css';

import { useAuth } from '../../context/index';

import api from '../../api';

import YoutubeIframe from '../../component/Youtube';
import Accordion from '../../component/Accordion';
import Discord from '../../component/Discord';
import Weapons from '../../component/Weapons';
import Versus from '../../component/Versus';

import Banner from '../../assets/banner.png';
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

const DiscordButton = styled(Button)(({ theme }) => ({
    backgroundImage: 'radial-gradient(circle, rgb(199 142 52) 50%, rgb(171 119 78) 80%)',
    '&:hover': {
      backgroundImage: 'radial-gradient(circle, rgb(225 175 80) 50%, rgb(206 140 61) 80%)',
    },
    '&:span': {
        color:'red'
    }
}));

const faq = [
    {
        id:1,
        title: "Qual será o formato do campeonato?", 
        content: `No término da inscrição para o Campeonato, dentre os inscritos serão sorteados 32 jogadores para formação da tabela. O formato do campeonato é uma chave de 32 jogadores, com confronto direto de melhor de 3 até a final, do qual será feita com uma melhor de 5.`
    },
    {
        id:3,
        title: "O que é permitido no Campeonato?", 
        content: `Consumíveis, poções, revestimentos, redistribuição dos atributos e das habilidades, alternar equipamentos das mesmas armas registradas no campeonato, alternar equipamentos como acessórios e armaduras, alternar entre médio/leve/pesado e as gemas dos equipamentos.`,
        rule:true
    },
    {
        id:4,
        title: "O que é NÃO permitido no Campeonato?", 
        content: `O bastão vital e Escudo Torre estão desabilitados no momento, utilizar armas que não foram cadastras, ultrapassar limite da área estabelecida pela organização, manter-se em grupo durante o duelo e qualquer antijogo que impossibilita um confronto justo entre os competidores.`,
        rule: true
    },
];

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

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


export default () => {
    const navigate = useNavigate();
    const { signed, user, handleLogin, championship, handleReload } = useAuth();
    const [searchParams, setSearchParams] = useSearchParams(); 
    const [loading, setLoading] = React.useState(true);
    const [verified, setVerified] = React.useState(false);

    const [modalCancel, setModalCancel] = React.useState(false);
    const [modalWeapon, setModalWeapon] = React.useState(false);

    const [modalLastDuelChampionship, setModalLastDuelChampionship] = React.useState(false);
    const [lastDuelChampionship, setLastDuelChampionship] = React.useState([]);

    useEffect(() => {
        (async() => {
            if(searchParams.get('code') && !localStorage.getItem('@aeternum') && searchParams.get('code') != sessionStorage.getItem('@aeternum')) {
                const response = await handleLogin(searchParams.get('code'));

                if(!response.auth) {
                    sessionStorage.setItem('@aeternum', searchParams.get('code'));
                };

                if(response.auth && !response.verified){
                    setVerified(true);
                };
            }

            if(!sessionStorage.getItem('@welcome')) {
                const lastDuel = await api.getLastDuelChampionship();
                setLastDuelChampionship(lastDuel.data);
                setModalLastDuelChampionship(true);
            }

            setLoading(false);
        })();
    },[]);

    const handleTwitch = () => window.open('https://www.twitch.tv/sinehtv');

    const handleOpenModalWeapon = () => setModalWeapon(true);
    const handleCloseModalWeapon = () => setModalWeapon(false);

    const handleOpenModalCancel = () => setModalCancel(true);
    const handleCloseModalCancel = () => setModalCancel(false);

    const handleCloseVerified = () => setVerified(false);

    const handleCancel = async() => {
        const response = await api.deleteEnrollment(user.discord.id, user.access_token);

        if(response.data) {
            handleReload();
        };

        setModalCancel(false);
    };

    const handleCloseModalLastDuelChampionship = () => {
        sessionStorage.setItem('@welcome', true);
        setModalLastDuelChampionship(false);
    };

    console.log(lastDuelChampionship)

    return (
        <Box
            sx={{
                marginTop: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            {!loading &&
                <Container maxWidth="lg" sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Box
                        sx={{
                            maxWidth:{lg:'900px', md:'900px', sm:'450px', xs:'400px'},
                            width:'100%',
                            display:'flex',
                            flexDirection:{lg:'row', md:'row', sm:'column', xs:'column'},
                            color:'white',
                            justifyContent:'space-between',
                            gap:{lg:'50px', md:'50px', sm:'50px', xs:'40px'}
                        }}
                    >
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent: championship && user || !championship ? 'space-between' : championship && !user ? 'space-between' : 'flex-start'}}>
                            <Box>
                                <Box sx={{fontWeight:'bold', fontSize:'32px'}}>CAMPEONATOS ORGANIZADOS</Box>
                                <Box sx={{fontWeight:'bold', fontSize:'32px'}}>& COMPETITIVOS</Box>
                            </Box>
                            <Box sx={{maxWidth:'500px', mb:2}}>
                                Todos os registros e estatísticas do Campeonato serão salvos e compartilhados com a comunidade, assim iremos manter um ranqueamento entre os competidores e posteriormente criando o "Invitation", uma liga mais competitiva com mais recompensas e com os melhores jogadores selecionados de acordo com suas estatísticas dos campeonatos.
                            </Box>
                            {signed && championship.register == 1 && !user?.enrollment && 
                                <Box sx={{textAlign:'center'}}>
                                    <DiscordButton fullWidth variant="contained" onClick={() => navigate('/cadastrar')} sx={{height:'40px'}}>ALISTAR-SE</DiscordButton>
                                    <Typography sx={{fontSize:'12px', fontStyle:'italic'}}>Inscrição até a primeira fase do evento, após será encerrada.</Typography>
                                </Box>
                            }
                            {signed && championship && user?.enrollment &&
                                <Box sx={{display:'flex', flexDirection:'row', gap:'10px'}}>
                                    <Button fullWidth onClick={handleOpenModalWeapon} variant="contained" color="info" sx={{height:'40px', lineHeight: 1}} disabled={championship.weapon == 0 ? true : false}>ALTERAR EQUIPAMENTOS</Button>
                                    <Button fullWidth onClick={handleOpenModalCancel} variant="contained" color="error" sx={{height:'40px', lineHeight: 1}}>CANCELAR INSCRIÇÃO</Button>
                                </Box>
                            }
                            {!signed && championship && championship.register == 1 &&
                                <Box sx={{textAlign:'center', mt:{lg:1, md:1, sm:5, xs:5}}}>
                                    <Typography sx={{fontSize:'14px', fontStyle:'italic'}}>Efetue o acesso na página para alistar-se</Typography>
                                </Box>
                            }
                            {!championship &&
                                <Box sx={{textAlign:'center', mt:{lg:1, md:1, sm:5, xs:5}}}>
                                    <Typography sx={{fontSize:'14px', fontStyle:'italic'}}>Em breve inscrições</Typography>
                                </Box>
                            }
                            {championship && championship.register == 0 && !user?.enrollment &&
                                <Box sx={{textAlign:'center', mt:{lg:1, md:1, sm:5, xs:5}}}>
                                    <Typography sx={{fontSize:'14px', fontStyle:'italic'}}>Inscrições finalizadas, aguarde o próximo evento</Typography>
                                </Box>
                            }
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                            <Box
                                sx={{
                                    backgroundImage: `url(${Banner})`, 
                                    height:'400px',
                                    width:'450px',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    boxShadow: 'rgb(0 0 0 / 0%) 0px 20px 15px -10px, rgb(0 0 0 / 60%) 0px 15px 20px 2px, rgb(0 0 0 / 40%) 0px 5px 25px 4px'
                                }}
                            />
                        </Box>
                    </Box>

                    <Box 
                        sx={{
                            mt:{lg:10, md:10, sm:10, xs:15},
                            maxWidth:{lg:'900px', md:'900px', sm:'450px', xs:'400px'},
                            width:'100%',
                            display:'flex',
                            flexDirection:{lg:'row', md:'row', sm:'column', xs:'column'},
                            color:'white',
                            justifyContent:'space-between',
                            gap:{lg:'10px', md:'10px', sm:'20px', xs:'20px'},
                        }}
                    >
                        <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:{lg:'row', md:'row', sm:'row', xs:'column'}, gap:{lg:'10px', md:'10px', sm:'20px', xs:'20px'}}}>
                            <Grow
                                in={true}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(true ? { timeout: 1000 } : {})}
                            >
                                <Box
                                    sx={{
                                        padding: '15px 35px 15px 35px',
                                        background: 'rgb(0 0 0 / 35%)',
                                        boxShadow: '6px 6px 10px 0px rgb(0 0 0 / 25%)',
                                        borderRadius: '10px',
                                        textAlign:'center,',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color:'#efefef',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        lineHeight: 2,
                                        fontWeight: 'lighter',
                                    }}
                                >
                                    <Box sx={{fontWeight:'bold', fontSize:'18px'}}>Servidor</Box>
                                    <Box sx={{fontSize:'12px'}}>Artorius</Box>
                                </Box>
                            </Grow>
                            <Grow
                                in={true}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(true ? { timeout: 1500 } : {})}
                            >
                                <Box
                                    sx={{
                                        padding: '15px 35px 15px 35px',
                                        background: 'rgb(0 0 0 / 35%)',
                                        boxShadow: '6px 6px 10px 0px rgb(0 0 0 / 25%)',
                                        borderRadius: '10px',
                                        textAlign:'center,',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color:'#efefef',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        lineHeight: 2,
                                        fontWeight: 'lighter',
                                    }}
                                >
                                    <Box sx={{fontWeight:'bold', fontSize:'18px'}}>Data do Evento</Box>
                                    {championship && 
                                        <Box sx={{textAlign:'center'}}>
                                            <Box sx={{fontSize:'12px'}}>{new Date(championship.date).getDate()} de {months[new Date(championship.date).getMonth()]} de {new Date(championship.date).getFullYear()}</Box>
                                            <Box sx={{fontSize:'12px'}}>{days[new Date(championship.date).getDay()%7]} Às {new Date(championship.date).getHours()}:{('00'+new Date(championship.date).getMinutes()).slice(-2)}</Box>
                                        </Box>
                                    }
                                    {!championship && 
                                        <Box sx={{textAlign:'center', fontSize:'12px'}}>
                                            Em breve
                                        </Box>
                                    }
                                </Box>
                            </Grow>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:{lg:'row', md:'row', sm:'row', xs:'column'}, gap:{lg:'10px', md:'10px', sm:'20px', xs:'20px'}}}>
                            <Grow
                                in={true}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(true ? { timeout: 1500 } : {})}
                            >
                                <Box
                                    sx={{
                                        padding: '15px 35px 15px 35px',
                                        background: 'rgb(0 0 0 / 35%)',
                                        boxShadow: '6px 6px 10px 0px rgb(0 0 0 / 25%)',
                                        borderRadius: '10px',
                                        textAlign:'center,',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color:'#efefef',
                                        fontSize:'0.8rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        lineHeight: 2,
                                        fontWeight: 'lighter',
                                        cursor:'pointer'
                                    }}
                                    onClick={handleTwitch}
                                >
                                    <Box sx={{fontWeight:'bold', fontSize:'18px'}}>Transmissão</Box>
                                    <Box sx={{fontWeight:'bold', fontSize:'12px'}}>Twitch.tv/sinehtv</Box>
                                </Box>
                            </Grow>
                            <Grow
                                in={true}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(true ? { timeout: 1000 } : {})}
                            >

                                <Box
                                    sx={{
                                        padding: '15px 35px 15px 35px',
                                        background: 'rgb(0 0 0 / 35%)',
                                        boxShadow: '6px 6px 10px 0px rgb(0 0 0 / 25%)',
                                        borderRadius: '10px',
                                        textAlign:'center,',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color:'#efefef',
                                        fontSize:'0.8rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        lineHeight: 2,
                                        fontWeight: 'lighter',
                                    }}
                                >
                                    
                                    <Box sx={{fontWeight:'bold', fontSize:'18px'}}>Premiação</Box>
                                        {championship &&
                                            <Box sx={{display:'flex', flexDirection:"row", justifyContent:'space-around', alignItems:'center'}}>
                                                <Box className="gold" sx={{height:'30px', width:'30px'}}/>
                                                <Typography align='center' sx={{fontSize:'18px'}}>{championship.value}</Typography>
                                            </Box>
                                        }
                                        {!championship &&
                                            <Box sx={{display:'flex', flexDirection:"row", justifyContent:'space-around', alignItems:'center'}}>
                                                Em breve
                                            </Box>
                                        }
                                </Box>
                                
                            </Grow>
                        </Box>
                    </Box>

                    <Box 
                        sx={{
                            mt:{lg:10, md:10, sm:10, xs:15},
                            maxWidth:{lg:'900px', md:'900px', sm:'450px', xs:'400px'},
                            width:'100%',
                            display:{lg:'flex', md:'flex', sm:'flex', xs:'flex'},
                            flexDirection:{lg:'row', md:'row', sm:'column', xs:'column'},
                            gap:{lg:'2vw', md:'2vw', sm:'4vw', xs:'4vw'},
                        }}
                    >
                        <Accordion data={faq}/>
                    </Box>
                </Container>
            }
            <Discord open={verified} handleCloseVerified={handleCloseVerified}/>
            <div>
                <Dialog
                    TransitionComponent={Transition}
                    open={modalLastDuelChampionship}
                    fullWidth
                    maxWidth={'sm'}
                >
                    <DialogTitle sx={{backgroundColor:'#101820bd', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <Box>Campeonato {lastDuelChampionship.description}</Box>
                        <CloseIcon onClick={handleCloseModalLastDuelChampionship} sx={{color:'#90caf9', cursor:'pointer'}}/>
                    </DialogTitle>
                    <DialogContent sx={{backgroundColor:'#101820bd', pr:{lg:2, md:2, sm:2, xs:1}, pl:{lg:2, md:2, sm:2, xs:1}}}>
                        <DialogContentText component="div">
                            <Box sx={{mb:2, fontSize:{lg:'14px', md:'14px', sm:'14px', xs:'12px'}}}>
                                Assista a grande final do Campeonato do Forte de {lastDuelChampionship.description}
                            </Box>

                            <Box sx={{display:'flex', flexDirection:{lg:'row', md:'row', sm:'row', xs:'column'}, justifyContent:'space-evenly'}}>
                                <Box
                                    sx={{
                                        display:'flex',
                                        flexDirection:{lg:'row', md:'row', sm:'row', xs:'row'},
                                        justifyContent:{lg:'center', md:'center', sm:'center', xs:'flex-start'},
                                        borderRadius: '5px',
                                        ml:{lg:0, md:0, sm:0, xs:'10px'},
                                        gap:'10px',
                                    }}
                                >
                                    <Box>
                                        <Avatar
                                            src={`https://cdn.discordapp.com/avatars/${lastDuelChampionship?.id_discord && lastDuelChampionship?.avatar ? lastDuelChampionship?.id_discord : '587052973637763073'}/${lastDuelChampionship?.avatar || 'a941105029ab60929857a517686baaeb'}`}
                                            sx={{ width: 32, height: 32 }}
                                        />
                                    </Box>
                                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: '22px'}}>
                                        <Box sx={{fontSize: {lg:'16px', md:'16px', sm:'16px', xs:'12px'}, wordBreak:'break-word', color:'rgb(255, 221, 204)'}}>
                                            {lastDuelChampionship.nickname}
                                        </Box>
                                        <Box sx={{position: 'relative', top: '-8px'}}>
                                            <LightTooltip title={lastDuelChampionship.weapon_primary}>
                                                <img src={weapon(lastDuelChampionship.weapon_primary)} style={{width:20}}/> 
                                            </LightTooltip>
                                            <LightTooltip title={lastDuelChampionship.weapon_secondary}>
                                                <img src={weapon(lastDuelChampionship.weapon_secondary)} style={{width:20}}/> 
                                            </LightTooltip>
                                        </Box>
                                    </Box>
                                </Box>
                                
                                <Box sx={{display:'flex', justifyContent:'center', position: 'relative', top:{lg:0, md:0, sm:0, xs:'-5px'}}}>
                                    <Box sx={{textAlign:'center', width:{lg:'40px', md:'40px', sm:'40px', xs:'20px'}}}>
                                        <Versus styles={{color:'white', width:'100%'}}/>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        display:'flex',
                                        flexDirection:{lg:'row', md:'row', sm:'row', xs:'row-reverse'},
                                        justifyContent:{lg:'center', md:'center', sm:'center', xs:'flex-start'},
                                        borderRadius: '5px',
                                        mr:{lg:0, md:0, sm:0, xs:'10px'},
                                        gap:'10px',
                                    }}
                                >
                                    <Box>
                                        <Avatar
                                            src={`https://cdn.discordapp.com/avatars/${lastDuelChampionship?.id_discord_opponent && lastDuelChampionship?.avatar_opponent ? lastDuelChampionship?.id_discord_opponent : '587052973637763073'}/${lastDuelChampionship?.avatar_opponent || 'a941105029ab60929857a517686baaeb'}`}
                                            sx={{ width: 32, height: 32 }}
                                        />
                                    </Box>
                                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: '22px'}}>
                                        <Box sx={{fontSize: {lg:'16px', md:'16px', sm:'16px', xs:'12px'}, wordBreak:'break-word', color:'rgb(255, 221, 204)'}}>
                                            {lastDuelChampionship.opponent}
                                        </Box>
                                        <Box sx={{position: 'relative', top: '-8px', display:'-webkit-box', justifyContent:'flex-end'}}>
                                            <LightTooltip title={lastDuelChampionship.weapon_primary_opponent}>
                                                <img src={weapon(lastDuelChampionship.weapon_primary_opponent)} style={{width:20}}/> 
                                            </LightTooltip>
                                            <LightTooltip title={lastDuelChampionship.weapon_secondary_opponent}>
                                                <img src={weapon(lastDuelChampionship.weapon_secondary_opponent)} style={{width:20}}/> 
                                            </LightTooltip>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            
                            <Box sx={{mt:2}}>
                                <YoutubeIframe videoId={lastDuelChampionship.link}/>
                            </Box>

                            <Box sx={{mt:2, fontSize:{lg:'14px', md:'14px', sm:'14px', xs:'12px'}}}>
                                Não deixe de assitir os jogos anteriores na nossa lista de reprodução
                            </Box>
                          
                            <Box sx={{mt:1, display:'flex', flexDirection:'row', alignItems:'center', fontSize:'18px'}}>
                                <Box onClick={() => window.open(lastDuelChampionship.link_championship)} sx={{cursor: 'pointer', display:'flex', alignItems:'center'}}>
                                    <PlaylistPlayIcon sx={{fontSize:'32px', color:'white', mr:1}}/>
                                    <Typography sx={{color:'white', fontSize:{lg:'14px', md:'14px', sm:'14px', xs:'15px'}}}>Todos os jogos no YouTube</Typography>
                                </Box>
                            </Box>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{backgroundColor:'#101820bd'}}>
                        <Button onClick={handleCloseModalLastDuelChampionship}>FECHAR</Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={modalCancel}
                    onClose={handleCloseModalCancel}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle sx={{backgroundColor:'#101820bd'}}>
                        Cancelar inscrição do Campeonato
                    </DialogTitle>
                    <DialogContent sx={{backgroundColor:'#101820bd'}}>
                        <DialogContentText id="alert-dialog-description">
                            Você será removido da lista de inscritos do campeonato atual, e não será sorteado para a competiação, aceitar remover sua inscrição?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{backgroundColor:'#101820bd'}}>
                        <Button onClick={handleCloseModalCancel}>CANCELAR</Button>
                        <Button onClick={handleCancel} autoFocus>
                            ACEITO
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={modalWeapon}
                    onClose={handleCloseModalWeapon}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth={true}
                    maxWidth={'sm'}
                >
                    <DialogTitle sx={{backgroundColor:'#101820bd', textAlign:'center'}}>
                        Equipamentos
                        <Typography sx={{fontSize:{lg:'16px', md:'16px', sm:'16px', xs:'12px'}}}>Só poderá alterar os equipamentos até 30 minutos antes do evento, ou caso a organização decida encerrar antes ou posterior o prazo.</Typography>
                    </DialogTitle>
                    <Weapons handleCloseModalWeapon={handleCloseModalWeapon}/>
                </Dialog>
            </div>
        </Box>
    );
};
