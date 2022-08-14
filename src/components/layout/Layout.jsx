import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import './layout.css'

import Sidebar from '../sidebar/Sidebar';
import MyRoutes from '../Routes'
import Topnav from '../topnav/Topnav';

const Layout = () => {
    return (
        
           <div className='layout'>
                <Sidebar/>
             <div className="layout__content">
                <Topnav/>
                <div className="layout__content-main">
                    <MyRoutes/>
                </div>
             </div>
         </div>
     
    )
}

export default Layout
