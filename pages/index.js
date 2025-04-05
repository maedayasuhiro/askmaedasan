import React, { useState } from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export async function getStaticProps() {
  const posts = getAllPosts().slice(0, 3);
  return {
    props: { posts },
  };
}

export default function HomePage({ posts }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center text-gray-900"
      style={{ backgroundImage: "url('/bg-japan.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 min-h-screen px-4 md:px-8 py-8 md:py-16">
        {/* Header with Search */}
        <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm py-4 shadow-md w-full flex items-center justify-between px-4 md:px-8">
          <div className="text-2xl cursor-pointer">≡</div>
          <h1 className="text-lg md:text-2xl font-bold text-purple-800 text-center flex-1">
            Ask Maeda-san - Your Private Japanese Concierge
          </h1>
          <div className="text-xl cursor-pointer" onClick={() => setShowSearch(!showSearch)}>
            🔍
          </div>
        </header>

        {showSearch && (
          <div className="w-full bg-white py-3 px-4 shadow-md">
            <input
              type="text"
              placeholder="Search blog posts..."
              className="w-full border border-gray-300 rounded-md p-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
        )}

        {/* Description */}
        <p className="text-md md:text-lg mb-6 text-center max-w-xl mx-auto">
          Need something from Japan? Whether it's a unique product, local shop purchase, or special request – Ask Maeda-san will handle it for you!
          <br />
          <strong className="text-purple-700">Local Japanese staff will fulfill your request directly in Japan.</strong>
        </p>

        {/* Language Switch Buttons */}
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          <button className="px-4 py-2 rounded bg-white shadow hover:bg-gray-200">English</button>
          <button className="px-4 py-2 rounded bg-white shadow hover:bg-gray-200">日本語</button>
          <button className="px-4 py-2 rounded bg-white shadow hover:bg-gray-200">Español</button>
          <button className="px-4 py-2 rounded bg-white shadow hover:bg-gray-200">Français</button>
        </div>

        {/* How It Works */}
        <section className="mb-10 max-w-3xl w-full mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">How It Works</h2>
          <ol className="list-decimal list-inside bg-white p-6 rounded-xl shadow-md text-sm md:text-base">
            <li>You submit a request via the form</li>
            <li>Maeda-san (Admin) replies by email shortly</li>
            <li>Details confirmed and payment completed</li>
            <li>Our Japanese staff handles the request</li>
            <li>User confirms completion</li>
            <li>All done!</li>
          </ol>
        </section>

        {/* Request Forms */}
        <section className="grid gap-6 md:grid-cols-2 max-w-4xl w-full mx-auto mb-10">
          <div className="bg-white p-6 rounded-xl shadow-xl">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Consultation Request</h2>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfGlCsPX_wOAKUWvk-wox-jW1m-r7JL5O8xXxSB8Hq4hxbfSA/viewform?embedded=true" width="100%" height="700" frameBorder="0">Loading…</iframe>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="max-w-3xl w-full mx-auto mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">Customer Reviews</h2>
          <div className="space-y-6 text-sm md:text-base">
            {/* Review content here */}
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="max-w-3xl w-full mx-auto mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">Latest Blog Posts</h2>
          {filteredPosts.map((post) => (
            <div key={post.slug} className="bg-white p-4 rounded shadow-md mb-4">
              <h3 className="text-lg font-semibold text-purple-800">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.date}</p>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-blue-500 underline">Read More</Link>
            </div>
          ))}
        </section>

        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <Link href="/about">
            <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">About Me</button>
          </Link>
          <Link href="/blog">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">Visit Our Blog</button>
          </Link>
        </div>

        <div className="mb-6 text-center">
          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            Privacy Policy & Terms
          </a>
        </div>

        <footer className="mt-10 text-gray-600 text-center text-sm">© 2025 Ask Maeda-san. Making Japan Accessible.</footer>
      </div>
    </div>
  );
}
