// style
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import {  darkMainColor } from '../../../styled/styled-comps/constants';
//
import React, { Component } from 'react';
import Hamburger from './../../Hamburger/Hamburger';
import { HeaderContainer, LogoHeader } from './Header.style';
//
class Header extends Component {
  myFunction = (x) => {
    x.classList.toggle("change");
  }
  render() {
    // console.log(props.classes);
    return (
      <HeaderContainer>
        <div className="left">
          <LogoHeader/>
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