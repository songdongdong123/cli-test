#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import fse from 'fs-extra';
import ora from 'ora';
import shell from 'shelljs'
import create from './creat.js';
import { question } from './question.js';
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
    
    // 判断目录是否存在
    const projectPath = `./${name}`
    if (fse.pathExistsSync(projectPath)) {
      // 如果存在时，询问是否覆盖
      inquirer.prompt(question).then((answers) => {
        console.log(answers);
        if (answers.overwrite !== 'NO') {
          // console.log(chalk.cyan(`开始清理目录......`));
          const spinner = ora(`开始清理目录......`).start();
          const result = shell.exec(`rm -rf ./${name}`);
          if (result) {
            spinner.succeed(chalk.bgBlue('目录清理完成,开始创建项目..... '))
            create(name, opt).then(res => {
              if (res) {
                // 
              }
            }).catch(err => {
              console.log(chalk.bgRedBright(`资源更新失败，请清楚缓存后重试！！！`));
            });
          } else {
            spinner.fail(chalk.bgRed('创建失败！！！！'));
          }
        } else {
          console.log(chalk.bgCyan('取消创建！！！！'));
          process.exit(1);
        }
      })
    } else {
      create(name, opt);
    }
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