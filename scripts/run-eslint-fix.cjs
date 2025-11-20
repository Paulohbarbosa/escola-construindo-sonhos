#!/usr/bin/env node
const { ESLint } = require('eslint');

(async function run() {
  try {
    const eslint = new ESLint({
      overrideConfigFile: '.eslintrc.cjs',
      fix: true,
      ignore: false,
    });
    const results = await eslint.lintFiles(['src/**/*.{js,jsx,ts,tsx}']);
    await ESLint.outputFixes(results);
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);
    if (resultText) console.log(resultText);
    const errorCount = ESLint.getErrorResults(results).length;
    process.exitCode = errorCount > 0 ? 1 : 0;
  } catch (err) {
    console.error(err);
    process.exitCode = 2;
  }
})();
