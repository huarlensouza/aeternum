import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import api from '../../api';
import { useAuth } from '../../context/index';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

const EnrollmentButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#cb7906',
    color:'white',
    '&:hover': {
      backgroundColor: '#ce973b',
    },
}));

const pages = [
    {
        name:"Página Inicial",
        link:"/"
    },
    {
        name:"Classificação",
        link:"/classificacao"
    }
];


export default () => {
    const { signed, user, Logout, championship } = useAuth();
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleGetAuthDiscord = async() => {
        const response = await api.getAuthDiscord();
        window.location.replace(response.data);
    };

    const handleNavigate = (page) => {
        navigate(page)
        setAnchorElNav(null);
    };

    const handleLogout = () => {
        console.log('sair')
        Logout();
        setAnchorElUser(null);
    }

    return (
        <AppBar position="static" sx={{background:'transparent !important', boxShadow: 'none'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{mt:1}}>
                    <Box sx={{display:{lg:'flex', md:'flex', sm:'flex', xs:'none'} , mr:5}}>
                        <Avatar src="./aeternum.png" sx={{ width: 100, height: 100 }}/>
                    </Box>
                    
                    <Box sx={{flexGrow: 1, display: {lg:'none', md:'none', sm:'none', xs:'flex'} }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                        {pages.map((page) => (
                            <MenuItem key={page.name} onClick={() => handleNavigate(page.link)}>
                            <Typography textAlign="center">{page.name}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>

                    <Box sx={{flexGrow: 1,display:{lg:'none', md:'none', sm:'none', xs:'flex'}}}>
                        <Avatar src="./aeternum.png" sx={{ width: 100, height: 100 }}/>
                    </Box>

                    <Box sx={{flexGrow: 1, display: {lg:'flex', md:'flex', sm:'flex', xs:'none'} }}>
                   
                            <Button onClick={() => handleNavigate('/')} sx={{ my: 2, color: 'white', display: 'block' }}>
                                Página Inicial
                            </Button>
                            <Button onClick={() => handleNavigate('/classificacao')} sx={{ my: 2, color: 'white', display: 'block' }}>
                                Classificação
                            </Button>
                            {signed && !user.enrollment && championship.register == 1 &&
                                <Button onClick={() => handleNavigate('/cadastrar')} sx={{ my: 2, color: 'white', display: 'block' }}>
                                    Cadastrar
                                </Button>
                            }
               
                    </Box>
                    
                    {signed
                        ?
                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={`https://cdn.discordapp.com/avatars/${user.discord?.avatar ? user.discord?.id : '587052973637763073'}/${user.discord?.avatar || 'a941105029ab60929857a517686baaeb'}`} />
                            </IconButton>
                           
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >

                                <MenuItem onClick={handleLogout}>
                                    <Typography textAlign="center">SAIR</Typography>
                                </MenuItem>

                            </Menu>
                        </Box>
                        :
                        <Box sx={{ flexGrow: 0 }}>
                            <EnrollmentButton onClick={handleGetAuthDiscord} fullWidth>ENTRAR</EnrollmentButton>
                        </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    )
}