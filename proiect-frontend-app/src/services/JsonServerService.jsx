import axios from 'axios';

const API_URL = "http://localhost:3005/";

const getTeams = () =>{
    return axios.get(API_URL + "teams");
}

const getPlayers = () =>{
    return axios.get(API_URL + "players");
}

const insertPlayer = (player) => {
    return axios.post(API_URL + "players", player);
}

const insertTeam = (team) => {
    return axios.post(API_URL + "teams", team);
}


const JsonServerService = {
    getTeams,
    getPlayers,
    insertPlayer,
    insertTeam,
};

export default JsonServerService;