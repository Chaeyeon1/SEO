import type { Metadata, MetadataRoute, ResolvingMetadata } from 'next';
import { BASE_URL } from '../../constant';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const product = await fetch(`${BASE_URL}/api?name=${id}`).then((res) =>
    res.json()
  );
  return {
    metadataBase: new URL(BASE_URL),
    title: `${product}`,
    description: '김수돌과 신채돌의 개발 일기',
    keywords: ['김수돌', '신채돌', 'SEO', '개발', '일기'],
    openGraph: {
      title: '저랑 공부하실래용?',
      description: '챕터 1. SEO',
      images: [
        {
          url: '/opengraph-image.png',
          alt: '이미지 설명',
        },
      ],
    },
    twitter: {
      title: '트위터 하이!',
      description: '챕터 1. SEO',
      images: [
        {
          url: '/twitter-image.png',
          alt: '이미지 설명',
        },
      ],
    },
  };
}

export default function Page() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        margin: '16px',
      }}
    >
      <h1>김수연과 이봉이의 상관성</h1>
      <div>
        <div className='title'>
          <h2>김수연 빵꿰이와 이봉이 빵꿰이의 크기는 얼마나 차이날까?</h2>
        </div>
        <div className='content'>
          <div>거의 비슷합니다.</div>
        </div>
      </div>
      <div>
        <div className='title'>
          <h2>김수연이 두뽕삐 초콜릿을 먹을 확률은 얼마일까?</h2>
        </div>
        <div className='content'>
          <div>거의 제로에 가깝습니다.</div>
        </div>
      </div>
      <div>
        <div className='title'>
          <h2>이봉이의 형은 누구일까요?</h2>
        </div>
        <div className='content'>
          <div>일봉이.</div>
        </div>
      </div>
      <div>
        <div className='title'>
          <h2>김수연의 형은 누구일까요?</h2>
        </div>
        <div className='content'>
          <div>이봉이</div>
        </div>
      </div>
    </div>
  );
}
