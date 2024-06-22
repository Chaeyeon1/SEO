import React from 'react';

import type { PlateContentProps } from '@udecode/plate-common';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@udecode/cn';
import { PlateContent } from '@udecode/plate-common';
import { cva } from 'class-variance-authority';

const editorVariants = cva(
  cn(
    'relative overflow-overlay whitespace-pre-wrap break-words',
    'w-full h-full rounded-md bg-white px-6 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400',
    '[&_[data-slate-placeholder]]:text-gray-500 [&_[data-slate-placeholder]]:!opacity-100 dark:[&_[data-slate-placeholder]]:text-gray-400',
    '[&_[data-slate-placeholder]]:top-[auto_!important]',
    '[&_strong]:font-bold'
  ),
  {
    defaultVariants: {
      focusRing: true,
      size: 'sm',
      variant: 'outline',
    },
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
      focusRing: {
        false: '',
        true: '',
      },
      focused: {
        true: 'ring-2 ring-gray-950 ring-offset-2 dark:ring-gray-300',
      },
      size: {
        md: 'text-base',
        sm: 'text-sm',
      },
      variant: {
        ghost: '',
        outline: 'border border-gray-200 dark:border-gray-800',
      },
    },
  }
);

export type EditorProps = PlateContentProps &
  VariantProps<typeof editorVariants>;

const Editor = React.forwardRef<HTMLDivElement, EditorProps>(
  (
    {
      className,
      disabled,
      focusRing,
      focused,
      readOnly,
      size,
      variant,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className='relative w-full'
        style={{ height: '100%', overflow: 'overlay', backgroundColor: '#fff' }}
        ref={ref}
      >
        <PlateContent
          aria-disabled={disabled}
          className={cn(
            editorVariants({
              disabled,
              focusRing,
              focused,
              size,
              variant,
            }),
            className
          )}
          disableDefaultStyles
          readOnly={disabled ?? readOnly}
          {...props}
        />
      </div>
    );
  }
);
Editor.displayName = 'Editor';

export { Editor };
