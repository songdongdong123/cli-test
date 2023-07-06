export const question = [
  {
    type: 'list',
    name: 'overwrite',
    message: '是否替换？',
    choices: ['YES', 'NO'], // choices不能是boolean类型的数组
    filter: (val) => {
      // 过滤用户输入
      // return 'hehe';
      return val;
    },
    validate: (val) => {
      // 一些校验操作
      return true;
    }
  }
];