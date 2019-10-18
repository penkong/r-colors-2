// style
import { CardSign , ImgContainer } from './Sign.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
//
import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustButton/CustButton';
import GoogleButton from '../GoogleButton/GoogleButton';

class Sign extends Component {
  render() {
    return (
      <CardSign>
        <ImgContainer>
          <img src=""/>
        </ImgContainer>
        <FormInput label='user name'>
          <FontAwesomeIcon 
          icon={faUser} 
          size="1x" 
          style={{ color: '#8186d5',  cursor: 'pointer'}}
        />
        </FormInput>
        <FormInput label='email'>
          <FontAwesomeIcon 
          icon={faEnvelope} 
          size="1x" 
          style={{ color: '#8186d5',  cursor: 'pointer'}}
        />
        </FormInput>
        <FormInput label='password'>
          <FontAwesomeIcon 
          icon={faKey} 
          size="1x" 
          style={{ color: '#8186d5',  cursor: 'pointer'}}
        />
        </FormInput>
        <CustomButton> Signup</CustomButton>
        <GoogleButton> Signup with G</GoogleButton>
      </CardSign>
    );
  }
}

export default Sign;



