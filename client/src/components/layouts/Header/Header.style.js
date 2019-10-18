import styled , { css } from 'styled-components';
import responsive from '../../../styled/styled-comps/responsive';
import { flexRow } from '../../../styled/styled-comps/mixin';

export const LogoHeader = styled.div`
  height: 3rem;
  width : 3rem;
  border-radius: 50%;
  background-color: yellow;
  
`;

export const HeaderContainer = styled.div`
  ${flexRow}
  justify-content: space-between;
  margin: 0 auto;
  height: 4.5rem;
  width: 90vw;
  /* background-color: red; */
  .left {
    ${flexRow}
    width: 60%;
    justify-content: space-between;
    @media screen and (min-width: 500px){
      width: 45%;
    }
    @media screen and (min-width: 991px){
      width: 30%;
    }
  }
`;


