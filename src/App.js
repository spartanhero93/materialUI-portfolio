import React, { Component } from 'react'
import Navbar from './Components/navbar/NavBar'
import BottomNav from './Components/bottomNavbar/BottomNav'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <BottomNav />
      </div>
    )
  }
}

export default App
