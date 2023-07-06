#!/usr/bin/env node
import { Command } from 'commander';
import { spawn } from 'child_process';
import download from 'download-git-repo';
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
  .option('--template <template>', '使用什么模板,默认js，使用ts请使用 --template -ts') // 命令选项
  .action((name, opt) => { // 命令操作（用户输入命令后具体会做一些什么事情）

    const args = ['create-react-app', name]; 
    // 将项目名称和 --template ts 选项作为参数 传递给子进程
    if (opt.template === 'ts') {
      args.push('--template', 'typescript');
    }
    // 使用spawn创建子进程用来执行 npx create-react-app
    const craChild = spawn('npx', args, { stdio: 'inherit' });
    craChild.on('exit', (code) => {
      if (code !== 0) {
        console.error(`创建项目 ${name} 失败！`);
      } else {
        console.log(`创建项目 ${name} 成功！`);
      }
    });
    
    const formatChild = spawn('yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin');
    formatChild.on('exit', (code) => {
      if (code !== 0) {
        console.error('依赖安装失败！！！')
      } else {
        spawn('npx eslint --init')
      }
    })
  })
program.command('remove <name>')
  .description('删除项目')
  .option('-w, --way', '使用什么方式删除') // fe remove app-name -w xxx  or fe remove app-name -way xxx
  .option('-c, --count <number>', '删除多少个') // 如何加上<number>  fe remove app-name -c 100  最后action里面的opt参数，将输出 { count: '100' }， 否则输出{ count: true}
  .action((str, opt) => {
    console.log(str,opt, `删除${str}`)
  })
// 解析命令行参数并执行对应的命令
program.parse();