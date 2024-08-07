'use client';
import styled from 'styled-components';

export const BasicButtonStyle = styled.div`
  padding: 12px 16px;
  width: fit-content;
  border-radius: 8px;
  cursor: pointer;
  flex-shrink: 0;
`;

export const OutlinedButtonStyle = styled(BasicButtonStyle)<{
  size?: 'sm' | 'md' | 'lg';
}>`
  color: ${(props) => props.theme.colors.main500};
  border: 1px solid ${(props) => props.theme.colors.main500};
  &:hover {
    background-color: ${(props) => props.theme.colors.main100};
  }
  &:active {
    background-color: transparent;
  }
  padding: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '3px 8px';
      case 'lg':
        return '11px 24px';
      default:
        return '9px 16px';
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '12px';
      case 'lg':
        return '18px';
      default:
        return '14px';
    }
  }};
`;

export const ContainedButtonStyle = styled(BasicButtonStyle)<{
  size?: 'sm' | 'md' | 'lg';
}>`
  color: ${(props) => props.theme.colors.constraintColor};
  background-color: ${(props) => props.theme.colors.main500};
  &:hover {
    background-color: ${(props) => props.theme.colors.main400};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.main500};
  }
  padding: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '4px 8px';
      case 'lg':
        return '12px 24px';
      default:
        return '10px 16px';
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '12px';
      case 'lg':
        return '18px';
      default:
        return '14px';
    }
  }};
`;
