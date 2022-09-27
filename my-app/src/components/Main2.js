import React, { Component } from 'react'
import { Films } from '../shared/ListOfFilms';
import FilmsPresentation from './FilmsPresentation'
export  class Main2 extends Component {
    constructor(){
        super();
            this.state = {
                phimp : Films
            };


    }
    render(){
        
         return<FilmsPresentation phimp = {this.state.phimp}/>        
    }
}
export default Main2
