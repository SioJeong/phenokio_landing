/// <reference types="vite/client" />

declare global {
  interface Window {
    fbq?: (
      command: string,
      event: string,
      parameters?: Record<string, unknown>,
    ) => void;
  }
}

export { };

