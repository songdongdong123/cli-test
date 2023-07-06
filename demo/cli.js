#!/usr/bin/env node
import { Command } from 'commander';
import inquirer from 'inquirer';
import path from 'path';
import fse from 'fs-extra'
const program = new Command();
// 定义主命令信息
program
  .name('cli-test')
  .description('fe is a simple cli test demo!')
  .version('0.0.1')
  .option('-C, --ccc', '这是其中一个option选项')
  .action((str, opt) => {
    console.log(str, '主命令')
  })

// 定义子命令信息
program.command('create <name>')
  .description('创建项目')
  .option('--template <name>', '使用什么模板') // 命令选项
  .action((str, opt) => { // 命令操作（用户输入命令后具体会做一些什么事情）
    console.log(str,opt, `创建${str}`)
  })
  /**
   * fe create app-demo  ---->  app-demo {} 创建app-demo
   * fe create app-demo --template ts ---->  app-demo { template: 'ts' } 创建app-demo
  */
program.command('remove <name>')
  .description('删除项目')
  .option('-w, --way', '使用什么方式删除') // fe remove app-name -w xxx  or fe remove app-name -way xxx
  .option('-c, --count <number>', '删除多少个') // 如何加上<number>  fe remove app-name -c 100  最后action里面的opt参数，将输出 { count: '100' }， 否则输出{ count: true}
  .action((str, opt) => {
    console.log(str,opt, `删除${str}`)
  })
/**
 * fe remove app-name  ---->  app-name {} 删除app-name
 * fe remove app-name -w ----> app-name { way: true } 删除app-name
 * fe remove app-name -w shell
*/

// 解析命令行参数并执行对应的命令
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
//   fse.copySync(destUrl, projectDir);
//   // 从模版目录中读取文件
//   console.log(answers)
// })