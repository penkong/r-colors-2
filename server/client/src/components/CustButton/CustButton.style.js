import styled from 'styled-components';
import { orangeButton, hoverButton } from '../../styled/styled-comps/constants';


export const CustomButtonContainer = styled.button `
  min-width: 90%;
  width: auto;
  height: 2.5rem;
  color:white;
  background-color: ${orangeButton};
  letter-spacing: 0.5px;
  border: none;
  border-radius: 4px;
  line-height: 2.5rem;
  padding: 0 2rem 0 2rem;
  margin: 0 auto;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: all 0.4s ease-in-out;
  -webkit-box-shadow: 0px 4px 4px 1px rgba(122,121,122,0.26);
  -moz-box-shadow: 0px 4px 4px 1px rgba(122,121,122,0.26);
  box-shadow: 0px 4px 4px 1px rgba(122,121,122,0.26);
  :hover {
    transform: scale(1.02);
    background-color: ${hoverButton};
  }
  :active {
    transform: scale(0.98);
  }
`;
