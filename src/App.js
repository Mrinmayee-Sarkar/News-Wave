import Navbar from './Screens/Navbar'
import React, { Component } from 'react'
import News from './Screens/News'

export default class App extends Component {
  render() {
    return (
      <div>
       <Navbar></Navbar>
       <News ></News>
      </div>
    )
  }
}

