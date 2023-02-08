import React from 'react';
import '../Styles/Nav.css';

const Nav = ()=>{
  return(
    <div className='nav_bar'>
      <div className='nav_left'>
        <div className='nav_logo'>
          <img 
            className="facebook_logo"
            src="https://i.ibb.co/D41z0K6/Facebook-logo.png" 
            alt="Facebook-logo"
          />
        </div>
        <div className='nav_search_box'>
          <input type='text' placeholder='Search Here'/>
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className='nav_canter'>
        <div className='nav_canter_logo'>
          <i class="fas fa-home"></i>
          
        </div>
      </div>
    </div>
  )
}
export default Nav;