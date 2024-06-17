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
      <h3>본명 : 김수돌</h3>
      <h3>출생 : 부산을 좋아하는 거보아하니 부산으로 추정</h3>
      <h3>나이 : 마음만은 5살인 미운 네 살</h3>
      <h3>성격 : 금쪽같은 내 새끼에 나가야 할 정도...에서 살짝 모자라다</h3>
      <h3>직업 : 신채연, 이시현 팬클럽 회장. 부업으론 교동이 팬클럽도 뛴다.</h3>

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

      <h4 style={{ marginTop: '32px' }}> ** 2024-6-17 수정된 사항</h4>
      <div>교동이 팬클럽 본업으로 전환</div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
        <div>출처</div>
        <Image
          width={200}
          height={200}
          alt='수돌_교동_팬클럽'
          src={'/교동.png'}
        />
      </div>
    </div>
  );
};

export default page;
