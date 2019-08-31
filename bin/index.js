#!/usr/bin/env node

const path = require('path')
const child_process = require('child_process')

child_process.execSync('yarn add prettier-eslint-cli -D')

console.log(process.cwd())
console.log(path.resolve('.eslintrc.js'))
