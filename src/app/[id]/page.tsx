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
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  };
}

export default function Page() {
  return <div></div>;
}
