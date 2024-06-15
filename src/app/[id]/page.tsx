import type { Metadata, MetadataRoute, ResolvingMetadata } from 'next';
import { BASE_URL } from '../constant';

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
    <div>
      <h1>우린 지금 무엇을 하고 있을까?</h1>
      <p>김수돌신채돌김수돌신채돌</p>
    </div>
  );
}
