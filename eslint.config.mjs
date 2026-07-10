// Flat config for the whole monorepo (lint from the root with `npm run lint`).
//
// Non-type-aware on purpose: the hand-written code (the transform pipeline,
// tts/sitemap generators, tests) is entirely synchronous — no async anywhere —
// so api's type-aware promise rules (no-floating-promises et al.) would add the
// projectService/tsconfig plumbing without catching anything. @eslint/js +
// typescript-eslint `recommended` (both non-type-aware) is the right baseline.
//
// The 12 MB generated `packages/cards/src/index.ts` and `latest-set/` are never
// linted — they're machine output (see CLAUDE.md).
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "**/dist/**",
      "packages/cards/src/**",
      "packages/cards/latest-set/**",
    ],
  },
  {
    files: ["**/*.ts"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    rules: {
      // Only push `const` when every var in a destructuring can be const;
      // don't fight mixed `let { a, b } =` where one member is reassigned.
      "prefer-const": ["error", { destructuring: "all" }],
      // `any` is a deliberate, pervasive escape hatch across the transform code.
      "@typescript-eslint/no-explicit-any": "off",
      // `@ts-*` comments are used intentionally against untyped source data.
      "@typescript-eslint/ban-ts-comment": "off",
      // Surface dead code as a warning, not a build-blocker; allow the
      // conventional `_` prefix escape.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
);
