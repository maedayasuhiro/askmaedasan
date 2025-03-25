// pages/categories/recipes.js
import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function RecipesPage({ posts }) {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">🍙 Japanese Food Recipes</h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">{post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 underline">Read More</Link>
          </div>
        ))}
      </div>

      <footer className="mt-10 text-center">
        <Link href="/blog" className="text-gray-500 underline">← Back to Blog</Link>
      </footer>
    </div>
  );
}

// ⬇️ ここから下を追記（カテゴリ＝recipes の記事だけ取得）
export async function getStaticProps() {
  const allPosts = getAllPosts();
  const recipesOnly = allPosts.filter((post) => post.category === "recipes");

  return {
    props: {
      posts: recipesOnly,
    },
  };
}
