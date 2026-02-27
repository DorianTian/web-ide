import * as monaco from 'monaco-editor';
import { format } from 'sql-formatter';

export function registerSqlFormattingProvider(): monaco.IDisposable {
  return monaco.languages.registerDocumentFormattingEditProvider('sql', {
    provideDocumentFormattingEdits(model) {
      const text = model.getValue();
      try {
        const formatted = format(text, {
          language: 'sql',
          tabWidth: 4,
          keywordCase: 'upper',
          linesBetweenQueries: 2,
        });
        return [
          {
            range: model.getFullModelRange(),
            text: formatted,
          },
        ];
      } catch {
        return [];
      }
    },
  });
}
