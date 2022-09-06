import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const url = import.meta.url; // 获取当前脚本文件的url
console.log('url: ' + url);
const path = resolve(dirname(fileURLToPath(url)), 'corpus/data.json');
console.log('path: ' + path);
const data = readFileSync(path, { encoding: 'utf-8' });
console.log(data);
