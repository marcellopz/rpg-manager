import React, { useEffect, useRef, useContext, memo, useCallback } from "react";
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
import SaveIsNeededDialog from "../../dialogs/SaveIsNeededDialog";

function TextDetails() {
  const mdxRef = useRef<MDXEditorMethods>(null);
  const { id } = useParams();
  const {
    catTab,
    publicSelected,
    needSaveDialogOpen,
    setNeedSaveDialogOpen,
    setCanTabChange,
  } = useContext(DetailsContext);
  const [originalContent, setOriginalContent] = React.useState<string>("");
  const [currentContent, setCurrentContent] = React.useState<string>("");

  useEffect(() => {
    // mdxRef?.current?.setMarkdown?.(content);
    loadMarkdown();
  }, [catTab.tabId]);

  useEffect(() => {
    setCanTabChange(originalContent === currentContent);
    if (needSaveDialogOpen) {
      setNeedSaveDialogOpen(originalContent !== currentContent);
    }

    const handleClick = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLElement &&
        !event.target.closest(".markdown-editor")
      ) {
        setNeedSaveDialogOpen(originalContent !== currentContent);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [currentContent, originalContent]);

  // useeffect with event listeners
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

  const loadMarkdown = () => {
    getTabContent(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      publicSelected ? "" : (auth.currentUser?.uid as string)
    ).then((res) => {
      mdxRef?.current?.setMarkdown?.(res);
      setOriginalContent(res);
      // fetchAll();
    });
  };

  const saveMarkdown = useCallback(() => {
    const content = mdxRef?.current?.getMarkdown?.();
    saveTabContent(
      id as string,
      catTab.categoryId,
      catTab.tabId,
      publicSelected ? "" : (auth.currentUser?.uid as string),
      content as string
    ).then(() => {
      setOriginalContent(content ?? "");
      // fetchAll();
    });
  }, [currentContent, catTab, publicSelected, id]);

  return (
    <>
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
                    onClick={() => saveMarkdown()}
                    className="small-button"
                  >
                    💾
                  </span>
                  {/* <span
                    onClick={loadMarkdown}
                    className="small-button"
                  >
                    🔄
                  </span> */}
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
        onChange={setCurrentContent}
        // onBlur={(e) => {
        //   if (originalContent !== currentContent && e.relatedTarget === null) {
        //     setNeedSaveDialogOpen(true);
        //   }
        // }}
      />
      <SaveIsNeededDialog
        open={needSaveDialogOpen}
        onClose={() => setNeedSaveDialogOpen(false)}
        save={saveMarkdown}
        discard={() => {
          mdxRef?.current?.setMarkdown?.(originalContent);
        }}
      />
    </>
  );
}

export default memo(TextDetails);
