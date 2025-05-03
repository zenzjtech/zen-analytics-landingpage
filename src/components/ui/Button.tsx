import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ButtonProps extends MuiButtonProps {
  rounded?: boolean;
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'rounded',
})<ButtonProps>(({ theme, rounded }) => ({
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: rounded ? 50 : theme.shape.borderRadius,
  padding: theme.spacing(1, 3),
  ...(rounded && {
    minWidth: 120,
  }),
}));

export default function Button({ 
  rounded = false, 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <StyledButton
      rounded={rounded}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
