// style
import {
  GroupContainer,
  FormInputContainer,
  IconContainer
} from './FormInput.style';
//
import React from 'react';

const FormInput = ({ label, children, type, name, onChange }) => {
  return (
    <GroupContainer>
      <FormInputContainer
        placeholder={label}
        type={type}
        name={name}
        onChange={onChange}
      />
      <IconContainer>{children}</IconContainer>
    </GroupContainer>
  );
};
export default FormInput;
