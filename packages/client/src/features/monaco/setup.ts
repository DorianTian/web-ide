import * as monaco from 'monaco-editor';
import './workerSetup';
import { darkTheme } from './themes/darkTheme';
import { lightTheme } from './themes/lightTheme';
import { sqlLanguageDef } from './languages/sql/monarchTokens';
import { registerSqlCompletionProvider } from './languages/sql/completionProvider';
import { registerSqlFormattingProvider } from './languages/sql/formattingProvider';

let initialized = false;

export function setupMonaco(): void {
  if (initialized) return;
  initialized = true;

  // Register themes
  monaco.editor.defineTheme('data-ide-dark', darkTheme);
  monaco.editor.defineTheme('data-ide-light', lightTheme);

  // Override built-in SQL tokenizer with richer Monarch definition
  monaco.languages.setMonarchTokensProvider('sql', sqlLanguageDef);

  // Register providers
  registerSqlCompletionProvider();
  registerSqlFormattingProvider();
}

export { monaco };
