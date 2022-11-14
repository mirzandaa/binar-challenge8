import React, { Component } from 'react'

import './App.css';

// import NavigationBar from './components/NavigationBar';
import CreateFormPlayer from './components/CreateFormPlayer';
import TablePlayer from './components/TablePlayer';

class App extends Component {

 constructor(props) {
   super(props)
   this.state = {
      player: [],
      username: "",
      email: "",
      exp: 0,
      lvl: 0
    }
 }

  

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if(this.state.id === "" ) {
      this.setState({
        player: [
          ...this.state.player,
          {
            id: this.state.player.length + 1,
            username: this.state.username,
            email: this.state.email,
            exp: this.state.exp,
            lvl: this.state.lvl
          }
        ]
      })
    } else {
      const notChosenPlayer = this.state.player.filter((player) => {
        return player.id !== this.state.id
      }).map((filterPlayer) => {
        return filterPlayer
      })
     
     this.setState({
       player: [
         ...notChosenPlayer,
         {
           id: this.state.player.length + 1,
           username: this.state.username,
           email: this.state.email,
           exp: this.state.exp,
           lvl: this.state.lvl
         }
       ]
     })
    }
    this.setState({
      username: "",
      email: "",
      exp: 0,
      lvl: 0
    })
  }

  handleEdit = (id) => {
    const chosenPlayer = this.state.player
     .filter((player) => player.id === id)
     .map((filterPlayer) => {
       return filterPlayer
     })

     this.setState({
      id: chosenPlayer[0].id,
      username: chosenPlayer[0].username,
      email: chosenPlayer[0].email,
      exp: chosenPlayer[0].exp,
      lvl: chosenPlayer[0].lvl
     })
  }



  render() {
    return (
      <>
      <div className='App-header'>
        {/* <NavigationBar  /> */}
        <CreateFormPlayer {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <br />
        <TablePlayer player={this.state.player} handleEdit={this.handleEdit}/> 
      </div>
      </>
    )
  }
}

export default App;
