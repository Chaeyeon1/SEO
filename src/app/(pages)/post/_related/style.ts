import Link from 'next/link';
import styled from 'styled-components';

export const PostsLayout = styled.div`
  padding: 40px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bgColor};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

export const Post = styled(Link)`
  padding: 16px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-2px);
  }
`;
