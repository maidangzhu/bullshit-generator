import moment from 'moment';

// 阅读文件
import {readFileSync, writeFileSync, existsSync, mkdirSync} from 'fs';
// 获取当前脚本文件的url
import {fileURLToPath} from 'url';
// dirname方法可以获得当前 JS 文件的目录，而resolve方法可以将 JS 文件目录和相对路径corpus/data.json拼在一起
import {dirname, resolve} from 'path';

import {generate} from './lib/generator.js';
import {createRandomPicker} from './lib/random.js';

// 在commonJS规范中，__dirname可以直接拿到当前脚本所在目录的路径
const __dirname = dirname(fileURLToPath(import.meta.url));

function loadCorpus(src) {
  // 拼接成完整的路径
  const path = resolve(__dirname, src);
  const data = readFileSync(path, {encoding: 'utf-8'});
  return JSON.parse(data);
}

const corpus = loadCorpus('corpus/data.json');
const pickTitle = createRandomPicker(corpus.title);

const title = pickTitle();
const article = generate(title, {corpus, min: 300, max: 1000});

function saveCorpus(title, article) {
  // 拿到output目录的路径
  const outputDir = resolve(__dirname, 'output');
  // 拿到时间戳
  const time = moment().format('|YYYY-MM-DD|HH:mm:ss');
  // 拿到目标文件的路径
  const outputFile = resolve(outputDir, `${title}${time}.txt`);

  // 检查outputDir是否存在，没有则创建一个
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir);
  }

  // 拿到生成的文本
  const text = `${title}\n\n    ${article.join('\n    ')}`;
  // 将text写入outputFile文件中
  writeFileSync(outputFile, text);

  // 返回生成的文章文件路径
  return outputFile;
}

saveCorpus(title, article);
