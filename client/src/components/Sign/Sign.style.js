import styled from 'styled-components'
import { centerOf } from '../../styled/styled-comps/mixin';

export const CardSign = styled.div`
  ${centerOf};
  width: 90%;
  height: 70vh;
  background-color: red;
  border: none;
  border-radius: 3px;
  @media screen and (min-width: 575px){
    width: 60%;
    margin-top: 3rem;
  }
  @media screen and (min-width: 991px){
    width: 40%;
  }
  @media screen and (min-width: 1199px){
    width: 30%;
  }
`;
