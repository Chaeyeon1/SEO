import { MetadataRoute } from 'next';
import { BASE_URL } from './constant';

export const getProducts = () => {
  return fetch(`${BASE_URL}/api/all`, {
    next: { revalidate: 60 * 10 }, // 10분 캐시
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject();
      }
      return res.json();
    })
    .catch(() => {
      return [];
    });
};

const Sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const products: string[] = await getProducts();

  const blogPosts = products.map((post) => ({
    url: `${BASE_URL}/${post}`,
    lastModified: new Date(),
    changeFrequency: 'always' as 'always',
    priority: 1,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.5,
    },
    ...blogPosts,
  ];
};

export default Sitemap;
