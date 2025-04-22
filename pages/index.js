import Script from 'next/script';
import React, { useState } from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export async function getStaticProps() {
  const posts = getAllPosts().slice(0, 3);
  return {
    props: { posts },
  };
}

<div id="google_translate_element" className="text-sm"></div>

export default function HomePage({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

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
{/* Google Translate Script */}
    <Script
      src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      strategy="afterInteractive"
    />
    <Script id="google-translate-init" strategy="afterInteractive">
      {`
        function googleTranslateElementInit() {
          new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,ja,es,fr',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
          }, 'google_translate_element');
        }
      `}
    </Script>

      <div className="bg-white bg-opacity-60 min-h-screen px-4 md:px-8 py-8 md:py-16">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm py-4 shadow-md w-full flex items-center justify-between px-4 md:px-8">
          <div className="relative">
            <button className="text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
              ≡
            </button>
{isOpen && (
  <div className="absolute top-14 left-2 bg-white shadow-xl rounded-lg border border-vermilion w-40 z-50">
    <ul className="flex flex-col text-left p-2 space-y-2">
      <li><a href="/" className="hover:text-vermilion">Home</a></li>
      <li><a href="/about" className="hover:text-vermilion">About Me</a></li>
      <li><a href="/blog" className="hover:text-vermilion">Blog</a></li>
      <li><a href="/privacy" className="hover:text-vermilion">Privacy Policy</a></li>
    </ul>
  </div>
)}
          </div>

<div className="flex-1 flex items-center justify-center text-center px-2">
  <Link href="/" className="flex items-center space-x-2">
    <img src="/logo.png" alt="Logo" className="h-10 w-auto md:h-12" />
    <div className="text-2xl md:text-4xl font-extrabold text-vermilion leading-tight">
      Ask Maeda-san
    </div>
  </Link>
</div>

          <div className="text-xl cursor-pointer" onClick={() => setShowSearch(!showSearch)}>
            🔍
          </div>
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
        <div className="text-center max-w-xl mx-auto mb-6 mt-6">
          <h2 className="text-lg md:text-xl font-semibold text-vermilion mb-4">
            Your Private Japanese Concierge
          </h2>
          <p className="text-md md:text-lg">
            Need something from Japan? Whether it's a unique product, local shop purchase, or special request – Ask Maeda-san will handle it for you!
            <br />
            <strong className="text-vermilion">
              Local Japanese staff will fulfill your request directly in Japan.
            </strong>
          </p>
        </div>

        {/* Language Switch */}
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          <button className="px-4 py-2 rounded bg-white shadow hover:bg-gray-200">English</button>
          <button className="px-4 py-2 rounded bg-white shadow hover:bg-gray-200">日本語</button>
          <button className="px-4 py-2 rounded bg-white shadow hover:bg-gray-200">Español</button>
          <button className="px-4 py-2 rounded bg-white shadow hover:bg-gray-200">Français</button>
        </div>

        {/* How It Works */}
        // pages/index.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileAlt, faEnvelope, faYenSign, 
  faUserCog, faCheckCircle, faFlagCheckered 
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <section style={{ padding: '2rem' }}>
      <h2 style={{ color: '#d32f2f' }}>How It Works</h2>
      <ul style={{
        listStyle: 'none',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <li><FontAwesomeIcon icon={faFileAlt} />  You submit a request via the form</li>
        <li><FontAwesomeIcon icon={faEnvelope} />  Maeda-san (Admin) replies by email shortly</li>
        <li><FontAwesomeIcon icon={faYenSign} />  Details confirmed and payment completed</li>
        <li><FontAwesomeIcon icon={faUserCog} />  Our Japanese staff handles the request</li>
        <li><FontAwesomeIcon icon={faCheckCircle} />  User confirms completion</li>
        <li><FontAwesomeIcon icon={faFlagCheckered} />  All done!</li>
      </ul>
    </section>
  );
}

        {/* Consultation Form */}
        <section className="max-w-md w-full mx-auto mb-10">
          <div className="bg-white p-6 rounded-xl shadow-xl">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-vermilion">Consultation Request</h2>
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

        {/* Reviews */}
        <section className="max-w-3xl w-full mx-auto mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-vermilion">Customer Reviews</h2>
          <div className="space-y-6 text-sm md:text-base">
            {[{
              name: "Emily",
              request: "Japanese Product Delivery",
              message: "I am a textile artist and wanted to order washi paper yarn from Japan. Thanks to Ask Maeda-san, I was able to get materials only available locally. They even sent me some Japanese snacks along with it."
            }, {
              name: "Cameron",
              request: "Zoom Meeting",
              message: "I’m planning to study in Japan and wanted to chat with a local. I learned a lot about job hunting and sightseeing tips. Thank you!"
            }, {
              name: "David",
              request: "Local Tour Guide",
              message: "I wanted to explore Japan with a local guide. Kohei took me to his favorite izakaya and restaurants. Thank you, Kohei!"
            }].map(({ name, request, message }, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-md">
                <p className="mb-2 text-vermilion">★★★★★</p>
                <p className="font-semibold">Customer: {name}</p>
                <p className="italic mb-2">Request: <span className="bg-vermilion text-white px-2 py-0.5 rounded text-sm font-semibold">{request}</span>
</p>
                <p>{message}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section className="max-w-3xl w-full mx-auto mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-vermilion">Latest Blog Posts</h2>
          {filteredPosts.map((post) => (
            <div key={post.slug} className="bg-white p-4 rounded shadow-md mb-4">
              <h3 className="text-lg font-semibold text-vermilion">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.date}</p>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-vermilion underline">Read More</Link>
            </div>
          ))}
        </section>

        {/* Footer */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <Link href="/about">
            <button className="bg-vermilion text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition">About Me</button>
          </Link>
          <Link href="/blog">
            <button className="bg-vermilion text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition">Visit Our Blog</button>
          </Link>
        </div>

        <div className="mb-6 text-center">
          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-vermilion underline">
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
