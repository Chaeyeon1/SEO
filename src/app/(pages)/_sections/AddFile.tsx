'use client';
import { BASE_URL } from '@/app/constant';
import React from 'react';

const AddFile = () => {
  const addFile = async () => {
    await fetch(`${BASE_URL}/api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fileName: '첫 게시글', text: '#### Hello' }),
    }).then((res) => res.json());
  };

  return (
    <div>
      <input />
      <input />
      <button onClick={addFile}>파일 생성</button>
    </div>
  );
};

export default AddFile;
