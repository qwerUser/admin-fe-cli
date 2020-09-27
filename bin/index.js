#!/usr/bin/env node
const commander = require('commander');
const ora = require('ora');
const chalk = require('chalk');
const inquirer = require('inquirer');
const package = require('../package.json');

commander.version(package.version,'-v --version');

// const spinner = ora('helo world').start();
// spinner.color = "yellow";
// console.log(chalk.rgb(125,32,123).bgRgb(134,89,234)('\n开始'))
// setTimeout(()=>{
// 	spinner.stop();
// },3000)

commander.command('init <name>').action(name => {
	inquirer.prompt([
		{
			type: 'input',
			name: 'isSSR',
			message: '是否使用SSR(Y/N)：'
		}
	]).then(answer=>{
		require('./init')(name,answer)
	})
	// inquirer.prompt([
	// 	{
	// 		type: 'input',
	// 		name: 'useWebpack',
	// 		message: '是否使用webpack(Y/N)：'
	// 	}
	// ]).then(answer=>{
	// 	require('./init')(name,answer)
	// })
})

commander.parse(process.argv)
