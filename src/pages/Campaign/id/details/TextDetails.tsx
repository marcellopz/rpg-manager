import { useEffect, useRef, useContext, memo } from "react";
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

function TextDetails() {
  const mdxRef = useRef<MDXEditorMethods>(null);
  const { id } = useParams();
  const { catTab, publicSelected } = useContext(DetailsContext);

  useEffect(() => {
    // mdxRef?.current?.setMarkdown?.(content);
    loadMarkdown();
  }, [catTab.tabId]);

  const loadMarkdown = () => {
    getTabContent(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      publicSelected ? "" : (auth.currentUser?.uid as string)
    ).then((res) => {
      console.log(res);
      mdxRef?.current?.setMarkdown?.(res);
      // fetchAll();
    });
  };

  const saveMarkdown = () => {
    saveTabContent(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      publicSelected ? "" : (auth.currentUser?.uid as string),
      mdxRef?.current?.getMarkdown?.() as string
    ).then(() => {
      // fetchAll();
    });
  };

  useEffect(() => {
    const handleSave = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
        saveMarkdown();
      }
    };

    window.addEventListener("keydown", handleSave);

    return () => {
      window.removeEventListener("keydown", handleSave);
    };
  }, []);

  return (
    <MDXEditor
      ref={mdxRef}
      className="markdown-editor"
      markdown=""
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
              {/* <InsertTable /> */}
              <InsertThematicBreak />
              <InsertAdmonition />
              <Separator />
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
      onBlur={() => {
        saveMarkdown();
      }}
    />
  );
}

export default memo(TextDetails);
