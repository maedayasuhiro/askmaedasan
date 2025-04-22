// lib/markdownToHtml.js
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkRehype, { allowDangerousHtml: true }) // MarkdownをHTMLに変換
    .use(rehypeRaw) // HTMLタグを有効化
    .use(rehypeStringify); // HTMLとして出力

  return result.process(markdown).then((file) => String(file));
}
