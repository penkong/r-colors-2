// style
import { CardSign } from './Sign.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
//
import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';

class Sign extends Component {
  render() {
    return (
      <CardSign>
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
      </CardSign>
    );
  }
}

export default Sign;



