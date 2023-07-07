### 本地执行
1. clone代码到本地后，在当前跟目录下，执行npm link
2. 执行fe
3. 控制台输出 ‘hello ethan-cli‘

### package.json中bin字段解释
bin 是一个在 package.json 文件中的属性，用于指定一个或多个可执行文件的路径。当你在全局安装一个包时，这些可执行文件将被添加到系统的 PATH 环境变量中，以便在命令行中直接使用。

### bin/cli.js中的文件头解释
文件以#!开头代表这个文件被当做一个执行文件来执行，可以当做脚本运行。后面的/usr/bin/env node代表这个文件用node执行，node基于用户安装根目录下的环境变量中查找：



# cra-perfect-react-app
基于create-react-app的一款脚手架，在这个基础，完成实现了以下能力：
1. 提供了统一的代码规范配置，保存时自动格式化；
2. 使用craco扩展webpack扩展配置，实现本地mock服务配置；
3. 创建函数组件的代码片段；
4. 统一的git commit 规范；
### 安装
要安装 cra-perfect-react-app，请运行以下命令：
```bash
  npm install -g cra-perfect-react-app

```
这将在您的系统上全局安装该软件包，使您可以在任何地方使用 cra-perfect-react-app 命令。

### 创建项目
要使用 cra-perfect-react-app 创建新项目，请运行以下命令：

```bash
  create-app create my-app --template ts

```
这将使用 TypeScript 模板创建一个名为 my-app 的新 React 项目。

### 运行项目
要运行项目，请导航到项目目录并运行以下命令：
```bash
  cd my-app && yarn start
```
这将启动开发服务器并在您的默认 Web 浏览器中打开项目。

### 使用代码片段快速创建函数组件
新建tsx文件，输入FC会自动补全一个简易的函数组件，如下：
```jsx
// demo.tsx
import React, { FC } from 'react';
const Demo: FC = props => {
  return <></>;
};
export default Demo;
  
```