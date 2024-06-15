import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const baseURL = 'https://seo-fawn.vercel.app';
  const product = await fetch(`${baseURL}/api?name=${id}`).then((res) =>
    res.json()
  );
  const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL(baseURL),
    title: `${product}`,
    description: '김수돌과 신채돌의 개발 일기',
    keywords: ['김수돌', '신채돌', 'SEO', '개발', '일기'],
    robots: 'noindex',
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
    ['naver-site-verification' as any]:
      'f92dce300102fa2c730313dc1f2fc4c907edcc93',
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
