import { useEffect, useRef, useCallback } from 'react';
import { setupMonaco, monaco } from '../../features/monaco/setup';
import { useEditorStore } from '../../stores/useEditorStore';
import { useUIStore } from '../../stores/useUIStore';
import { fileApi } from '../../services/api';
import styles from './MonacoEditor.module.css';

setupMonaco();

export function MonacoEditor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const disposablesRef = useRef<monaco.IDisposable[]>([]);
  const isSettingModelRef = useRef(false);

  const activeTabId = useEditorStore((s) => s.activeTabId);
  const tabs = useEditorStore((s) => s.tabs);
  const setDirty = useEditorStore((s) => s.setDirty);
  const saveViewState = useEditorStore((s) => s.saveViewState);
  const getViewState = useEditorStore((s) => s.getViewState);
  const pinTab = useEditorStore((s) => s.pinTab);
  const theme = useUIStore((s) => s.theme);

  const activeTab = activeTabId ? tabs.get(activeTabId) : null;

  // Create editor instance
  useEffect(() => {
    if (!containerRef.current || editorRef.current) return;

    const editor = monaco.editor.create(containerRef.current, {
      theme,
      fontSize: 14,
      fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
      fontLigatures: true,
      minimap: { enabled: true, maxColumn: 80 },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 4,
      insertSpaces: true,
      renderWhitespace: 'selection',
      bracketPairColorization: { enabled: true },
      guides: { bracketPairs: true, indentation: true },
      smoothScrolling: true,
      cursorBlinking: 'smooth',
      cursorSmoothCaretAnimation: 'on',
      suggest: { showSnippets: true, showKeywords: true },
      quickSuggestions: true,
      wordWrap: 'off',
      lineNumbers: 'on',
      folding: true,
      foldingStrategy: 'auto',
      links: true,
      formatOnPaste: false,
      formatOnType: false,
    });

    editorRef.current = editor;

    // Register save command
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      const state = useEditorStore.getState();
      const tabId = state.activeTabId;
      if (!tabId) return;
      const tab = state.tabs.get(tabId);
      if (!tab || !tab.isDirty) return;

      const model = editor.getModel();
      if (!model) return;

      fileApi.updateFile(tab.filePath, model.getValue()).then(() => {
        useEditorStore.getState().setDirty(tabId, false);
      });
    });

    // Register format command
    editor.addCommand(
      monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KeyF,
      () => {
        editor.getAction('editor.action.formatDocument')?.run();
      },
    );

    return () => {
      disposablesRef.current.forEach((d) => d.dispose());
      disposablesRef.current = [];
      editor.dispose();
      editorRef.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Theme sync
  useEffect(() => {
    monaco.editor.setTheme(theme);
  }, [theme]);

  // Tab switching — set model
  const loadModel = useCallback(
    async (tabId: string, filePath: string, language: string) => {
      const editor = editorRef.current;
      if (!editor) return;

      isSettingModelRef.current = true;

      // Check if model already exists
      const uri = monaco.Uri.file(filePath);
      let model = monaco.editor.getModel(uri);

      if (!model) {
        try {
          const fileData = await fileApi.readFile(filePath);
          model = monaco.editor.createModel(fileData.content, language, uri);
        } catch {
          model = monaco.editor.createModel('', language, uri);
        }
      }

      // Save current view state before switching
      const currentTabId = useEditorStore.getState().activeTabId;
      if (currentTabId && currentTabId !== tabId) {
        const vs = editor.saveViewState();
        if (vs) {
          saveViewState(currentTabId, {
            scrollTop: vs.viewState.scrollTop ?? 0,
            scrollLeft: vs.viewState.scrollLeft ?? 0,
            cursorPosition: {
              lineNumber: vs.cursorState[0]?.position.lineNumber ?? 1,
              column: vs.cursorState[0]?.position.column ?? 1,
            },
            selections: [],
          });
        }
      }

      editor.setModel(model);

      // Restore view state
      const savedVS = getViewState(tabId);
      if (savedVS) {
        editor.setScrollPosition({ scrollTop: savedVS.scrollTop, scrollLeft: savedVS.scrollLeft });
        editor.setPosition({
          lineNumber: savedVS.cursorPosition.lineNumber,
          column: savedVS.cursorPosition.column,
        });
      }

      // Dispose old listeners for this model
      disposablesRef.current.forEach((d) => d.dispose());
      disposablesRef.current = [];

      // Listen for content changes
      disposablesRef.current.push(
        model.onDidChangeContent(() => {
          if (isSettingModelRef.current) return;
          setDirty(tabId, true);
          pinTab(tabId);
        }),
      );

      // Listen for cursor position changes
      disposablesRef.current.push(
        editor.onDidChangeCursorPosition((e) => {
          saveViewState(tabId, {
            scrollTop: editor.getScrollTop(),
            scrollLeft: editor.getScrollLeft(),
            cursorPosition: {
              lineNumber: e.position.lineNumber,
              column: e.position.column,
            },
            selections: [],
          });
        }),
      );

      isSettingModelRef.current = false;
      editor.focus();
    },
    [setDirty, saveViewState, getViewState, pinTab],
  );

  useEffect(() => {
    if (activeTab) {
      loadModel(activeTab.id, activeTab.filePath, activeTab.language);
    } else {
      editorRef.current?.setModel(null);
    }
  }, [activeTab?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={containerRef} className={styles.editor} />;
}
