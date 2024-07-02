'use client';
import { Plate, TElement } from '@udecode/plate-common';
import { CommentsProvider } from '@udecode/plate-comments';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Editor } from '@/app/components/plate-ui/editor';
import { FixedToolbar } from '@/app/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/app/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@/app/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/app/components/plate-ui/floating-toolbar-buttons';
import { TooltipProvider } from '@/app/components/plate-ui/tooltip';
import { useState } from 'react';
import ContainedButton from '@/app/components/button/PrimaryContainedButton';
import {
  ButtonWrapper,
  TitleInput,
  WriteSection,
  WriteSectionHeader,
} from '../_related/style';
import { enqueueSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';
import { plugins } from '../../_related/helper';
import { CommentsPopover } from '@/app/components/plate-ui/comments-popover';
import OutlinedButton from '@/app/components/button/OutlinedButton';

export function PlateEditor() {
  const [fileName, setFileName] = useState<string>();
  const [text, setText] = useState<TElement[]>();
  const router = useRouter();

  const addFile = async () => {
    try {
      const response = await fetch(`/api`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName, text }),
      });

      if (!response.ok) {
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        } else {
          const errorText = await response.text();
          throw new Error(errorText);
        }
      }

      enqueueSnackbar({ variant: 'success', message: 'success' });
      router.push('/post');
    } catch (e: any) {
      enqueueSnackbar({ variant: 'error', message: e.message });
    }
  };

  return (
    <WriteSection>
      <WriteSectionHeader>
        <TitleInput
          placeholder='Title'
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <ButtonWrapper>
          <OutlinedButton onClick={() => router.push('/post')} label='목록' />
          <ContainedButton onClick={addFile} label='글쓰기' />
        </ButtonWrapper>
      </WriteSectionHeader>
      <TooltipProvider>
        <DndProvider backend={HTML5Backend}>
          <CommentsProvider users={{}} myUserId='1'>
            <Plate plugins={plugins} onChange={(newValue) => setText(newValue)}>
              <FixedToolbar>
                <FixedToolbarButtons />
              </FixedToolbar>
              <Editor />
              <FloatingToolbar>
                <FloatingToolbarButtons />
              </FloatingToolbar>
              <CommentsPopover />
            </Plate>
          </CommentsProvider>
        </DndProvider>
      </TooltipProvider>
    </WriteSection>
  );
}
