//
import { LandingPageContainer } from './LandingPage.style';
//
import React, { Component } from 'react';
import TablePrice from '../../components/TablePrice/TablePrice';
import { BigButton } from '../../components/BigButton/BigButton.style';
import { Button, ButtonContainer, HeadText } from '../../components/HeadRow/HeadRow.style.js';

class LandingPage extends Component {
  render() {
    return (
      <LandingPageContainer>
        <ButtonContainer>
          <HeadText>
            <p>one sight</p>
            <p>one moment</p>
          </HeadText>
          <Button/>
        </ButtonContainer>
        <TablePrice/>
        <BigButton/>
      </LandingPageContainer>
    );
  }
}

export default LandingPage;