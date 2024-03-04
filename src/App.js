import Navbar from './Screens/Navbar'
import React, { Component } from 'react'
import News from './Screens/News'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router basename="/News-Wave">
        <Navbar>
        </Navbar>
          <Routes>
           <Route exact element={<News key="general" country="in" category="general" />} path='/'/>
           <Route exact element={<News key="sports" country="in" category="sports" />} path='/sports'/>
           <Route exact element={<News key="business" country="in" category="business" />} path='/business'/>
           <Route exact element={<News key="entertainment" country="in" category="entertainment" />} path='/entertainment'/>
           <Route exact element={<News key="health" country="in" category="health" />} path='/health'/>
           <Route exact element={<News key="science" country="in" category="science" />} path='/science'/>
           <Route exact element={<News key="technology" country="in" category="technology" />} path='/technology'/>
          </Routes>
        </Router>
      </div>
    )
  }
}

