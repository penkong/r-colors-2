import React from 'react';

import { CustomButtonContainer } from './CustButton.style';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;