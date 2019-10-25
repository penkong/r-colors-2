// style
import { CardSign, ImgContainer } from './Sign.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
//
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../utils/history';
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

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    if (isAuthenticated) {
      history.push('/userland');
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    // Create user object
    const newUser = {
      username,
      email,
      password
    };

    // Attempt to register
    this.props.register(newUser);
  };

  render() {
    return (
      <CardSign>
        <ImgContainer>BD</ImgContainer>
        <form onSubmit={this.onSubmit}>
          <FormInput
            label="user name"
            type="text"
            name="username"
            id="username"
            onChange={this.onChange}
          >
            <FontAwesomeIcon
              icon={faUser}
              size="1x"
              style={{ color: '#8186d5', cursor: 'pointer' }}
            />
          </FormInput>
          <FormInput
            label="email"
            type="email"
            name="email"
            id="email"
            onChange={this.onChange}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="1x"
              style={{ color: '#8186d5', cursor: 'pointer' }}
            />
          </FormInput>
          <FormInput
            label="password"
            type="password"
            name="password"
            id="password"
            onChange={this.onChange}
          >
            <FontAwesomeIcon
              icon={faKey}
              size="1x"
              style={{ color: '#8186d5', cursor: 'pointer' }}
            />
          </FormInput>
          <CustomButton> Signup</CustomButton>
        </form>
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
