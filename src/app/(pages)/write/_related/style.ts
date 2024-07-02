'use client';
import OutlinedInput from '@/app/components/input/OutlinedInput';
import styled from 'styled-components';

export const WritePageWrapper = styled.div`
  padding: 40px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bgColor};
`;

export const WriteSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  height: 100%;
`;

export const WriteSectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const TitleInput = styled(OutlinedInput)`
  width: 100%;
  font-size: 28px;
  font-weight: 400;
  box-sizing: border-box;
`;
