import React from 'react';
import { PlateEditor } from './_sections/PlateEditor';
import { WritePageWrapper } from './_related/style';

const page = () => {
  return (
    <WritePageWrapper>
      <PlateEditor />
    </WritePageWrapper>
  );
};

export default page;
