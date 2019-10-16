import './Header.scss';
import React, { Component } from 'react';
// import { withStyles } from '@material-ui/styles';
import { HeaderContainer, LogoHeader } from './Header.style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
class Header extends Component {
  myFunction = (x) => {
    x.classList.toggle("change");
  }
  render() {
    // console.log(props.classes);
    return (
      <HeaderContainer>
        <div className="left">
          <LogoHeader> LOGO </LogoHeader>
          <FontAwesomeIcon 
            className="icon"
            icon={faUser} 
            size="1x" 
            style={{ color: 'rgb(146, 234, 252)', marginRight: '1.5rem'}}
            />
        </div>

        <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>
            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>
            <div class="navigation__background">&nbsp;</div>
            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>01</span>About Natous</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span>Your benfits</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span>Popular tours</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>Stories</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>05</span>Book now</a></li>
                    </ul>
            </nav>
        </div>
      </HeaderContainer>
    );
  }
}

export default Header;