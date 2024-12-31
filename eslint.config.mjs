import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import i18n from "eslint-plugin-i18n";

export default [
  {
    files: ["**/*.ts"],
  },
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
      i18n: i18n,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "import",
          format: ["camelCase", "PascalCase"],
        },
      ],

      curly: "warn",
      eqeqeq: "warn",
      "no-throw-literal": "warn",
      semi: "warn",
      "no-console": "warn", // Deshabilita el uso de console
      "no-debugger": "warn", // Deshabilita el uso de debugger
      "no-trailing-spaces": "warn", // Deshabilita los espacios en blanco al final de las líneas
      "no-multiple-empty-lines": ["warn", { max: 1 }], // Deshabilita múltiples líneas vacías
      "space-before-function-paren": ["warn", "never"], // Enforce un espaciado consistente antes del paréntesis de apertura de la definición de función
      "arrow-spacing": ["warn", { before: true, after: true }], // Enforce un espaciado consistente antes y después de la flecha en las funciones flecha
      "object-curly-spacing": ["warn", "always"], // Enforce un espaciado consistente dentro de las llaves
      "space-in-parens": ["warn", "never"], // Enforce un espaciado consistente dentro de los paréntesis
      "space-infix-ops": "warn", // Requiere espaciado alrededor de los operadores infijos
    },
    settings: {
      i18n: {
        locale: "es-MX", // Configura el idioma a español
      },
    },
  },
];
