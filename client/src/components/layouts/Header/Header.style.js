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
    width: 40%;
    justify-content: space-between;
  }
`;

// export const NavBtn = styled. {
//     border: none;
//     border-radius: 0;

//     background-color: #fff;
//     height: 2px;
//     width: 4.5rem;
//     margin-top: 4rem;

//     &::before,
//     &::after {
//         background-color: #fff;
//         height: 2px;
//         width: 4.5rem;
//         content: "";
//         display: block;
//     }

//     &::before { transform: translateY(-1.5rem); }
//     &::after { transform: translateY(1.3rem); }

//     @media only screen and (max-width: $bp-large) {
//         margin-top: 0;
//         margin-right: 3rem;

//         &::before { transform: translateY(-1.2rem); }
//         &::after { transform: translateY(1rem); }
//     }
// }
//........................................................
// .bar1, .bar2, .bar3 {
//     width: 35px;
//     height: 5px;
//     background-color: #333;
//     margin: 6px 0;
//     transition: 0.4s;
//   }

//   .change .bar1 {
//     -webkit-transform: rotate(-45deg) translate(-9px, 6px);
//     transform: rotate(-45deg) translate(-9px, 6px);
//   }

//   .change .bar2 {opacity: 0;}

//   .change .bar3 {
//     -webkit-transform: rotate(45deg) translate(-8px, -8px);
//     transform: rotate(45deg) translate(-8px, -8px);
//   }
// const bar1 = css.div``
// const bar2 = css.div``
// const bar3 = css.div``
// export const Hamburger = styled.div`
//   display: inline-block;
//   cursor: pointer;
  
// `;

// <div class="container" onclick="myFunction(this)">
//   <div class="bar1"></div>
//   <div class="bar2"></div>
//   <div class="bar3"></div>
// </div>


