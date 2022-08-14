import React from 'react'
import {Link} from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'
import ThemeMenu from '../thememenu/ThemeMenu'

import notifications from '../../assets/JsonData/notification.json'
import user_menu from '../../assets/JsonData/user_menus.json';
import user_image from '../../assets/images/profile.png';

import './topnav.css'

const current_user= 
{
  display_name:'Robel Gebrehiwot',
  image: user_image
}

const displayUserToggle= (user)=>
{
  return(
    <div className='topnav_right-user'>
      <div className='topnav_right-user_image'>
        <img src={user.image}/>
      </div>
    </div>

  )
}

const notificationItem = (item,index)=>
{
 
  return(
      <div className='notification-item' key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
  )

}

const displayUserMenu=(item,index)=>
{
  return(
    <Link to='/' key={index}>
       <div className='notification-item'>
          <i className={item.icon}></i>
          <span>{item.content}</span>
       </div>
    </Link>
  )
}

const Topnav = () => {

 

  return (
    <div className='topnav'>
        <div className='topnav_search'>
            <input type='text' placeholder='search here' />
             <i className='bx bx-search'></i>
        </div>
        <div className='topnav_right'>
          <div className='topnav_right-item'>
             <Dropdown
                  customToggle={()=> displayUserToggle(current_user)}
                  contentData={user_menu}
                  renderItems={(item, index) => displayUserMenu(item, index)}
                  />
          </div> 
          
          <div className='topnav_right-item'>
             <Dropdown
                   icon='bx bx-bell'
                   badge='12'
                   contentData={notifications}
                   renderItems={(item, index) => notificationItem(item, index)}
                   renderFooter={() => <Link to='/'>View All</Link>}
                   />
                  
          </div>

          <div className='topnav_right-item'>
             <Dropdown/>
          </div>

          <div className="topnav_right-item">
              <ThemeMenu/>
          </div>
        </div>
    </div>
  )
}

export default Topnav
