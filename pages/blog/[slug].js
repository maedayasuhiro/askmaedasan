import React, { useEffect } from "react";
import Head from "next/head";
import { getAllPosts } from "../../lib/posts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHtml from "../../lib/markdownToHtml"; // ← 変更点：markdown-it の代わり

// 動的ルーティングのパス生成
export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

// 個別記事のデータ取得
export async function getStaticProps({ params }) {
  const fullPath = path.join(process.cwd(), "posts", `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // markdownをHTMLに変換し、Instagram埋め込みも反映可能に
  const htmlContent = await markdownToHtml(content);

  return {
    props: {
      title: data.title,
      date: data.date,
      category: data.category,
      content: htmlContent,
    },
  };
}

// 記事表示コンポーネント
export default function BlogPost({ title, date, category, content }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Head>
        <script async src="https://www.instagram.com/embed.js"></script>
      </Head>

      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-2">{date}</p>
      <p className="mb-6">Category: {category}</p>
      <div
        className="prose max-w-none bg-white p-6 rounded shadow"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
