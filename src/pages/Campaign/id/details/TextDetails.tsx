import { useEffect, useRef, useContext } from "react";
import "@mdxeditor/editor/style.css";
import { toolbarPlugin } from "@mdxeditor/editor/plugins/toolbar";
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
} from "@mdxeditor/editor";
import { DetailsContext } from "../../context/DetailsContext";
import {
  getTabContent,
  saveTabContent,
} from "../../../../contexts/firebase/database";
import { useParams } from "react-router-dom";
import auth from "../../../../contexts/firebase/firebase";

interface TextDetailsProps {
  content: string;
}

export default function TextDetails({ content }: TextDetailsProps) {
  const mdxRef = useRef<MDXEditorMethods>(null);
  const { id } = useParams();
  const { catTab, publicSelected } = useContext(DetailsContext);

  useEffect(() => {
    mdxRef?.current?.setMarkdown?.(content);
  }, [content]);

  const loadMarkdown = () => {
    getTabContent(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      publicSelected ? "" : (auth.currentUser?.uid as string)
    ).then((res) => {
      mdxRef?.current?.setMarkdown?.(res);
    });
  };

  const saveMarkdown = () => {
    saveTabContent(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      publicSelected ? "" : (auth.currentUser?.uid as string),
      mdxRef?.current?.getMarkdown?.() as string
    );
  };

  return (
    <MDXEditor
      ref={mdxRef}
      className="markdown-editor"
      markdown={content}
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <Separator />
              <div className="flex">
                <span
                  onClick={saveMarkdown}
                  className="small-button"
                >
                  💾
                </span>
                <span
                  onClick={loadMarkdown}
                  className="small-button"
                >
                  🔄
                </span>
              </div>
              <Separator />
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
            </>
          ),
        }),
        directivesPlugin({
          directiveDescriptors: [AdmonitionDirectiveDescriptor],
        }),
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
  );
}
