#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const child_process = require('child_process')

// child_process.execSync('yarn add prettier-eslint-cli -D')

// const localConfigPath = path.resolve('.eslintrc.js')

// if (fs.existsSync(localConfigPath)) {
//   fs.unlinkSync(localConfigPath)
// }
//
// child_process.execSync(`touch ${localConfigPath}`)

// console.log('localConfigPath', localConfigPath)
// const configContents = fs.readFileSync('.eslintrc.js', 'utf8')
//
// console.log('configContents', configContents)
//


const prefix = child_process.execSync('npm get prefix', { encoding: 'utf8' }).trim()
const timurConfigPath = path.join(prefix, 'lib/node_modules/timur-eslint-config/.eslintrc.js')
const timurConfigContents = fs.readFileSync(timurConfigPath, 'utf8')
const localConfigPath = process.cwd() + '/.eslintrc.js'

fs.writeFileSync(localConfigPath, timurConfigContents, {
  encoding: 'utf8',
  flag: 'w+'
})
