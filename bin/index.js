#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
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

child_process.execSync(`yarn add ${dependencies.join(' ')} -D`)

child_process.execSync('cp ./node_modules/timur-eslint-config/.eslintrc.js .')