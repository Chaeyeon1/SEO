'use client';
import { BASE_URL } from '@/app/constant';
import React, { useEffect, useState } from 'react';
import { GridContainer, Post, PostsLayout } from './_related/style';

const Page = () => {
  const [posts, setPosts] = useState<string[] | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${BASE_URL}/api/file/all`);
      const data = await response.json();
      setPosts(data);
    };

    fetchProduct();
  }, []);

  if (!posts?.length) return;
  return (
    <PostsLayout>
      <GridContainer>
        {posts.map((file, index) => (
          <Post href={`/post/${file}`} key={index}>
            {file}
          </Post>
        ))}
      </GridContainer>
    </PostsLayout>
  );
};

export default Page;
