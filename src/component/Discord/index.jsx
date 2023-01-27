import React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';

import discord_first from '../../assets/discord1.png';
import discord_second from '../../assets/discord2.png';

export default ({open, handleCloseVerified}) => {
    const handleDiscord = () => {
        window.open('https://support.discord.com/hc/pt-br/articles/213219267-Reenviando-o-Email-de-Verifica%C3%A7%C3%A3o', '_blank')
    };

    return (
        <Dialog
            open={open}
            onClose={handleCloseVerified}
            scroll={'paper'}
        >
            <DialogTitle id="scroll-dialog-title">
                Discord não confirmado
            </DialogTitle>
            <DialogContent dividers={true} sx={{paddingTop:2, paddingBottom:2, paddingLeft:1, paddingRight: 1}}>
                <DialogContentText component="span">
                    <div>
                        <div>
                            <span style={{fontSize:'0.8rem'}}>Você foi levado(a) em uma jornada mágica assim que se inscreveu no Discord? Você foi chamado(a) para o serviço assim que o e-mail de verificação foi enviado, e agora ele expirou, não deixando nenhuma esperança para os vivos? Ou a vida real apenas te alcançou e te distraiu por esses poucos dias</span>?
                        </div>
                        <p>
                            <em>
                                <span style={{fontSize:'0.8rem'}}>Espada, escudo e elmo- tudo incluído</span>!
                            </em>
                        </p>
                        <p>
                            <span style={{fontSize:'0.8rem'}}>Não tenha medo. Lhe demos o poder de reenviar o e-mail de verificação, e tudo o que você precisa fazer é explorar esse poço gigante de potencial.</span>
                        </p>
                        <h1 style={{fontSize:'1rem'}}>ESSES PASSOS SÃO SIMPLES!</h1>
                        <ol>
                            <ol>
                                <li style={{fontSize:'0.8rem'}}>Abra as Configurações de Usuário!</li>
                            </ol>
                        </ol>
                        <p style={{fontSize:'0.8rem'}}>Basta clicar nas Configurações de Usuário ao lado do seu avatar.&nbsp;</p>
                        <Box>
                            <Avatar
                                variant="square"
                                sx={{
                                    width:'230px',
                                    height:'141px',
                                }}
                                src={discord_first}
                            />
                        </Box>
                        <ol>
                            <ol>
                                <li style={{fontSize:'0.8rem'}}><span>Clique no link</span>!</li>
                            </ol>
                        </ol>
                        <p style={{fontSize:'0.8rem'}}>Você verá uma caixa amarela na parte superior da <strong>guia Minha Conta</strong> na página Configurações de usuário. As palavras "<strong>Reenviar e-mail de verificação</strong>" ficarão em negrito, e clicar nelas e enviará o e-mail novamente!</p>
                        <Box>
                            <Avatar
                                variant="square"
                                sx={{
                                    width: '100%',
                                    height:'250px',
                                }}
                                src={discord_second}
                            />
                        </Box>
                        <h3 style={{fontSize:'1rem'}}>Isso é tudo! Basta clicar no link de verificação no e-mail, pronto e agora só tentar novamente.</h3>
                        <Box>
                            <span>Fonte: </span>
                            <span style={{color:'#6180ed', cursor:'pointer'}} onClick={() => handleDiscord()}>
                                https://support.discord.com/hc/pt-br/articles/213219267-Reenviando-o-Email-de-Verifica%C3%A7%C3%A3o
                            </span>
                        </Box>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseVerified} variant="text">FECHAR</Button>
            </DialogActions>
        </Dialog>
    );
};