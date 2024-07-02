'use client';
import { Editor } from '@/app/components/plate-ui/editor';
import { BASE_URL } from '@/app/constant';
import { Plate, TElement } from '@udecode/plate-common';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { plugins } from '../../_related/helper';

const FileEditor = () => {
  const { fileName } = useParams<{ fileName: string }>();
  const [fileInformation, setFileInformation] = useState<TElement[]>();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${BASE_URL}/api/file?fileName=${fileName}`);
      const data = await response.json();

      setFileInformation(data);
    };

    fetchProduct();
  }, [fileName]);

  return (
    <Plate
      key={JSON.stringify(fileInformation)}
      readOnly
      value={fileInformation}
      plugins={plugins}
    >
      <Editor />
    </Plate>
  );
};

export default FileEditor;
