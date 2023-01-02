import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.REACT_APP_URL}/api`
});

export default {
    AuthDiscord: async(code) => {
        return api.post('/auth/discord', {
            data:{code:code}
        })
        .then(response => {
            return response;
        }).catch((err) =>{
            return err.response;
        })
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
    }
}
