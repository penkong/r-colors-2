// style 
import { GroupContainer, FormInputContainer, IconContainer } from './FormInput.style';
// 
import React from 'react'

const FormInput = ({label ,  children}) => {
  return (
    <GroupContainer>
      <FormInputContainer placeholder={label}/>
      <IconContainer>
        {children}
      </IconContainer>
    </GroupContainer>
  );
}
export default FormInput;