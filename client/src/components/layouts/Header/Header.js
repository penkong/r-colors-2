import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
//
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
            style={{ color: 'rgb(0, 136, 136)', marginRight: '1.5rem', cursor: 'pointer'}}
          />
        </div>
        <Hamburger/>
      </HeaderContainer>
    );
  }
}

export default Header;