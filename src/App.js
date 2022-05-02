import React from "react";
// import styled from "styled-components";
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/home';
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div>
        <Routes>
              <Route path="/" element={<Home/>} />
       </Routes>           
    </div>
  );
}

// const Div = styled.div`
//   position: relative;
// `;
