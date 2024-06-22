'use client';

import * as React from 'react';

import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { cn, withCn, withRef, withVariants } from '@udecode/cn';
import { type VariantProps, cva } from 'class-variance-authority';

import { Icons } from './icons';

import { Separator } from './separator';
import { withTooltip } from './tooltip';

export const Toolbar = withCn(
  ToolbarPrimitive.Root,
  'relative flex select-none items-center gap-1 bg-white dark:bg-gray-950'
);

export const ToolbarToggleGroup = withCn(
  ToolbarPrimitive.ToolbarToggleGroup,
  'flex items-center'
);

export const ToolbarLink = withCn(
  ToolbarPrimitive.Link,
  'font-medium underline underline-offset-4'
);

export const ToolbarSeparator = withCn(
  ToolbarPrimitive.Separator,
  'my-1 w-px shrink-0 bg-gray-200 dark:bg-gray-800'
);

const toolbarButtonVariants = cva(
  cn(
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300',
    '[&_svg:not([data-icon])]:size-5'
  ),
  {
    defaultVariants: {
      size: 'sm',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'h-10 px-3',
        lg: 'h-11 px-5',
        sm: 'h-9 px-2',
      },
      variant: {
        default:
          'bg-transparent hover:bg-gray-100 hover:text-gray-500 aria-checked:bg-gray-100 aria-checked:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-400 dark:aria-checked:bg-gray-800 dark:aria-checked:text-gray-50',
        outline:
          'border border-gray-200 bg-transparent hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50',
      },
    },
  }
);

const ToolbarButton = withTooltip(
  // eslint-disable-next-line react/display-name
  React.forwardRef<
    React.ElementRef<typeof ToolbarToggleItem>,
    {
      isDropdown?: boolean;
      pressed?: boolean;
    } & Omit<
      React.ComponentPropsWithoutRef<typeof ToolbarToggleItem>,
      'asChild' | 'value'
    > &
      VariantProps<typeof toolbarButtonVariants>
  >(
    (
      { children, className, isDropdown, pressed, size, variant, ...props },
      ref
    ) => {
      return typeof pressed === 'boolean' ? (
        <ToolbarToggleGroup
          disabled={props.disabled}
          type='single'
          value='single'
        >
          <ToolbarToggleItem
            className={cn(
              toolbarButtonVariants({
                size,
                variant,
              }),
              isDropdown && 'my-1 justify-between pr-1',
              className
            )}
            ref={ref}
            value={pressed ? 'single' : ''}
            {...props}
          >
            {isDropdown ? (
              <>
                <div className='flex flex-1'>{children}</div>
                <div>
                  <Icons.arrowDown className='ml-0.5 size-4' data-icon />
                </div>
              </>
            ) : (
              children
            )}
          </ToolbarToggleItem>
        </ToolbarToggleGroup>
      ) : (
        <ToolbarPrimitive.Button
          className={cn(
            toolbarButtonVariants({
              size,
              variant,
            }),
            isDropdown && 'pr-1',
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </ToolbarPrimitive.Button>
      );
    }
  )
);
ToolbarButton.displayName = 'ToolbarButton';

export { ToolbarButton };

export const ToolbarToggleItem = withVariants(
  ToolbarPrimitive.ToggleItem,
  toolbarButtonVariants,
  ['variant', 'size']
);

export const ToolbarGroup = withRef<
  'div',
  {
    noSeparator?: boolean;
  }
>(({ children, className, noSeparator }, ref) => {
  const childArr = React.Children.map(children, (c) => c);

  if (!childArr || childArr.length === 0) return null;

  return (
    <div className={cn('flex', className)} ref={ref}>
      {!noSeparator && (
        <div className='h-full py-1'>
          <Separator orientation='vertical' />
        </div>
      )}

      <div className='mx-1 flex items-center gap-1'>{children}</div>
    </div>
  );
});
