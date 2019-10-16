
const themed = {
  respond : props => {
    switch (props.$breakpoint) {
      case bigPhone:
        `@media (min-width: 50em) {
          @content
        }`    
      default:
        break;
    }
  }
}

