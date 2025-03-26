import React, { useEffect } from "react";
import { getAllPosts } from "../../lib/posts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownIt from "markdown-it";

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(process.cwd(), "posts", `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const md = new markdownIt();
  const htmlContent = md.render(content);

  return {
    props: {
      title: data.title,
      date: data.date,
      category: data.category,
      content: htmlContent,
    },
  };
}

export default function BlogPost({ title, date, category, content }) {
  useEffect(() => {
    // Instagram埋め込みが読み込まれているか確認し、再レンダリング処理
    if (typeof window !== "undefined" && window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
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
