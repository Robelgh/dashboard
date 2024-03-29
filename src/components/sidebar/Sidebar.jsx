import React from 'react'

import { Link,useLocation } from 'react-router-dom'

import './sidebar.css'

import logo from '../../assets/images/wegahta.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

const SidebarItem = props => {

    

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
              <div className=''>
                 <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
              </div>     
            </div>
        </div>
    )
}

const Sidebar = () => {

    const activeItem =  useLocation().pathname;

    return (
       
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
