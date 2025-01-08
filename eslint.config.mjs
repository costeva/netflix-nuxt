// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "nuxt/prefer-import-meta": "error",
    "no-console": "warn",
    "no-unused-vars": "warn",
    "vue/attributes-order": "warn",
    "vue/attribute-hyphenation": "off",
    "vue/html-self-closing": "off",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
});
