import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export async function getStaticProps() {
  const posts = getAllPosts().slice(0, 3);
  return {
    props: { posts },
  };
}

export default function HomePage({ posts }) {
  return (
    <div className="min-h-screen bg-japan-pattern bg-cover bg-center font-japanese text-gray-900">
      <header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-md py-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-900">
          Ask Maeda-san - Your Private Japanese Concierge
        </h1>
        <p className="text-center text-indigo-700 text-sm md:text-base mt-2">
          Local Japanese staff will fulfill your request directly in Japan.
        </p>
      </header>

      <div className="p-4 md:p-10 flex flex-col items-center">
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          <button className="px-4 py-2 rounded bg-white shadow hover:bg-indigo-100">English</button>
          <button className="px-4 py-2 rounded bg-white shadow hover:bg-indigo-100">日本語</button>
          <button className="px-4 py-2 rounded bg-white shadow hover:bg-indigo-100">Español</button>
          <button className="px-4 py-2 rounded bg-white shadow hover:bg-indigo-100">Français</button>
        </div>

        <section className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md max-w-3xl w-full mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">How It Works</h2>
          <ol className="list-decimal list-inside text-sm md:text-base">
            <li>You submit a request via the form</li>
            <li>Maeda-san (Admin) replies by email shortly</li>
            <li>Details confirmed and payment completed</li>
            <li>Our Japanese staff handles the request</li>
            <li>User confirms completion</li>
            <li>All done!</li>
          </ol>
        </section>

        <section className="grid gap-6 md:grid-cols-2 max-w-4xl w-full mb-10">
          <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Product Purchase Request</h2>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdbCiEd5_AhNMNpdfjeIHxR7iIaVBtzjJUxA5lESqveBS96KQ/viewform?embedded=true" width="100%" height="700" frameBorder="0">Loading…</iframe>
          </div>
          <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Consultation Request</h2>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfGlCsPX_wOAKUWvk-wox-jW1m-r7JL5O8xXxSB8Hq4hxbfSA/viewform?embedded=true" width="100%" height="700" frameBorder="0">Loading…</iframe>
          </div>
        </section>

        <section className="max-w-3xl w-full mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">Customer Reviews</h2>
          <div className="space-y-6 text-sm md:text-base">
            <div className="bg-white bg-opacity-80 p-4 rounded shadow-md">
              <p className="mb-2">★★★★★</p>
              <p className="font-semibold">Customer: Emily</p>
              <p className="italic mb-2">Request: Japanese Product Delivery</p>
              <p>I am a textile artist and wanted to order washi paper yarn from Japan. They even sent me snacks!</p>
            </div>
            <div className="bg-white bg-opacity-80 p-4 rounded shadow-md">
              <p className="mb-2">★★★★★</p>
              <p className="font-semibold">Customer: Camy</p>
              <p className="italic mb-2">Request: Zoom Meeting</p>
              <p>Thanks to Maeda-san, I got local insights and advice about studying and living in Japan.</p>
            </div>
            <div className="bg-white bg-opacity-80 p-4 rounded shadow-md">
              <p className="mb-2">★★★★★</p>
              <p className="font-semibold">Customer: David</p>
              <p className="italic mb-2">Request: Local Tour Guide</p>
              <p>I was guided to hidden izakayas and experienced real Japan with Kohei-san.</p>
            </div>
          </div>
        </section>

        <section className="max-w-3xl w-full mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">Latest Blog Posts</h2>
          {posts.map((post) => (
            <div key={post.slug} className="bg-white bg-opacity-80 p-4 rounded shadow-md mb-4">
              <h3 className="text-lg font-semibold text-indigo-800">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.date}</p>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 underline">Read More</Link>
            </div>
          ))}
        </section>

        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <Link href="/about">
            <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
              About Me
            </button>
          </Link>
          <Link href="/blog">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Visit Our Blog
            </button>
          </Link>
        </div>

        <div className="mb-6 text-center">
          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            Privacy Policy & Terms
          </a>
        </div>

        <footer className="mt-10 text-gray-600 text-center text-sm">
          © 2025 Ask Maeda-san. Making Japan Accessible.
        </footer>
      </div>
    </div>
  );
}
