import styled from 'styled-components';
import { centerOf } from '../../styled/styled-comps/mixin';
import { lightColor } from '../../styled/styled-comps/constants';

export const CardSign = styled.div`
  ${centerOf};
  width: 90%;
  height: 70vh;
  background-color: white;
  border: none;
  border-radius: 3px;
  border: 1px solid ${lightColor};
  margin-top: 1rem;
  @media screen and (min-width: 575px) {
    width: 60%;
    margin-top: 3rem;
  }
  @media screen and (min-width: 991px) {
    width: 40%;
  }
  @media screen and (min-width: 1199px) {
    width: 30%;
  }
`;

export const ImgContainer = styled.div`
  height: 4rem;
  margin: 1rem auto 0;
  width: 4rem;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: none;
  }
`;
