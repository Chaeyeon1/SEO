'use client';
import React from 'react';
import FileEditor from '../_related/FileEditor';
import { useParams, useRouter } from 'next/navigation';
import { Title } from './_related/style';
import {
  WritePageWrapper,
  WriteSection,
  WriteSectionHeader,
} from '../../write/_related/style';
import ContainedButton from '@/app/components/button/PrimaryContainedButton';

const Page = () => {
  const { fileName } = useParams<{ fileName: string }>();
  const decodedFileName = decodeURIComponent(fileName);
  const router = useRouter();
  return (
    <WritePageWrapper>
      <WriteSection>
        <WriteSectionHeader>
          <Title>{decodedFileName}</Title>
          <ContainedButton label='목록' onClick={() => router.push('/post')} />
        </WriteSectionHeader>
        <FileEditor />
      </WriteSection>
    </WritePageWrapper>
  );
};

export default Page;
