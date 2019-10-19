// style
import '../../styled/scss/components/Hamburger.scss'
//
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Hamburger extends Component {
  render() {
    return (
      <div className="navigation">
          <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <NavLink to="/" className="navigation__link" activeClassName="active">Home</NavLink>
              </li>
              <li className="navigation__item"><NavLink to="/" className="navigation__link">Your</NavLink></li>
              <li className="navigation__item"><NavLink to="/" className="navigation__link">Popular</NavLink></li>
              <li className="navigation__item"><NavLink to="/" className="navigation__link">Stories</NavLink></li>
              <li className="navigation__item"><NavLink to="/" className="navigation__link">Book now</NavLink></li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default Hamburger;