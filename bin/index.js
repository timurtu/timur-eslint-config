#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const child_process = require('child_process')

// child_process.execSync('yarn add prettier-eslint-cli -D')
//
// const localConfigPath = path.resolve('.eslintrc.js')
//
// if (fs.existsSync(localConfigPath)) {
//   fs.unlinkSync(localConfigPath)
// }
//
// child_process.execSync(`touch ${localConfigPath}`)

fs.writeFileSync(path.resolve('.eslintrc.js'), fs.readFileSync('.eslintrc.js', 'utf8'), {
  encoding: 'utf8',
  flag: 'w+'
})
