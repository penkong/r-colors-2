// style
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { HeaderContainer, LogoHeader } from './Header.style';
//
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './../../Hamburger/Hamburger';
//
class Header extends Component {

  render() {
    // console.log(props.classes);
    return (
      <HeaderContainer>
        <div className="left">
          <LogoHeader>
            <NavLink to="/">
              <img src="" alt="logo-header"/>
            </NavLink>
          </LogoHeader>
          <FontAwesomeIcon 
            icon={faPlayCircle} 
            size="3x" 
            style={{ color: 'white', marginRight: '1rem', cursor: 'pointer'}}
          />
        </div>
        <Hamburger/>
      </HeaderContainer>
    );
  }
}

export default Header;