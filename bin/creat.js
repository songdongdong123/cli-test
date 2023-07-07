
import { spawn } from 'child_process';
import download from 'download-git-repo';
import shell from 'shelljs';
import chalk from 'chalk';
import ora from 'ora';
const create = (name, opt) => {
  return new Promise((resolve, reject) => {
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
        // 下载远程配置
        const repo = `songdongdong123/react-config-template`; // 远程 Git 仓库地址
        const dest = `./${name}`; // 本地目标目录
        const spinner = ora(`正在下载配置文件...`).start();
        download(repo, dest, (err) => {
          if (err) {
            spinner.fail(`下载配置文件失败！`);
            console.error(err);
          } else {
            spinner.text = `下载模板成功！`;
            spinner.text = chalk.green(`已完成项目配置更新！！！！`);
           // 更新依赖资源
            spinner.text = `开始更新依赖资源...`;
            const result = shell.exec(`cd ./${name} && yarn install && yarn format`);
            if (result) {
              spinner.succeed('资源更新成功！！！');
              resolve(true)
            } else {
              reject(new Error({
                message: '刚更新失败'
              }))
              spinner.fail(`资源更新失败，请清楚缓存后重试！！！`);
            }
          }
        });
      }
    });
  })
}
export default create;
