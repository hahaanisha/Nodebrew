// global.d.ts

export {};

declare global {
  interface Window {
    chatbase: any; // You can replace 'any' with a more specific type if available
  }

  interface HTMLScriptElement {
    domain: string;
  }
}
