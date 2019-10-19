import styled  from 'styled-components';
import { flexRow } from '../../../styled/styled-comps/mixin';
import { darkMainColor, lightColor } from '../../../styled/styled-comps/constants';


export const LogoHeader = styled.div`
  height: 3rem;
  width : 3rem;
  border-radius: 50%;
  background-color: ${lightColor};
  margin-left: 1rem;
  @media screen and (min-width: 500px){
    margin-left: 2rem;
  }
  @media screen and (min-width: 900px){
    margin-left: 3rem;
  }
`;

export const HeaderContainer = styled.div`
  ${flexRow}
  justify-content: space-between;
  margin: 0 auto;
  height: 4.5rem;
  width: 100vw;
  background-color: ${ darkMainColor };
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


