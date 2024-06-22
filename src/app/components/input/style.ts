import styled from 'styled-components';

export const BaseInputStyle = styled.input`
  background-color: transparent;
  &:focus-visible {
    border-bottom: 1px solid ${(props) => props.theme.colors.main600};
    outline: none;
  }
`;
