import styled from 'styled-components';
import { lightColor } from '../../styled/styled-comps/constants';


export const GroupContainer = styled.div `
  position: relative;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input `
  background: none;
  background-color: white;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  display: block;
  width: 90%;
  border: 0.7px solid ${lightColor};
  border-radius: 3px;
  margin: 1.5rem auto;
  position: relative;
  &:focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    margin-left: 1.5rem;
    color: ${lightColor};
  }
  :-ms-input-placeholder {
    margin-left: 1.5rem;
    color: ${lightColor};
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 2.5rem;
`;
