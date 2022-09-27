import React, { Component } from 'react'
// import PlayersPresentation from './PlayersPresentation';
import { Players } from '../shared/ListOfPlayers';
import Players1 from '../Players';
export  class Main extends Component {
    constructor(){
        super();
            this.state = {
                players : Players
            };  


    }
    render(){
        
         return<Players1 players = {this.state.players}/>        
    }
}
export default Main
