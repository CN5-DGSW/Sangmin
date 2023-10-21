import React from 'react'
import Login from './Login'
import Member from './Member'

import {BrowserRouter,Routes,Route} from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Login />
      <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Member' element={<Member />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;