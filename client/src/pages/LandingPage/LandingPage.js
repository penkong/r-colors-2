// style
import { LandingPageContainer, BigButton, TextBoxContainer } from './LandingPage.style';
import { Button, ButtonContainer, HeadText } from '../../components/HeadRow/HeadRow.style.js';
//
import React, { Component } from 'react';
import TablePrice from '../../components/TablePrice/TablePrice';

class LandingPage extends Component {
  render() {
    return (
      <LandingPageContainer>

        <ButtonContainer>
          <HeadText>
            <p style={{fontSize: '1.5rem'}}>one sight</p>
            <p style={{fontSize: '0.75rem', color: 'grey'}}>one moment</p>
          </HeadText>
          <Button>
            <span> Signup / Login</span>
          </Button>
        </ButtonContainer>
        
        <TablePrice/>

        <TextBoxContainer/>

        <ButtonContainer>
          <BigButton>
            <span>
              and so much more ... Click!
            </span>
          </BigButton>
        </ButtonContainer>

      </LandingPageContainer>
    );
  }
}

export default LandingPage;