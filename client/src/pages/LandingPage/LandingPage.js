// style
import {
  LandingPageContainer,
  TextBoxContainer,
  ButtonContainer,
  Button,
  BigButton,
  HeadText
} from './LandingPage.style';
//
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TablePrice from '../../components/TablePrice/TablePrice';

class LandingPage extends Component {
  state = {
    width: null
  }
  onWidth = () => {
    const width = window.innerWidth;
    this.setState({ width : width });
    console.log(this.state.width);
  }
  render() {
    return (
      <LandingPageContainer>

        <ButtonContainer>
          <HeadText>
            <p style={{fontSize: '1.5rem'}}>one sight</p>
            <p style={{fontSize: '0.75rem', color: 'grey'}}>one moment</p>
          </HeadText>
          <Button>
            <NavLink to="/sign"> Signup / Login</NavLink>
          </Button>
        </ButtonContainer>
        
        <TablePrice/>

        <TextBoxContainer/>

        <ButtonContainer>
          <BigButton>
            <NavLink to="/sign">
              And so much more ... Click!
            </NavLink>
          </BigButton>
        </ButtonContainer>

      </LandingPageContainer>
    );
  }
}

export default LandingPage;