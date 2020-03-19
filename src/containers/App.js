import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots : [],
      searchfield : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
      return response.json();
    })
    .then((users) => {
      this.setState({robots: users})
    })
  }

  onsearchchange = (event) => {
    this.setState({searchfield : event.target.value })
  }

  render() {
    const filteredrobots = this.state.robots.filter((robot) => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      }
    )
    if (this.state.robots.length === 0) {
      return <h1>Loading </h1>
    } 
    else {
  	 return (
  		 <div className = 'tc'>
    			<h1 className= 'f1'> RoboFriends </h1>
    		  <SearchBox searchchange = {this.onsearchchange} />
          <Scroll>
    			 <Cardlist robots = {filteredrobots} />
  		    </Scroll>
       </div>
  	 );
    }
  }
}

export default App;