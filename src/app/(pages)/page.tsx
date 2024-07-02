import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        margin: '16px',
      }}
    >
      <h1>이봉이와 작가 김수돌의 연관성을 파악해보아요.</h1>

      <h4>더 많은 상세 정보를 보고 싶다면?</h4>
      <Link
        style={{
          display: 'flex',
          width: 'fit-content',
          backgroundColor: '#854',
          padding: '8px 16px',
          alignItems: 'center',
          borderRadius: '8px',
        }}
        href='/water'
      >
        상세 정보 보기
      </Link>
    </div>
  );
};

export default page;
