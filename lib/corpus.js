// dirname方法可以获得当前 JS 文件的目录，而resolve方法可以将 JS 文件目录和相对路径corpus/data.json拼在一起
import {dirname, resolve} from "path";
// 阅读文件
import {existsSync, mkdirSync, readFileSync, writeFileSync} from "fs";
// 获取当前脚本文件的url
import {fileURLToPath} from "url";
import moment from "moment";

// 在commonJS规范中，__dirname可以直接拿到当前脚本所在目录的路径
const __dirname = dirname(fileURLToPath(import.meta.url));

// 加载语料库
export function loadCorpus(src) {
  // 拼接成完整的路径
  const path = resolve(__dirname, '../', src);
  const data = readFileSync(path, {encoding: 'utf-8'});
  return JSON.parse(data);
}

// 保存语料库
export function saveCorpus(title, article) {
  // 拿到output目录的路径
  const outputDir = resolve(__dirname, '../output');
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
