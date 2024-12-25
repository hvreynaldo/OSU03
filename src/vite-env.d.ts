/// <reference types="vite/client" />

interface Window {
  Rumble?: (command: string, options: { video: string; div: string }) => void;
  _Rumble?: string;
}