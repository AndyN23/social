// import logo from './logo.svg';
// design social network --- https://dribbble.com/shots/15327109-Social-Network-Web-Concept/attachments/7085257?mode=media
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllPosts from './components/AllPosts/AllPosts';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NavbarLeft from './components/NavbarLeft/NavbarLeft';
import NavbarRight from './components/NavbarRight/NavbarRight';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <NavbarLeft/>
        <NavbarRight/>
        <div className='App-content'>
          <Routes>
              <Route  path ="/news" element ={<AllPosts/>}/>
              <Route  path ="/dialogs" element ={<Dialogs/>}/>
              <Route  path ="/"  element={<Home/>}/>
          </Routes>
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
