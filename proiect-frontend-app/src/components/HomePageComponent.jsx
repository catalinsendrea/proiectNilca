import React, { Component } from 'react';
import JsonServerService from '../services/JsonServerService';
import PostgreSQLServerService from '../services/PostgreSQLServerService';

class HomePageComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            playersPostgreSQLServer: [],
            teamsPostgreSQLServer: [],
            playersJsonServer: [],
            teamsJsonServer: [],
            id:'',
            name:'',
            age:'',
            weight:'',
            teamId:'',
        }

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeWeightHandler = this.changeWeightHandler.bind(this);
        this.changeTeamIdHandler = this.changeTeamIdHandler.bind(this);

        this.Buton1 = this.Buton1.bind(this);
        this.Buton2 = this.Buton2.bind(this);
        this.Buton3 = this.Buton3.bind(this);
    }


    changeIdHandler = (event) => {
        this.setState({id: event.target.value});
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeAgeHandler = (event) => {
        this.setState({age: event.target.value});
    }

    changeWeightHandler = (event) => {
        this.setState({weight: event.target.value});
    }

    changeTeamIdHandler = (event) => {
        this.setState({teamId: event.target.value});
    }


    Buton1 = (x) => {
        x.preventDefault();

        //=========== PRELUAM DATELE FORMULARULUI ==========//
        let player = {
            id : this.state.id,
            name: this.state.name,
            age: this.state.age,
            weight: this.state.weight,
            teams: [
                {
                    id: this.state.teamId
                }
            ]
        };


        //========== INSERAM DATELE FORMULARULUI IN SV1 ========//
        PostgreSQLServerService.insertPlayer(player).then(_ => {
        });


        this.setState({id: ''});
        this.setState({name: ''});
        this.setState({age: ''});
        this.setState({weight: ''});
        this.setState({teamId: ''});

        window.location.reload();
    }


    Buton2 = async () => {

        //========= PRELUAM DATELE AFISATE SI LE INSERAM IN SERVER 2 =======// 
        await this.state.teamsPostgreSQLServer.forEach(team => {
            JsonServerService.insertTeam(team).then(_ => {
            });
        });

        await this.state.playersPostgreSQLServer.forEach(player => {
            JsonServerService.insertPlayer(player).then(_ => {
            });
        });


        //========= PRELUAM DATELE DIN SERVER 2 =======// 
        await JsonServerService.getTeams().then((res) => {
            this.setState({ teamsJsonServer: res.data})
        });

        await JsonServerService.getPlayers().then((res) => {
            this.setState({ playersJsonServer: res.data})
        });
    }

    Buton3 = () => {
        console.log("Merbe")
    }


    componentDidMount(){
        PostgreSQLServerService.getPlayers().then((res) => {
            this.setState({ playersPostgreSQLServer: res.data})
        });

        PostgreSQLServerService.getTeams().then((res) => {
            this.setState({ teamsPostgreSQLServer: res.data})
        });
    }


    render() {
        return (
            <div>
                <div className="container">
                    <h1 className='title-wrapper'>Proiect</h1>

                    <h3 style={{marginBottom:"20px"}}>Server 1 - PostgreSQL Server</h3>

                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style={{marginTop:"10px"}}>Insereaza jucator</h3> 
                            <div className = "card-body">
                                <form>
                                    <div className ="form-group">
                                        <label>Id: </label>
                                        <input name ="Id" className="form-control"
                                            value={this.state.id} onChange={this.changeIdHandler}/>
                                    </div>

                                    <div className ="form-group">
                                        <label>Name: </label>
                                        <input name ="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>

                                    <div className ="form-group">
                                        <label>Age: </label>
                                        <input name ="age" className="form-control"
                                            value={this.state.age} onChange={this.changeAgeHandler}/>
                                    </div>

                                    <div className ="form-group">
                                        <label>Weight: </label>
                                        <input name ="weight" className="form-control"
                                            value={this.state.weight} onChange={this.changeWeightHandler}/>
                                    </div>

                                    <div className ="form-group">
                                        <label>TeamId: </label>
                                        <input name ="TeamId" className="form-control"
                                            value={this.state.teamId} onChange={this.changeTeamIdHandler}/>
                                    </div>
                                </form>
                            </div>

                            <button className = "btn btn-secondary btn-block insert-button" onClick={this.Buton1}>BUTON 1</button>
                        </div>
                    </div>

                   
                    <h3 className='table-title-wrapper'>Tabel Date</h3>
                    <div className = "row">
                        <table className = "table table-striped table-bordered">
                            
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Weight</th>
                                    <th>Teams Names</th>
                                    <th>Teams Countries</th>
                                    <th>Teams Players Age Average</th>
                                </tr>
                            </thead>

                            <tbody>
                            {
                                    this.state.playersPostgreSQLServer.map(
                                        player => 
                                        <tr key = {player.id}>
                                            <td>{player.id}</td>
                                            <td>{player.name}</td>
                                            <td>{player.age}</td>
                                            <td>{player.weight}</td>
                                            <td>{player.teams.map(team => team.name + " , ")}</td>
                                            <td>{player.teams.map(team => team.country + " , ")}</td>
                                            <td>{player.teams.map(team => team.players_age_average + " , ")}</td>
                                        </tr>
                                    )
                            }
                            </tbody>
                        </table>
                    </div>


                    <h3 style={{marginTop:"30px"}}>Server 2 - JSON Server</h3>       

                    <button className = " btn btn-info button-wrapper" onClick={this.Buton2} >BUTON 2</button>

                    <h3 className='table-title-wrapper'>Tabel Date</h3>
                    <div className = "row">
                        <table className = "table table-striped table-bordered">
                            
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Weight</th>
                                    <th>Teams Names</th>
                                    <th>Teams Countries</th>
                                    <th>Teams Players Age Average</th>
                                </tr>
                            </thead>

                            <tbody>
                            {
                                    this.state.playersJsonServer.map(
                                        player => 
                                        <tr key = {player.id}>
                                            <td>{player.id}</td>
                                            <td>{player.name}</td>
                                            <td>{player.age}</td>
                                            <td>{player.weight}</td>
                                            <td>{player.teams.map(team => team.name + " , ")}</td>
                                            <td>{player.teams.map(team => team.country + " , ")}</td>
                                            <td>{player.teams.map(team => team.players_age_average + " , ")}</td>
                                        </tr>
                                    )
                            }
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{marginTop:"30px"}}>Server 3 - JSON GraphQL Server</h3>       

                    <button className = " btn btn-info button-wrapper" onClick={this.Buton3} >BUTON 3</button>
                </div>
            </div>
        );
    }
}
  
export default HomePageComponent;


