import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './app.scss'
import Login from './pages/auth/Login'
import Detail from './pages/detail/Detail'
import Home from './pages/home/Home'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { userState } from './components/atom/UserAtom'



function App() {
  const user = useRecoilValue(userState)
  return (
    <div className='app'>
      <Router>
        <Routes>
          {user.email ?
            <>
              <Route path='/users' element={<Home />} />
              <Route path='/users/:id' element={<Detail />} />
              <Route path='*' element={<Home />} />

            </>
            :
            <>
              <Route path='/' element={<Login />} />
              <Route path='*' element={<Login />} />

            </>

          }
        </Routes>
      </Router>
    </div >
  )
}

export default App