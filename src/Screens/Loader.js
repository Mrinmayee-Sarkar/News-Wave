import React, { Component } from 'react'
import loading from '../Images/loader.gif'

export default class Loader extends Component {
  render() {
    return (
      <div style={{position:'fixed',left: '0px', top: "500px", width: "100%", height: "100%", zIndex:'9999'}}>
        <img src={loading} alt='loading'></img>
      </div>
    )
  }
}
