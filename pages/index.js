import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function HomePage({ posts }) {
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center leading-snug text-indigo-900">
        Ask Maeda-san - Your Private Japanese Concierge
      </h1>

      <p className="text-base sm:text-lg mb-8 text-center max-w-2xl mx-auto">
        Need something from Japan? Whether it's a unique product, local shop purchase, or special request - Ask Maeda-san will handle it for you!
        <br />
        <strong className="block mt-2 text-indigo-700">Local Japanese staff will fulfill your request directly in Japan.</strong>
      </p>

      {/* Language Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {['English', '日本語', 'Español', 'Français'].map((lang) => (
          <button key={lang} className="px-4 py-2 rounded bg-white shadow hover:bg-gray-100 text-sm font-medium">
            {lang}
          </button>
        ))}
      </div>

      {/* How It Works */}
      <div className="max-w-3xl w-full mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">How It Works</h2>
        <ol className="list-decimal list-inside bg-white p-6 rounded-xl shadow-md text-sm sm:text-base">
          <li>You submit a request via the form</li>
          <li>Maeda-san (Admin) replies by email shortly</li>
          <li>Details confirmed and payment completed</li>
          <li>Our Japanese staff handles the request</li>
          <li>User confirms completion</li>
          <li>All done!</li>
        </ol>
      </div>

      {/* Forms */}
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl w-full mx-auto mb-12">
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4 text-center">Product Purchase Request</h2>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdbCiEd5_AhNMNpdfjeIHxR7iIaVBtzjJUxA5lESqveBS96KQ/viewform?embedded=true" width="100%" height="700" frameBorder="0" marginHeight="0" marginWidth="0" className="rounded-md" />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4 text-center">Consultation Request</h2>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfGlCsPX_wOAKUWvk-wox-jW1m-r7JL5O8xXxSB8Hq4hxbfSA/viewform?embedded=true" width="100%" height="700" frameBorder="0" marginHeight="0" marginWidth="0" className="rounded-md" />
        </div>
      </div>

      {/* Latest Blog Posts */}
      <div className="max-w-4xl w-full mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-900">Latest Blog Posts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold mb-2 text-indigo-800">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="max-w-3xl w-full mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-900">Customer Reviews</h2>
        <div className="space-y-6 text-sm sm:text-base">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="mb-2">★★★★★</p>
            <p className="font-semibold">Customer: Emily</p>
            <p className="italic mb-2">Request: Japanese Product Delivery</p>
            <p>I ordered washi paper yarn and snacks from Japan. It took a little time but everything was sourced locally and was amazing!</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <p className="mb-2">★★★★★</p>
            <p className="font-semibold">Customer: Camy</p>
            <p className="italic mb-2">Request: Zoom Meeting</p>
            <p>Consulted with Maeda-san about studying in Japan. Got great insights and tips. Super helpful!</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <p className="mb-2">★★★★★</p>
            <p className="font-semibold">Customer: David</p>
            <p className="italic mb-2">Request: Local Tour Guide</p>
            <p>Had a great trip with Kohei who showed me authentic places in Japan. Highly recommend!</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <Link href="/about">
          <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">About Me</button>
        </Link>
        <Link href="/blog">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">Visit Our Blog</button>
        </Link>
      </div>

      <div className="mb-4 text-center">
        <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Privacy Policy & Terms
        </a>
      </div>

      <footer className="mt-6 text-gray-600 text-sm text-center">© 2025 Ask Maeda-san. Making Japan Accessible.</footer>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
