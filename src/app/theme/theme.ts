import { css } from 'styled-components';

/** 자주 사용하는 색상들 */
const colors = {
  main100: '#FED9DA',
  main200: '#FDB3B4',
  main300: '#FB8D8F',
  main400: '#FA6769',
  main500: '#F94144',
  main600: '#C73436',
  main700: '#952729',
  main800: '#952729',
  main900: '#320D0E',
  /* 나머지 색상들 생략 ( https://tailwindcss.com/docs/customizing-colors ) */

  gray100: '#999999',
  gray200: '#777777',
  gray300: '#555555',
  gray400: '#333333',
  gray500: '#111111',

  /* 아래 부분을 비워둔 이유는 타입때문 ( "<ThemeProvider>"에서 조건에 따라 다르게 값을 채움 ) */
  color: '',
  bgColor: '',
  gray: '',
  constraintColor: '',
};

/** 검정 배경 */
export const lightTheme = {
  color: '#000000',
  bgColor: '#FDF4F4',
  gray: '#343434',
  constraintColor: '#ffffff',
};
/** 흰색 배경 */
export const darkTheme = {
  color: '#FFFFFF',
  bgColor: '#000000',
  gray: '#D9D9D9',
  constraintColor: '#ffffff',
};

/** 반응형 사이즈 */
const mediaSize = {
  xs: "screen and (max-width: '400px')",
  sm: "screen and (max-width: '640px')",
  md: "screen and (max-width: '768px')",
  lg: "screen and (max-width: '1024px')",
  xl: "screen and (max-width: '1280px')",
  '2xl': "screen and (max-width: '1536px')",
};

/** 폰트 크기 */
const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
};

/** 그 외의 크기 */
const size = {
  xs: '0.2em',
  sm: '0.4em',
  md: '0.6em',
  lg: '1em',
  xl: '1.4em',
  '2xl': '1.6em',
};

/** 유틸리티 */
const util = {
  truncate: () => css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  scroll: () => css`
    &::-webkit-scrollbar {
      /** 스크롤바의 너비 */
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      /** 스크롤바 길이 */
      height: 25%;
      /** 스크롤바의 색상 */
      background: ${({ theme }) => theme.colors.gray};
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      /** 스크롤바 뒷 배경 색상 */
      background: ${({ theme }) => theme.colors.main500};
    }
  `,
};

const theme = {
  colors,
  mediaSize,
  fontSize,
  size,
  util,
  borderRadius: '4px',
};

export default theme;

/** 타입 재정의를 위함 ( "styled-components" 변수 타입 추론을 위함( 자동완성 ) ) */
export type Theme = typeof theme;
