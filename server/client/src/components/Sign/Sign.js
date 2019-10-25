// style
import { CardSign, ImgContainer } from './Sign.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
//
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../../redux/userAuth/userActions';
import { clearErrors } from '../../redux/error/errorActions';
//
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustButton/CustButton';
import GoogleButton from '../GoogleButton/GoogleButton';

class Sign extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    msg: null
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  render() {
    return (
      <CardSign>
        <ImgContainer>BD</ImgContainer>
        <FormInput label="user name">
          <FontAwesomeIcon
            icon={faUser}
            size="1x"
            style={{ color: '#8186d5', cursor: 'pointer' }}
          />
        </FormInput>
        <FormInput label="email">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="1x"
            style={{ color: '#8186d5', cursor: 'pointer' }}
          />
        </FormInput>
        <FormInput label="password">
          <FontAwesomeIcon
            icon={faKey}
            size="1x"
            style={{ color: '#8186d5', cursor: 'pointer' }}
          />
        </FormInput>
        <CustomButton> Signup</CustomButton>
        <GoogleButton> Signup with G</GoogleButton>
      </CardSign>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.userAuth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(Sign);
