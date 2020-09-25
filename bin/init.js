#!/usr/bin/env node
const chalk = require('chalk');
const download = require('download-git-repo');
const ora = require('ora');
function init(name,config){
	function readDirList(){
		const spinner = ora('正在初始化').start();
		spinner.color = "yellow";
		let gitUrl = config.isSSR.toLowerCase()==='y'?'direct:https://github.com/qwerUser/admin-fe-ssr-template.git#master':'direct:https://github.com/qwerUser/admin-fe-template.git#master';
		download(gitUrl, name, { clone: true }, function (err) {
			spinner.stop();
			if(err){
				console.log(chalk.red('创建失败，该项目名已存在'));
				return;
			}
			console.log(chalk.green('创建完成'))
		})
		
	}
	readDirList();
}

module.exports = init;