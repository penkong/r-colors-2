// style
import { SignPageContainer } from './SignPage.style';
//
import React, { Component } from 'react';
import Sign from '../../components/Sign/Sign';

class SignPage extends Component {
  render() {
    return (
      <SignPageContainer>
        <Sign/>
      </SignPageContainer>
    );
  }
}

export default SignPage;