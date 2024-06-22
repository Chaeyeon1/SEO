import { withCn } from '@udecode/cn';

import { Toolbar } from './toolbar';

export const FixedToolbar = withCn(
  Toolbar,
  'supports-backdrop-blur:bg-white/60 sticky left-0 top-[57px] z-[60] w-full justify-between rounded-t-lg border-b border-b-border bg-white/95 backdrop-blur dark:supports-backdrop-blur:bg-gray-950/60 dark:bg-gray-950/95'
);
