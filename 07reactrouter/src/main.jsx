import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import GitHub, { githubInfoLoader } from './components/GitHub/GitHub.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' Component={Layout}>
      <Route path='' Component={Home}/>
      <Route path='about' Component={AboutUs}/>
      <Route path='contact' Component={Contact}/>
      <Route path='user/' Component={User}>
        <Route path=':userId' Component={User}/>
      </Route>
      <Route path='gitHub' loader={githubInfoLoader} Component={GitHub}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
