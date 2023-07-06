
import { spawn } from 'child_process';
import download from 'download-git-repo';
import shell from 'shelljs';
import chalk from 'chalk';
import ora from 'ora';
const create = (name, opt) => {
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
          spinner.succeed(`下载模板 ${template} 成功！`);
          console.log(chalk.green(`已完成项目配置！！！！`));
  
          // 更新依赖资源......
          const spinner = ora(`开始更新依赖资源...`).start();
          const result = shell.exec('yarn install');
          console.log('result:', result);
          if (result) {
            spinner.succeed('资源更新成功！！！')
          } else {
            spinner.fail(`资源更新失败，请清楚缓存后重试！！！`);
          }
        }
      });
    }
  });
}
export default create;
