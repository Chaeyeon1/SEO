import React from 'react';
import { PlateEditor } from './_sections/PlateEditor';
import { WritePageWrapper } from './_related/style';
import ContainedButton from '@/app/components/button/PrimaryContainedButton';

const page = () => {
  return (
    <WritePageWrapper>
      <PlateEditor />
    </WritePageWrapper>
  );
};

export default page;
