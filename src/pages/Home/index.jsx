import React from 'react';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Accordion from '../../component/Accordion'
import Patron from '../../component/Patron';

import './index.css';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

const EnrollmentButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#cb7906',
    color:'white',
    width:'120px',
    '&:hover': {
      backgroundColor: '#ce973b',
    },
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
        content: `O bastão vital está desabilitado no momento, utilizar armas que não foram cadastras, ultrapassar limite da área estabelecida pela organização, manter-se em grupo durante o duelo e qualquer antijogo que impossibilita um confronto justo entre os competidores.`,
        rule: true
    },
];

export default () => {
    const handleTwitch = () => {
        window.open('https://www.twitch.tv/sinehtv');
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="relative" sx={{background:'transparent !important', boxShadow: 'none'}}>
                <Toolbar sx={{display:'flex', justifyContent: 'center'}}>
                    <Box
                        sx={{
                            maxWidth:{lg:'900px', md:'900px', sm:'450px', xs:'400px'},
                            display: 'flex',
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems: 'center', gap:1}}>
                            <Avatar src="./aeternum.png"/>
                            <Box sx={{width:'60px', lineHeight:'15px'}}>
                                    Arena Aeternum
                            </Box>
                        </Box>
                        <Box sx={{ display:'flex', justifyContent:'space-between'}}>
                            <Link to="/cadastrar">
                                <EnrollmentButton fullWidth>ALISTAR-SE</EnrollmentButton>
                            </Link>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    paddingLeft: 3,
                    paddingRight: 3
                }}
            >   
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                    }}
                >
                    <Box
                        sx={{
                            maxWidth:{lg:'900px', md:'900px', sm:'450px', xs:'400px'},
                            width:'100%',
                            display:'flex',
                            flexDirection:{lg:'row', md:'row', sm:'column', xs:'column'},
                            color:'white',
                            justifyContent:'space-between',
                            gap:{lg:'10px', md:'10px', sm:'50px', xs:'80px'}
                        }}
                    >
                        <Box>
                            <Box sx={{fontWeight:'bold', fontSize:'32px'}}>CAMPEONATOS ORGANIZADOS</Box>
                            <Box sx={{fontWeight:'bold', fontSize:'32px'}}>& COMPETITIVOS</Box>
                            <Box sx={{maxWidth:'500px'}}>
                                Todos os registros e estatísticas do Campeonato serão salvos e compartilhados com a comunidade, assim iremos manter um ranqueamento entre os competidores e posteriormente criando o "Invitation", uma liga mais competitiva com mais recompensas e com os melhores jogadores selecionados de acordo com suas estatísticas dos campeonatos.
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                            <Box className="nw" sx={{height:'400px', width:'450px'}}/>
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
                            // alignItems:'center',
                            gap:{lg:'10px', md:'10px', sm:'20px', xs:'20px'},
                        }}
                    >
                        <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:{lg:'row', md:'row', sm:'row', xs:'column'}, gap:{lg:'10px', md:'10px', sm:'20px', xs:'20px'}}}>
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
                                <Box sx={{fontSize:'12px'}}>Artorious</Box>
                            </Box>
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
                                <Box sx={{fontSize:'12px'}}>15 de Janeiro de 2023</Box>
                                <Box sx={{fontSize:'12px'}}>Domingo Às 17:30</Box>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:{lg:'row', md:'row', sm:'row', xs:'column'}, gap:{lg:'10px', md:'10px', sm:'20px', xs:'20px'}}}>
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
                                <Box sx={{display:'flex', flexDirection:"row", justifyContent:'space-around', alignItems:'center'}}>
                                    <Box className="gold" sx={{height:'30px', width:'30px'}}/>
                                    <Typography align='center' sx={{fontSize:'18px'}}>150.000,00</Typography>
                                </Box>
                            </Box>
                            
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

                    <Box 
                        sx={{
                            mb:{lg:10, md:10, sm:10, xs:15},
                            display:'flex',
                            height:'200px',
                            flexDirection:{lg:'row', md:'row', sm:'column', xs:'column'},
                            color:'white',
                            justifyContent:'flex-end',
                            gap:{lg:'2vw', md:'2vw', sm:'4vw', xs:'4vw'},
                        }}
                    >
                        <Patron justifyContent={'flex-end'}/>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};
