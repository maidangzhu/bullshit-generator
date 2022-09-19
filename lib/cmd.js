import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';

// 定义帮助的内容
const sections = [
  {
    header: '狗屁不通文章生成器',
    content: '生成随机的文章段落用于测试',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'title',
        typeLabel: '{underline string}',
        description: '文章的主题。',
      },
      {
        name: 'min',
        typeLabel: '{underline number}',
        description: '文章最小字数。',
      },
      {
        name: 'max',
        typeLabel: '{underline number}',
        description: '文章最大字数。',
      },
    ],
  },
];

const optionDefinitions = [
  {name: 'help'}, // help命令配置
  {name: 'title', alias: 't', type: String},
  {name: 'min', type: Number},
  {name: 'max', type: Number},
]

// 获取命令行的输入
const options = commandLineArgs(optionDefinitions);
const usage = commandLineUsage(sections); // 生成帮助文本

// 如果输入的是help，就打印帮助文本
if ('help' in options) {
  console.log(usage);
  process.exit();
  // 终止程序
}

export {options};
