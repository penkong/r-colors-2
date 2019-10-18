import styled from 'styled-components';
import { flexRow, flexCol, centerOf } from '../../styled/styled-comps/mixin';


export const ButtonContainer = styled.div`
  width: 90%;
  ${flexRow}
  margin: 0 auto;
`;


export const HeadText = styled.div `
  &:first-child {
    font-size: 1rem;
    color: black;
  }
  ${flexCol}
  font-size: 0.6rem;
  color: grey;
`;

export const Button = styled.button`
  width: 9rem;
  height: 2rem;
  padding: 1rem;
  background-color: orange;
  border: none;
  border-radius: 3px;
  margin-bottom: 2rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: 2rem;
  @media screen and (min-width: 500px){
    margin-right: 6rem;
  }
  @media screen and (min-width: 700px){
    margin-right: 10rem;
    width: 12rem;
    height: 3rem;
    margin-bottom: 1rem;
  }
  position: relative;
  transition: all 0.4s ease-in-out;
  -webkit-box-shadow: 0px 4px 4px 1px rgba(122,121,122,0.16);
  -moz-box-shadow: 0px 4px 4px 1px rgba(122,121,122,0.16);
  box-shadow: 0px 4px 4px 1px rgba(122,121,122,0.16);
  span {
    ${centerOf}
    color: white;
    font-size: 1rem;
  }
  :hover {
    transform: scale(1.02);
    background-color: orange;
  }
  :active {
    background-color: orange;
    transform: scale(0.98);
  }
  
`;