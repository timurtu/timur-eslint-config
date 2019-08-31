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
  'eslint-plugin-react'
]

child_process.execSync(`yarn add ${dependencies.join(' ')} -D`)

const prefix = child_process.execSync('npm get prefix', { encoding: 'utf8' }).trim()
const timurConfigPath = path.join(prefix, 'lib/node_modules/timur-eslint-config/.eslintrc.js')
const timurConfigContents = fs.readFileSync(timurConfigPath, 'utf8')
const localConfigPath = process.cwd() + '/.eslintrc.js'

fs.writeFileSync(localConfigPath, timurConfigContents, {
  encoding: 'utf8',
  flag: 'w+'
})
