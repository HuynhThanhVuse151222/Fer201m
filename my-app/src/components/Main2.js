import React, { Component } from 'react'
import { Films } from '../shared/ListOfFilms';
import FilmsPresentation from './FilmsPresentation'
import Films1 from '../Films';
export  class Main2 extends Component {
    constructor(){
        super();
            this.state = {
                phimp : Films
            };


    }
    render(){
        
         return<Films1 phimp = {this.state.phimp}/>        
    }
}
export default Main2
