import Parser from 'tree-sitter';
import JsonLanguage from 'tree-sitter-json';

const parser = new Parser();
parser.setLanguage(JsonLanguage);

import {readFileSync} from 'fs';
const file = readFileSync('./lang.json', 'utf-8');

let tree;
// this works
tree = parser.parse('{"a": 1}');
console.log(tree.rootNode.text.slice(0, 100));

// tree.rootNode.text is all null
const lines = file.split('\n');
const lineGetter = (_, p) => {
    if (!p) return null;
    const line = lines[p.row];
    if (!line) return null;
    return line[p.column] + '\n';
}
tree = parser.parse(lineGetter);
console.log(tree.rootNode.text.slice(0, 100));

// Error: Invalid argument
tree = parser.parse(file);
console.log(tree.rootNode.text.slice(0, 100));
