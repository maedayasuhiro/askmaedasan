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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 font-sans p-8">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-900 tracking-tight">
        Ask Maeda-san - Your Private Japanese Concierge
      </h1>

      <p className="text-xl mb-10 text-center max-w-2xl mx-auto text-gray-700">
        Need something from Japan? Whether it's a unique product, local shop purchase, or special request - Ask Maeda-san will handle it for you!<br />
        <strong>Local Japanese staff will fulfill your request directly in Japan.</strong>
      </p>

      {/* Language Switch */}
      <div className="mb-10 flex gap-4 flex-wrap justify-center">
        <button className="px-4 py-2 bg-white border rounded shadow hover:bg-gray-100">English</button>
        <button className="px-4 py-2 bg-white border rounded shadow hover:bg-gray-100">日本語</button>
        <button className="px-4 py-2 bg-white border rounded shadow hover:bg-gray-100">Español</button>
        <button className="px-4 py-2 bg-white border rounded shadow hover:bg-gray-100">Français</button>
      </div>

      {/* How it works */}
      <div className="max-w-3xl w-full mb-16 mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">How It Works</h2>
        <ol className="list-decimal list-inside bg-white p-6 rounded-xl shadow-lg text-gray-700">
          <li>You submit a request via the form</li>
          <li>Maeda-san confirms your request and replies by email</li>
          <li>You complete the payment after confirmation</li>
          <li>Our Japanese staff completes your task and reports back</li>
          <li>You confirm the task is done</li>
          <li>That's it!</li>
        </ol>
      </div>

      {/* Forms */}
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl w-full mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Product Purchase Request</h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdbCiEd5_AhNMNpdfjeIHxR7iIaVBtzjJUxA5lESqveBS96KQ/viewform?embedded=true"
            width="100%" height="700" frameBorder="0" marginHeight="0" marginWidth="0"
          >
            Loading…
          </iframe>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Consultation Request</h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfGlCsPX_wOAKUWvk-wox-jW1m-r7JL5O8xXxSB8Hq4hxbfSA/viewform?embedded=true"
            width="100%" height="700" frameBorder="0" marginHeight="0" marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="max-w-3xl w-full mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Customer Reviews</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded shadow-md text-gray-700">
            <p className="mb-2">★★★★★</p>
            <p className="font-semibold">Customer: Emily</p>
            <p className="italic mb-2">Request: Japanese Product Delivery</p>
            <p>
              I am a textile artist and wanted to order washi paper yarn from Japan. Thanks to Ask Maeda-san, I was able to get materials only available locally. They even sent me some Japanese snacks along with it.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-md text-gray-700">
            <p className="mb-2">★★★★★</p>
            <p className="font-semibold">Customer: Camy</p>
            <p className="italic mb-2">Request: Zoom Meeting</p>
            <p>
              I used the consultation service and had a direct talk with Maeda-san. I learned a lot about job hunting in Japan and got great tips on sightseeing spots and restaurants.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-md text-gray-700">
            <p className="mb-2">★★★★★</p>
            <p className="font-semibold">Customer: David</p>
            <p className="italic mb-2">Request: Local Tour Guide</p>
            <p>
              Kohei accompanied me during my trip and took me to his favorite izakaya and restaurants. Thank you, Kohei!
            </p>
          </div>
        </div>
      </div>

      {/* Latest Blog Posts */}
      <div className="max-w-4xl w-full mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
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

      <footer className="mt-10 text-gray-500 text-sm text-center">
        © 2025 Ask Maeda-san. Making Japan Accessible.
      </footer>
    </div>
  );
}
