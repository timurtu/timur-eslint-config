#!/usr/bin/env node

const child_process = require('child_process')

const dependencies = [
  'prettier-eslint-cli',
  'eslint-config-standard',
  'eslint-plugin-import',
  'eslint-plugin-node',
  'eslint-plugin-promise',
  'eslint-plugin-react',
  'timur-eslint-config'
]

child_process.execSync(
  `yarn add ${dependencies.join(' ')} -D && ` +
  'cp ./node_modules/timur-eslint-config/.eslintrc.js .'
)
