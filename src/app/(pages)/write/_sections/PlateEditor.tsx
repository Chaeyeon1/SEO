'use client';
('');
import { withProps } from '@udecode/cn';
import {
  createPlugins,
  Plate,
  RenderAfterEditable,
  PlateLeaf,
} from '@udecode/plate-common';
import {
  createParagraphPlugin,
  ELEMENT_PARAGRAPH,
} from '@udecode/plate-paragraph';
import {
  createHeadingPlugin,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from '@udecode/plate-heading';
import {
  createBlockquotePlugin,
  ELEMENT_BLOCKQUOTE,
} from '@udecode/plate-block-quote';
import {
  createCodeBlockPlugin,
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
  ELEMENT_CODE_SYNTAX,
} from '@udecode/plate-code-block';
import {
  createHorizontalRulePlugin,
  ELEMENT_HR,
} from '@udecode/plate-horizontal-rule';
import { createLinkPlugin, ELEMENT_LINK } from '@udecode/plate-link';
import {
  createImagePlugin,
  ELEMENT_IMAGE,
  createMediaEmbedPlugin,
  ELEMENT_MEDIA_EMBED,
} from '@udecode/plate-media';
import {
  createExcalidrawPlugin,
  ELEMENT_EXCALIDRAW,
} from '@udecode/plate-excalidraw';
import { createTogglePlugin, ELEMENT_TOGGLE } from '@udecode/plate-toggle';
import {
  createColumnPlugin,
  ELEMENT_COLUMN_GROUP,
  ELEMENT_COLUMN,
} from '@udecode/plate-layout';
import { createCaptionPlugin } from '@udecode/plate-caption';
import {
  createMentionPlugin,
  ELEMENT_MENTION,
  ELEMENT_MENTION_INPUT,
} from '@udecode/plate-mention';
import {
  createTablePlugin,
  ELEMENT_TABLE,
  ELEMENT_TR,
  ELEMENT_TD,
  ELEMENT_TH,
} from '@udecode/plate-table';
import { createTodoListPlugin, ELEMENT_TODO_LI } from '@udecode/plate-list';
import {
  createBoldPlugin,
  MARK_BOLD,
  createItalicPlugin,
  MARK_ITALIC,
  createUnderlinePlugin,
  MARK_UNDERLINE,
  createStrikethroughPlugin,
  MARK_STRIKETHROUGH,
  createCodePlugin,
  MARK_CODE,
  createSubscriptPlugin,
  MARK_SUBSCRIPT,
  createSuperscriptPlugin,
  MARK_SUPERSCRIPT,
} from '@udecode/plate-basic-marks';
import {
  createFontColorPlugin,
  createFontBackgroundColorPlugin,
  createFontSizePlugin,
} from '@udecode/plate-font';
import {
  createHighlightPlugin,
  MARK_HIGHLIGHT,
} from '@udecode/plate-highlight';
import { createKbdPlugin, MARK_KBD } from '@udecode/plate-kbd';
import { createAlignPlugin } from '@udecode/plate-alignment';
import { createIndentPlugin } from '@udecode/plate-indent';
import { createIndentListPlugin } from '@udecode/plate-indent-list';
import { createLineHeightPlugin } from '@udecode/plate-line-height';
import { createAutoformatPlugin } from '@udecode/plate-autoformat';
import { createBlockSelectionPlugin } from '@udecode/plate-selection';
import { createDndPlugin } from '@udecode/plate-dnd';
import { createEmojiPlugin } from '@udecode/plate-emoji';
import {
  createExitBreakPlugin,
  createSoftBreakPlugin,
} from '@udecode/plate-break';
import { createNodeIdPlugin } from '@udecode/plate-node-id';
import { createResetNodePlugin } from '@udecode/plate-reset-node';
import { createDeletePlugin } from '@udecode/plate-select';
import { createTabbablePlugin } from '@udecode/plate-tabbable';
import { createTrailingBlockPlugin } from '@udecode/plate-trailing-block';
import {
  createCommentsPlugin,
  CommentsProvider,
  MARK_COMMENT,
} from '@udecode/plate-comments';
import { createDeserializeDocxPlugin } from '@udecode/plate-serializer-docx';
import { createDeserializeCsvPlugin } from '@udecode/plate-serializer-csv';
import { createDeserializeMdPlugin } from '@udecode/plate-serializer-md';
import { createJuicePlugin } from '@udecode/plate-juice';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { BlockquoteElement } from '@/app/components/plate-ui/blockquote-element';
import { CodeBlockElement } from '@/app/components/plate-ui/code-block-element';
import { CodeLineElement } from '@/app/components/plate-ui/code-line-element';
import { CodeSyntaxLeaf } from '@/app/components/plate-ui/code-syntax-leaf';
import { ExcalidrawElement } from '@/app/components/plate-ui/excalidraw-element';
import { HrElement } from '@/app/components/plate-ui/hr-element';
import { ImageElement } from '@/app/components/plate-ui/image-element';
import { LinkElement } from '@/app/components/plate-ui/link-element';
import { LinkFloatingToolbar } from '@/app/components/plate-ui/link-floating-toolbar';
import { ToggleElement } from '@/app/components/plate-ui/toggle-element';
import { ColumnGroupElement } from '@/app/components/plate-ui/column-group-element';
import { ColumnElement } from '@/app/components/plate-ui/column-element';
import { HeadingElement } from '@/app/components/plate-ui/heading-element';
import { MediaEmbedElement } from '@/app/components/plate-ui/media-embed-element';
import { MentionElement } from '@/app/components/plate-ui/mention-element';
import { MentionInputElement } from '@/app/components/plate-ui/mention-input-element';
import { ParagraphElement } from '@/app/components/plate-ui/paragraph-element';
import { TableElement } from '@/app/components/plate-ui/table-element';
import { TableRowElement } from '@/app/components/plate-ui/table-row-element';
import {
  TableCellElement,
  TableCellHeaderElement,
} from '@/app/components/plate-ui/table-cell-element';
import { TodoListElement } from '@/app/components/plate-ui/todo-list-element';
import { CodeLeaf } from '@/app/components/plate-ui/code-leaf';
import { CommentLeaf } from '@/app/components/plate-ui/comment-leaf';
import { CommentsPopover } from '@/app/components/plate-ui/comments-popover';
import { HighlightLeaf } from '@/app/components/plate-ui/highlight-leaf';
import { KbdLeaf } from '@/app/components/plate-ui/kbd-leaf';
import { Editor } from '@/app/components/plate-ui/editor';
import { FixedToolbar } from '@/app/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/app/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@/app/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/app/components/plate-ui/floating-toolbar-buttons';
import { withPlaceholders } from '@/app/components/plate-ui/placeholder';
import { withDraggables } from '@/app/components/plate-ui/with-draggables';
import { EmojiInputElement } from '@/app/components/plate-ui/emoji-input-element';
import { TooltipProvider } from '@/app/components/plate-ui/tooltip';
import { useState } from 'react';
import { TextType } from '../_related/type';
import ContainedButton from '@/app/components/button/PrimaryContainedButton';
import { BASE_URL } from '@/app/constant';
import { Title, WriteSection, WriteSectionHeader } from '../_related/style';
import OutlinedInput from '@/app/components/input/OutlinedInput';

const plugins = createPlugins(
  [
    createParagraphPlugin(),
    createHeadingPlugin(),
    createBlockquotePlugin(),
    createCodeBlockPlugin(),
    createHorizontalRulePlugin(),
    createLinkPlugin({
      renderAfterEditable: LinkFloatingToolbar as RenderAfterEditable,
    }),
    createImagePlugin(),
    createExcalidrawPlugin(),
    createTogglePlugin(),
    createColumnPlugin(),
    createMediaEmbedPlugin(),
    createCaptionPlugin({
      options: {
        pluginKeys: [
          // ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED
        ],
      },
    }),
    createMentionPlugin(),
    createTablePlugin(),
    createTodoListPlugin(),
    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createCodePlugin(),
    createSubscriptPlugin(),
    createSuperscriptPlugin(),
    createFontColorPlugin(),
    createFontBackgroundColorPlugin(),
    createFontSizePlugin(),
    createHighlightPlugin(),
    createKbdPlugin(),
    createAlignPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3
          ],
        },
      },
    }),
    createIndentPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_BLOCKQUOTE, ELEMENT_CODE_BLOCK
          ],
        },
      },
    }),
    createIndentListPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_BLOCKQUOTE, ELEMENT_CODE_BLOCK
          ],
        },
      },
    }),
    createLineHeightPlugin({
      inject: {
        props: {
          defaultNodeValue: 1.5,
          validNodeValues: [1, 1.2, 1.5, 2, 3],
          validTypes: [
            ELEMENT_PARAGRAPH,
            // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3
          ],
        },
      },
    }),
    createAutoformatPlugin({
      options: {
        rules: [
          // Usage: https://platejs.org/docs/autoformat
        ],
        enableUndoOnDelete: true,
      },
    }),
    createBlockSelectionPlugin({
      options: {
        sizes: {
          top: 0,
          bottom: 0,
        },
      },
    }),
    createDndPlugin({
      options: { enableScroller: true },
    }),
    createEmojiPlugin(),
    createExitBreakPlugin({
      options: {
        rules: [
          {
            hotkey: 'mod+enter',
          },
          {
            hotkey: 'mod+shift+enter',
            before: true,
          },
          {
            hotkey: 'enter',
            query: {
              start: true,
              end: true,
              // allow: KEYS_HEADING,
            },
            relative: true,
            level: 1,
          },
        ],
      },
    }),
    createNodeIdPlugin(),
    createResetNodePlugin({
      options: {
        rules: [
          // Usage: https://platejs.org/docs/reset-node
        ],
      },
    }),
    createDeletePlugin(),
    createSoftBreakPlugin({
      options: {
        rules: [
          { hotkey: 'shift+enter' },
          {
            hotkey: 'enter',
            query: {
              allow: [
                // ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD
              ],
            },
          },
        ],
      },
    }),
    createTabbablePlugin(),
    createTrailingBlockPlugin({
      options: { type: ELEMENT_PARAGRAPH },
    }),
    createCommentsPlugin(),
    createDeserializeDocxPlugin(),
    createDeserializeCsvPlugin(),
    createDeserializeMdPlugin(),
    createJuicePlugin(),
  ],
  {
    components: withDraggables(
      withPlaceholders({
        [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
        [ELEMENT_CODE_BLOCK]: CodeBlockElement,
        [ELEMENT_CODE_LINE]: CodeLineElement,
        [ELEMENT_CODE_SYNTAX]: CodeSyntaxLeaf,
        [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
        [ELEMENT_HR]: HrElement,
        [ELEMENT_IMAGE]: ImageElement,
        [ELEMENT_LINK]: LinkElement,
        [ELEMENT_TOGGLE]: ToggleElement,
        [ELEMENT_COLUMN_GROUP]: ColumnGroupElement,
        [ELEMENT_COLUMN]: ColumnElement,
        [ELEMENT_H1]: withProps(HeadingElement, { variant: 'h1' }),
        [ELEMENT_H2]: withProps(HeadingElement, { variant: 'h2' }),
        [ELEMENT_H3]: withProps(HeadingElement, { variant: 'h3' }),
        [ELEMENT_H4]: withProps(HeadingElement, { variant: 'h4' }),
        [ELEMENT_H5]: withProps(HeadingElement, { variant: 'h5' }),
        [ELEMENT_H6]: withProps(HeadingElement, { variant: 'h6' }),
        [ELEMENT_MEDIA_EMBED]: MediaEmbedElement,
        [ELEMENT_MENTION]: MentionElement,
        [ELEMENT_MENTION_INPUT]: MentionInputElement,
        [ELEMENT_PARAGRAPH]: ParagraphElement,
        [ELEMENT_TABLE]: TableElement,
        [ELEMENT_TR]: TableRowElement,
        [ELEMENT_TD]: TableCellElement,
        [ELEMENT_TH]: TableCellHeaderElement,
        [ELEMENT_TODO_LI]: TodoListElement,
        [MARK_BOLD]: withProps(PlateLeaf, { as: 'strong' }),
        [MARK_CODE]: CodeLeaf,
        [MARK_COMMENT]: CommentLeaf,
        [MARK_HIGHLIGHT]: HighlightLeaf,
        [MARK_ITALIC]: withProps(PlateLeaf, { as: 'em' }),
        [MARK_KBD]: KbdLeaf,
        [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: 's' }),
        [MARK_SUBSCRIPT]: withProps(PlateLeaf, { as: 'sub' }),
        [MARK_SUPERSCRIPT]: withProps(PlateLeaf, { as: 'sup' }),
        [MARK_UNDERLINE]: withProps(PlateLeaf, { as: 'u' }),
      })
    ),
  }
);

const initialValue = [
  {
    id: '1',
    type: 'p',
    children: [{ text: 'Hello, World!' }],
  },
];

export function PlateEditor() {
  const [text, setText] = useState<TextType>();
  console.log(text);

  const addFile = async () => {
    await fetch(`${BASE_URL}/api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fileName: '첫 게시글', text }),
    }).then((res) => res.json());
  };

  return (
    <WriteSection>
      <WriteSectionHeader>
        <Title placeholder='Title' />
        <ContainedButton onClick={addFile} label='글쓰기' />
      </WriteSectionHeader>
      <TooltipProvider>
        <DndProvider backend={HTML5Backend}>
          <CommentsProvider users={{}} myUserId='1'>
            <Plate
              plugins={plugins}
              initialValue={initialValue}
              onChange={(newValue) => setText(newValue)}
              // readOnly
            >
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