import type * as monaco from 'monaco-editor';

export const lightTheme: monaco.editor.IStandaloneThemeData = {
  base: 'vs',
  inherit: true,
  rules: [
    { token: 'comment', foreground: '008000', fontStyle: 'italic' },
    { token: 'keyword', foreground: '0000FF' },
    { token: 'string', foreground: 'A31515' },
    { token: 'number', foreground: '098658' },
    { token: 'type', foreground: '267F99' },
    { token: 'function', foreground: '795E26' },
    { token: 'variable', foreground: '001080' },
    // SQL tokens
    { token: 'keyword.sql', foreground: '0000FF', fontStyle: 'bold' },
    { token: 'predefined.sql', foreground: '795E26' },
    { token: 'string.sql', foreground: 'A31515' },
    { token: 'number.sql', foreground: '098658' },
    { token: 'comment.sql', foreground: '008000', fontStyle: 'italic' },
    { token: 'type.sql', foreground: '267F99' },
  ],
  colors: {
    'editor.background': '#FFFFFF',
    'editor.foreground': '#000000',
    'editor.lineHighlightBackground': '#F3F3F3',
    'editor.selectionBackground': '#ADD6FF',
    'editorCursor.foreground': '#000000',
    'editorLineNumber.foreground': '#237893',
    'editorWidget.background': '#F3F3F3',
    'editorSuggestWidget.background': '#F3F3F3',
    'editorSuggestWidget.border': '#C8C8C8',
    'editorSuggestWidget.selectedBackground': '#D6EBFF',
  },
};
