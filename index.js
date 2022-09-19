import {generate} from './lib/generator.js';
import {createRandomPicker} from './lib/random.js';
import {loadCorpus, saveCorpus} from "./lib/corpus.js";
import {options} from './lib/cmd.js';

const corpus = loadCorpus('corpus/data.json');
const pickTitle = createRandomPicker(corpus.title);
const title = options.title || pickTitle();
const article = generate(title, {corpus, ...options});
const output = saveCorpus(title, article);

console.log(`生成成功！文章保存于：${output}`);
