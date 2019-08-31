#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const child_process = require('child_process')

child_process.execSync('yarn add prettier-eslint-cli -D')

fs.writeFileSync(path.resolve('.eslintrc.js'), fs.readFileSync('.eslintrc.js', 'utf8'))
