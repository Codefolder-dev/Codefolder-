export type PlaygroundType = 'dsa' | 'coding' | 'web development';

export interface CodeEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
  onMount?: (editor: any, monaco: any) => void;
}

export interface PlaygroundSelectorProps {
  onSelect: (choice: PlaygroundType) => void;
}

export interface PlaygroundPageProps {
  selectedPlayground: PlaygroundType | null;
  setSelectedPlayground: React.Dispatch<React.SetStateAction<PlaygroundType | null>>;
}
