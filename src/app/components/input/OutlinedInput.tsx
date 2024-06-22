import React, { InputHTMLAttributes } from 'react';
import { BaseInputStyle } from './style';

const OutlinedInput = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return <BaseInputStyle {...rest} />;
};

export default OutlinedInput;
