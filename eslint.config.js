import { globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  globalIgnores(["dist/**", ".astro/**", "archive/**", "public/**"]),
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
];
