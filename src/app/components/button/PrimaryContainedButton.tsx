import React, { HTMLAttributes } from 'react';
import { ContainedButtonStyle } from './style';

const ContainedButton = ({
  label,
  ...rest
}: { label: string } & HTMLAttributes<HTMLDivElement>) => {
  return <ContainedButtonStyle {...rest}>{label}</ContainedButtonStyle>;
};

export default ContainedButton;
