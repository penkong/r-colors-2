import React from 'react';

import { CustomButtonContainer } from './GoogleButton.style';

const GoogleButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default GoogleButton;