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
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center text-gray-900"
      style={{ backgroundImage: "url('/bg-japan.jpg')" }}
    >
      <div className="bg-white bg-opacity-70 min-h-screen px-4 md:px-8 py-8 md:py-16">
        {/* Header with Menu & Search */}
        <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm py-4 shadow-md w-full flex items-center justify-between px-4 md:px-8">
          <div className="relative">
            <button className="text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>≡</button>
            {menuOpen && (
              <div className="absolute mt-2 bg-white shadow-md rounded-lg w-40">
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About Me</Link>
                <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
                <Link href="/privacy" className="block px-4 py-2 hover:bg-gray-100">Privacy Policy</Link>
              </div>
            )}
          </div>

          <h1 className="text-lg md:text-2xl font-bold text-pink-600 text-center flex-1">
            Ask Maeda-san - Your Private Japanese Concierge
          </h1>

          <div className="text-xl cursor-pointer" onClick={() => setShowSearch(!showSearch)}>🔍</div>
        </header>

        {showSearch && (
          <div className="mb-6 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-md md:text-lg mb-6 text-center max-w-xl mx-auto">
          Need something from Japan? Whether it's a unique product, local shop purchase, or special request – Ask Maeda-san will handle it for you!
          <br />
          <strong className="text-pink-600">Local Japanese staff will fulfill your request directly in Japan.</strong>
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
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-pink-600">How It Works</h2>
          <ol className="list-decimal list-inside bg-white p-6 rounded-xl shadow-md text-sm md:text-base">
            <li>You submit a request via the form</li>
            <li>Maeda-san (Admin) replies by email shortly</li>
            <li>Details confirmed and payment completed</li>
            <li>Our Japanese staff handles the request</li>
            <li>User confirms completion</li>
            <li>All done!</li>
          </ol>
        </section>

        {/* Consultation Request */}
        <section className="max-w-md w-full mx-auto mb-10">
          <div className="bg-white p-6 rounded-xl shadow-xl">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-pink-600">Consultation Request</h2>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfGlCsPX_wOAKUWvk-wox-jW1m-r7JL5O8xXxSB8Hq4hxbfSA/viewform?embedded=true"
              width="100%"
              height="500"
              frameBorder="0"
            >
              Loading…
            </iframe>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="max-w-3xl w-full mx-auto mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-pink-600">Customer Reviews</h2>
          <div className="space-y-6 text-sm md:text-base">
            <div className="bg-white p-4 rounded shadow-md">
              <p className="mb-2 text-pink-600">★★★★★</p>
              <p className="font-semibold">Customer: Emily</p>
              <p className="italic mb-2">Request: Japanese Product Delivery</p>
              <p>I am a textile artist and wanted to order washi paper yarn from Japan. Thanks to Ask Maeda-san, I was able to get materials only available locally. They even sent me some Japanese snacks along with it.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <p className="mb-2 text-pink-600">★★★★★</p>
              <p className="font-semibold">Customer: Camy</p>
              <p className="italic mb-2">Request: Zoom Meeting</p>
              <p>I’m planning to study in Japan and wanted to chat with a local. I learned a lot about job hunting and sightseeing tips. Thank you!</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <p className="mb-2 text-pink-600">★★★★★</p>
              <p className="font-semibold">Customer: David</p>
              <p className="italic mb-2">Request: Local Tour Guide</p>
              <p>I wanted to explore Japan with a local guide. Kohei took me to his favorite izakaya and restaurants. Thank you, Kohei!</p>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="max-w-3xl w-full mx-auto mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-pink-600">Latest Blog Posts</h2>
          {filteredPosts.map((post) => (
            <div key={post.slug} className="bg-white p-4 rounded shadow-md mb-4">
              <h3 className="text-lg font-semibold text-pink-600">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.date}</p>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-pink-600 underline">Read More</Link>
            </div>
          ))}
        </section>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <Link href="/about">
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition">About Me</button>
          </Link>
          <Link href="/blog">
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition">Visit Our Blog</button>
          </Link>
        </div>

        <div className="mb-6 text-center">
          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-pink-600 underline">
            Privacy Policy & Terms
          </a>
        </div>

        <footer className="mt-10 text-gray-600 text-center text-sm">© 2025 Ask Maeda-san. Making Japan Accessible.</footer>
      </div>
    </div>
  );
}
