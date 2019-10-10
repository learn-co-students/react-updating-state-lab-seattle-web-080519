// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component{

    constructor(){
        super();
        this.state = {
            timesClicked: 0
        };
    }

    // plusss(){
    //     console.log(1+2)
    // }

    handleClick (event) {
        // console.log(this.state)
        this.setState({timesClicked: this.state.timesClicked+1});
    }

    render () {
        return (<div><button onClick={(event) => this.handleClick(event)}>{this.state.timesClicked}</button><br/></div>);
    }
}