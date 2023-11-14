import { useState, useEffect, useRef } from 'react'
import '@mdxeditor/editor/style.css'
import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar'
import {
    MDXEditor,
    BoldItalicUnderlineToggles,
    UndoRedo,
    listsPlugin,
    quotePlugin,
    headingsPlugin,
    linkPlugin,
    markdownShortcutPlugin,
    ListsToggle,
    Separator,
    BlockTypeSelect,
    CreateLink,
    InsertImage,
    linkDialogPlugin,
    imagePlugin,
    tablePlugin,
    thematicBreakPlugin,
    frontmatterPlugin,
    InsertTable,
    InsertThematicBreak,
    InsertAdmonition,
    directivesPlugin,
    AdmonitionDirectiveDescriptor,
    MDXEditorMethods,
} from '@mdxeditor/editor'

interface TextDetailsProps {
    content: string;
}

export default function TextDetails({ content }: TextDetailsProps) {
    const mdxRef = useRef<MDXEditorMethods>(null)
    const [markdownVal, setMarkdownVal] = useState(content)

    useEffect(() => {
        setMarkdownVal(content)
        mdxRef?.current?.setMarkdown?.(content);
    }, [content])

    // console.log({ markdownVal });

    return (
        <MDXEditor
            ref={mdxRef}
            className='markdown-editor'
            markdown={markdownVal}
            onChange={(val) => setMarkdownVal(val)}
            plugins={[toolbarPlugin({
                toolbarContents: () => (<>
                    <UndoRedo />
                    <BoldItalicUnderlineToggles />
                    <ListsToggle />
                    <Separator />
                    <BlockTypeSelect />
                    <CreateLink />
                    <InsertImage />
                    <Separator />
                    <InsertTable />
                    <InsertThematicBreak />
                    <InsertAdmonition />
                </>)
            }),
            directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }),
            listsPlugin(),
            quotePlugin(),
            headingsPlugin(),
            linkPlugin(),
            linkDialogPlugin(),
            imagePlugin(),
            tablePlugin(),
            thematicBreakPlugin(),
            frontmatterPlugin(),
            markdownShortcutPlugin(),


            ]}
        // className='markdown-editor'
        />
    )
}
