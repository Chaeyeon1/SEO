import React, { HTMLAttributes } from 'react';
import { OutlinedButtonStyle } from './style';

const OutlinedButton = ({
  label,
  ...rest
}: { label: string } & HTMLAttributes<HTMLDivElement>) => {
  return <OutlinedButtonStyle {...rest}>{label}</OutlinedButtonStyle>;
};

export default OutlinedButton;
