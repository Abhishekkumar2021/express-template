#! /usr/bin/env node
const {execSync} = require('child_process')

const runCommand = command =>{
    try{
        execSync(`${command}`,{stdio:'inherit'})
    }
    catch(e){
        console.error(`Failed to execute`)
        return false
    }
    return true
}

const repoName = process.argv[2]
const gitCheckout = `git clone https://github.com/Abhishekkumar2021/express-server-template ${repoName} `
const removeExtra = `cd ${ repoName} && rm package.json README.md package-lock.json -rf .git`
const initGIT = `cd ${ repoName} && git init`
const initNPM = `cd ${ repoName} && npm init -y`
const installDependencies = ` cd ${ repoName} && npm i nodemon express dotenv body-parser cors mongoose`
console.log(`Building started code for you in ${repoName}`)

const checkedOut = runCommand(gitCheckout)
if(!checkedOut) process.exit(-1)
const removed = runCommand(removeExtra)
if(!removed) process.exit(-1)
const gitInitialized = runCommand(initGIT)
if(!gitInitialized) process.exit(-1)
const npmInitialized = runCommand(initNPM)
if(!npmInitialized) process.exit(-1)
const installed = runCommand(installDependencies)
if(!installed) process.exit(-1)
console.log(`Congratulations! You are ready to rock :)\nYou may start by typing\ncd ${repoName}\nnpx nodemon\n\nHappy hacking!`)


