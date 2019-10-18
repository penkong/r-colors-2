import styled from 'styled-components';
import { flexRow, flexCol } from '../../styled/styled-comps/mixin';


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
  margin-right: 1rem;
`;