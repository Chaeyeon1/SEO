'use client';
import { BASE_URL } from '@/app/constant';
import React, { useEffect, useState } from 'react';
import { GridContainer, Post, PostsLayout } from './_related/style';
import { WriteSection, WriteSectionHeader } from '../write/_related/style';
import { Title } from './[fileName]/_related/style';
import ContainedButton from '@/app/components/button/PrimaryContainedButton';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [posts, setPosts] = useState<string[] | null>(null);
  const router = useRouter();
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
      <WriteSectionHeader style={{ marginBottom: '40px' }}>
        <Title>게시글 목록</Title>
        <ContainedButton
          label='글쓰러 가기'
          onClick={() => router.push('/write')}
        />
      </WriteSectionHeader>
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
