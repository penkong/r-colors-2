
export default {
  respond = $breakpoint => {
    if($breakpoint == bigPhone) {
      return `@media (min-width : 37.5em)`
    }
    if($breakpoint == tabPort) {
      return `@media (min-width : 56.25em)`
    }
    if($breakpoint == bigPhone) {
      return `@media (min-width : 75em)`
    }
    if($breakpoint == bigPhone) {
      return `@media (min-width : 112.5em)`
    }
  }
}


