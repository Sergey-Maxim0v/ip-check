// /// <reference constants="vite/client" />

declare module "*.scss" {
  const classNames: Record<string, string>;
  export default classNames;
}
