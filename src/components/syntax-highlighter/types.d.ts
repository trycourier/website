export interface ISyntaxHighlighterProps {
  title: string;
  language: string;
  code: string;
  onChange?: (newValue: string) => void;
}