import React, { useEffect } from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import api from '../../api';

import { useAuth } from '../../context/index';

export default ({handleCloseModalWeapon}) => {
    const { user, handleReload } = useAuth();

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
    const [primary, setPrimary] = React.useState(user.enrollment.weapon_primary);
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
    const [secondary, setSecondary] = React.useState(user.enrollment.weapon_secondary)
    const [secondaryError, setSecondaryError] = React.useState(false);

    const [restrictedWeapon, setRestrictedWeapon] = React.useState([]);
    const [modalRestrictedWeapon, setModalRestrictedWeapon] = React.useState(false);
    
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

    const handleWeapon = async() => {
        const data = {
            nickname:user.user.nickname,
            id_register:user.enrollment.id_register,
            id_discord:user.discord.id,
            weapon_primary:primary,
            weapon_secondary:secondary,
            access_token: user.access_token,
            avatar:user.discord.avatar
        };

        await api.updateEnrollment(data);

        handleReload();
    };

    const handleCloseModalRestrictedWeapon = () => setModalRestrictedWeapon(false);

    return (
        <>
            <DialogContent sx={{backgroundColor:'#101820bd'}}>
                <DialogContentText>
                    <Box sx={{mt:2, display:'flex', flexDirection:{lg:'row', md:'row', sm:'row', xs:'column'}, justifyContent:'space-between'}}>
                        <FormControl variant="standard" sx={{width:{lg:'48%', md:'48%', sm:'48%', xs:'100%'}}} size="small">
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
                        <FormControl variant="standard" sx={{width:{lg:'48%', md:'48%', sm:'48%', xs:'100%'}, mt:{lg:0, md:0, sm:0, xs:'12px'}}} size="small">
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
                </DialogContentText>
                <DialogActions  sx={{mt:2}}>
                    <Button onClick={handleCloseModalWeapon}>CANCELAR</Button>
                    <Button onClick={handleWeapon}>
                        ACEITO
                    </Button>
                </DialogActions>
            </DialogContent>
            <Dialog
                open={modalRestrictedWeapon}
                onClose={handleCloseModalRestrictedWeapon}
            >
                <DialogTitle sx={{backgroundColor:'#101820bd'}}>
                    {restrictedWeapon.weapon}
                </DialogTitle>
                <DialogContent sx={{backgroundColor:'#101820bd'}}>
                    <DialogContentText id="alert-dialog-description">
                        {restrictedWeapon.message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{backgroundColor:'#101820bd'}}>
                    <Button onClick={handleCloseModalRestrictedWeapon}>FECHAR</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};