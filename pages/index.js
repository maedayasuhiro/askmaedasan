import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export async function getStaticProps() {
  const allPosts = getAllPosts();
  const latestPosts = allPosts.slice(0, 3);
  return {
    props: { latestPosts },
  };
}

export default function HomePage({ latestPosts }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-red-900">Ask Maeda-san - Your Private Japanese Concierge</h1>
      <p className="text-lg mb-6 text-center max-w-xl text-gray-700">
        Need something from Japan? Whether it's a unique product, local shop purchase, or special request - Ask Maeda-san will handle it for you!<br />
        <strong>Local Japanese staff will fulfill your request directly in Japan.</strong>
      </p>

      {/* Language Switch Buttons */}
      <div className="mb-8 flex space-x-4">
        <button className="px-4 py-2 rounded bg-white shadow hover:bg-gray-200">English</button>
        <button className="px-4 py-2 rounded bg-white shadow hover:bg-gray-200">日本語</button>
        <button className="px-4 py-2 rounded bg-white shadow hover:bg-gray-200">Español</button>
        <button className="px-4 py-2 rounded bg-white shadow hover:bg-gray-200">Français</button>
      </div>

      <div className="mb-10 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">How It Works</h2>
        <ol className="list-decimal list-inside bg-white p-6 rounded-xl shadow-md">
          <li>You submit a request via the request form</li>
          <li>Maeda-san confirms the form and responds via email</li>
          <li>Confirm your need → proceed with payment</li>
          <li>Our Japanese staff completes the task and reports back</li>
          <li>You confirm completion</li>
          <li>Done!</li>
        </ol>
      </div>

      {/* Request Forms */}
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl w-full mb-10">
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Product Purchase Request</h2>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdbCiEd5_AhNMNpdfjeIHxR7iIaVBtzjJUxA5lESqveBS96KQ/viewform?embedded=true" width="100%" height="700" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Consultation Request</h2>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfGlCsPX_wOAKUWvk-wox-jW1m-r7JL5O8xXxSB8Hq4hxbfSA/viewform?embedded=true" width="100%" height="700" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-4xl w-full mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <div key={post.slug} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-blue-500 underline">Read More</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="max-w-3xl w-full mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Customer Reviews</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="mb-2">★★★★★</p>
            <p className="font-semibold">Customer: Emily</p>
            <p className="italic mb-2">Request: Japanese Product Delivery</p>
            <p>I am a textile artist and wanted to order washi paper yarn from Japan. Thanks to Ask Maeda-san, I was able to get materials only available locally.</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <p className="mb-2">★★★★★</p>
            <p className="font-semibold">Customer: Camy</p>
            <p className="italic mb-2">Request: Zoom Meeting</p>
            <p>Consultation service helped me talk directly with Maeda-san about studying and living in Japan. Great insights!</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <p className="mb-2">★★★★★</p>
            <p className="font-semibold">Customer: David</p>
            <p className="italic mb-2">Request: Local Tour Guide</p>
            <p>Kohei guided me to local izakayas and hidden spots in Tokyo. Absolutely loved the experience.</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mt-8 mb-4">
        <Link href="/blog">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Visit Our Blog
          </button>
        </Link>
        <Link href="/about">
          <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
            About Me
          </button>
        </Link>
      </div>

      {/* Privacy Policy Link */}
      <div className="mb-6 text-center">
        <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Privacy Policy & Terms
        </a>
      </div>

      <footer className="mt-10 text-gray-600 text-sm text-center">
        © 2025 Ask Maeda-san. Making Japan Accessible.
      </footer>
    </div>
  );
}
