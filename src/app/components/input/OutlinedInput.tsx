import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { BaseInputStyle } from './style';

const OutlinedInput = ({
  ...rest
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return <BaseInputStyle {...rest} />;
};

export default OutlinedInput;
