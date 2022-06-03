import axios from 'axios';

const API_URL = "http://localhost:8081/";

const getPlayers = () =>{
    return axios.get(API_URL + "players");
}

const getTeams = () =>{
    return axios.get(API_URL + "teams");
}

const insertPlayer = (player) => {
    return axios.post(API_URL + "players", player);
}

const insertTeam = (team) => {
    return axios.post(API_URL + "teams", team);
}

const PostgreSQLServerService = {
    getPlayers,
    getTeams,
    insertPlayer,
    insertTeam,
};

export default PostgreSQLServerService;