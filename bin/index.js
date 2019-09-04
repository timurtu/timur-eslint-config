#!/usr/bin/env node

const exec = require('child_process').execSync

const dependencies = [
  'prettier-eslint-cli',
  'eslint-config-standard',
  'eslint-plugin-import',
  'eslint-plugin-node',
  'eslint-plugin-promise',
  'eslint-plugin-react',
  'timur-eslint-config'
]

exec(`yarn add ${dependencies.join(' ')} -D`)

exec('cp ./node_modules/timur-eslint-config/.eslintrc.js .')
