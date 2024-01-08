import { useState } from 'react'
import ButtonAppBar from './components/navber/navber'
import TemporaryDrawer from './components/sidebar/sidebar'
import Logout from './components/logout/logout'
import Home from './components/home/home'
import Profile from './components/profile/profile'

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <Router>
   <div>
    <ButtonAppBar></ButtonAppBar>
    <Routes>
       <Route path='/logout' element={<Logout/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/profile' element={<Profile/>}></Route>
    </Routes>   
   </div>
   </Router>
  )
}

export default App
