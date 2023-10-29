import React from 'react'
import Login from './Login'
import Member from './Member'
import Teacher from './Teacher'

import {BrowserRouter,Routes,Route} from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Member' element={<Member />} />
          <Route path='/Teacher' element={<Teacher />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;