import React, { useEffect, useRef, useContext } from "react";
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
import SeePastVersionsDialog from "../../dialogs/SeePastVersionsDialog";

type StatesRef = {
  id: string;
  originalContent: string;
  currentContent: string;
  tabId: string;
  categoryId: string;
  publicSelected: boolean;
};

function TextDetails() {
  const mdxRef = useRef<MDXEditorMethods>(null);
  const { id } = useParams();
  const {
    catTab,
    publicSelected,
    needSaveDialogOpen,
    setNeedSaveDialogOpen,
    setCanTabChange,
    selectedData,
  } = useContext(DetailsContext);
  const [originalContent, setOriginalContent] = React.useState<string>("");
  const [currentContent, setCurrentContent] = React.useState<string>("");
  const [pastVersionsOpen, setPastVersionsOpen] =
    React.useState<boolean>(false);

  const currentStatesRef = useRef<StatesRef>();

  useEffect(() => {
    loadMarkdown();
  }, [catTab.tabId, selectedData]);

  useEffect(() => {
    currentStatesRef.current = {
      id: id as string,
      originalContent,
      currentContent,
      tabId: catTab.tabId,
      categoryId: catTab.categoryId,
      publicSelected,
    };
  }, [
    id,
    catTab.categoryId,
    catTab.tabId,
    publicSelected,
    originalContent,
    currentContent,
  ]);

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
      publicSelected ? "" : (auth.currentUser?.uid as string) ?? "guest"
    ).then((res) => {
      mdxRef?.current?.setMarkdown?.(res);
      setOriginalContent(res);
      // fetchAll();
    });
  };

  const saveMarkdown = () => {
    const content = mdxRef?.current?.getMarkdown?.();
    if (!currentStatesRef.current) return;
    saveTabContent(
      currentStatesRef.current.id,
      currentStatesRef.current.categoryId,
      currentStatesRef.current.tabId,
      currentStatesRef.current.publicSelected
        ? ""
        : (auth.currentUser?.uid as string),
      currentStatesRef.current.currentContent as string
    ).then(() => {
      setOriginalContent(content ?? "");
    });
  };

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
                    onClick={() => {
                      saveMarkdown();
                    }}
                    className="small-button"
                  >
                    💾
                  </span>
                  <span
                    className="small-button"
                    onClick={() => setPastVersionsOpen(true)}
                  >
                    📜
                  </span>
                  {/* <span
                    onClick={loadMarkdownWithRefs}
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
          loadMarkdown();
        }}
      />
      <SeePastVersionsDialog
        open={pastVersionsOpen}
        onClose={() => setPastVersionsOpen(false)}
      />
    </>
  );
}

export default TextDetails;
