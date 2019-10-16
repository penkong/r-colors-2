//
const sizes = {
  xs: '350px',
  xm: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1199.99px',
  big: '3000px'
}
export default {
  up(size) {
    return `@media screen and (min-width: ${sizes.size})`;
  },
  between(size1,size2) {   
    return `@media screen and (min-width: ${sizes.size1}) and (max-width: ${sizes.size2})`;
  }
}


// down(size) {
//   const sizes = {
//     xs: '575.98 px',
//     sm: '767.98px',
//     md: '991.98px',
//     lg: '1199.98px'
//   }
//   return `@media (max-width: ${sizes.size})`
// },



// use 
// export default {
//   root: {
//     [sizes.down("md")]: {
//       width: "50%"
//     }
//   }
// };


// bootstrap size boundary

// @media (max-width: 575.98px) {...}
// @media (max-width: 767.98px) {...}
// @media (max-width: 991.98px) {...}
// @media (max-width: 1199.98px) {...}