#!/usr/bin/env node
import { Command } from 'commander';
import inquirer from 'inquirer';
import path from 'path';
import fse from 'fs-extra'
const program = new Command();
program
  .name('cli-test')
  .description('This is a simple cli test demo!')
  .version('0.0.1')
program.command('test')
  .description('这是一个，子命令描述信息')
  .option('--first', '这是其中一个option选项')
  .option('--ethan', '这是其中一个option选项')
  .action((str, opt) => {
    console.log(str)
  })
program.parse();


// inquirer.prompt({
//   type: 'input',
//   name: 'name',
//   message: '请输入应用名称',
//   default: 'test-app'
// }).then(answers => {
//   const __dirname = path.dirname(new URL(import.meta.url).pathname);
//   // 模板目录路径
//   const destUrl = path.join(__dirname, 'template');
//   console.log(destUrl)
//   // 生成文件目录
//   // process.cwd() 对应控制台所在目录
//   const projectDir = path.join(process.cwd(), answers.name); // 生成项目目录路径
//   // 复制模板目录到项目目录
//   // fse.copySync(destUrl, projectDir);
//   // 从模版目录中读取文件
//   console.log(answers)
// })