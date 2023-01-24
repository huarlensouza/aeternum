import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.REACT_APP_URL}/api`
});

export default {
    AuthDiscord: async(code) => {
        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_URL}/api/auth/discord`,
            headers: { 
                'Content-Type': 'application/json'
            },
            data:{code:code}
        };
        
        return axios(config)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });
    },
    getAuthDiscord: async() => {
        return api.get('/auth/discord')
        .then(response => {
            return response;
        }).catch((err) =>{
            return err.response;
        })
    },
    setUser: async(data) =>{
        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_URL}/api/formulario`,
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };
        
        return axios(config)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });
    },
    getRanking: async() => {
        return api.get('/ranking')
        .then(response => {
            return response;
        }).catch((err) =>{
            return err.response;
        })
    },
    getLastChampion: async() => {
        return api.get('/last-champion')
        .then(response => {
            return response;
        }).catch((err) =>{
            return err.response;
        })
    },
    validToken: async(token, refresh_token) => {
        return api.post('/valid-token',
            {
                token:token,
                refresh_token:refresh_token
            }
        )
        .then(response => {
            return response;
        }).catch((err) =>{
            return err.response;
        })
    },
    getChampionship: async() => {
        return api.get('/championship')
        .then(response => {
            return response;
        }).catch((err) =>{
            return err.response;
        })
    },
    deleteEnrollment: async(id_discord, access_token) => {
        return api.delete('/enrollment',
            {
                data:{
                    id_discord:id_discord,
                    access_token:access_token
                }
            }
        )
        .then(response => {
            return response;
        }).catch((err) =>{
            return err.response;
        })
    },
    updateEnrollment: async(data) =>{
        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_URL}/api/enrollment`,
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };
        
        return axios(config)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });
    },
    getRankingIndividual: async(id_discord) =>{
        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_URL}/api/ranking-individual`,
            headers: { 
                'Content-Type': 'application/json'
            },
            data : {id_discord:id_discord}
        };
        
        return axios(config)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });
    },
}
