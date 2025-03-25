import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export async function getStaticProps() {
  const allPosts = getAllPosts();
  const filteredPosts = allPosts.filter(post => post.category === "recipes");

  return {
    props: {
      posts: filteredPosts,
    },
  };
}

export default function RecipesPage({ posts }) {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">🍙 Japanese Food Recipes</h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.date}</p>
            <p className="mt-2 text-gray-800">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 mt-4 block">
              Read More →
            </Link>
          </div>
        ))}
      </div>

      <footer className="mt-10 text-center text-gray-600">
        <Link href="/blog">← Back to Blog</Link>
      </footer>
    </div>
  );
}
