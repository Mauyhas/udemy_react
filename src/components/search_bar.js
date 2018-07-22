import React, { Component } from 'react';
//es6 class js object with prop and methods
//plain js
//every react class must have a render function
//to render jsx
class SearchBar extends React.Component{
    //state - plain js object that 
    //every state change - a component will rerender & all children as well
    //constructor - the only function that called first
    //
    constructor(props){
        super(props); // calling parent method
        //create new object
        this.state = { term:'' };
    }
    //render method
    //controlled component - has its value set by state
    //controlled element - 
    render(){
        return (
        <div>
            <input value = {this.state.term}
            onChange ={event => this.setState({term: event.target.value})} 
            />
        </div>
        
        )
    }
    
}

export default SearchBar;
