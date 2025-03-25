// STEP 1: フォントを読み込むために _app.js または index.js の <Head> に以下を追加
// （これはすでに設定されている場合はスキップしてOK）

import Head from "next/head";
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
    <div
      className="min-h-screen bg-cover bg-center text-gray-900 font-serif"
      style={{ backgroundImage: "url('/bg-japan.jpg')" }}
    >
      <Head>
        <title>Ask Maeda-san</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-white bg-opacity-90 p-4 md:p-8 rounded-lg">
        <header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm py-4 shadow-md w-full">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-indigo-900 font-serif">
            Ask Maeda-san - Your Private Japanese Concierge
          </h1>
        </header>

        <p className="text-md md:text-lg mb-6 text-center max-w-xl mx-auto">
          Need something from Japan? Whether it's a unique product, local shop purchase, or special request – Ask Maeda-san will handle it for you!<br />
          <strong className="text-indigo-700">Local Japanese staff will fulfill your request directly in Japan.</strong>
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
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-indigo-800">How It Works</h2>
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
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-800">Product Purchase Request</h2>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdbCiEd5_AhNMNpdfjeIHxR7iIaVBtzjJUxA5lESqveBS96KQ/viewform?embedded=true" width="100%" height="700" frameBorder="0">Loading…</iframe>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-xl">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-800">Consultation Request</h2>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfGlCsPX_wOAKUWvk-wox-jW1m-r7JL5O8xXxSB8Hq4hxbfSA/viewform?embedded=true" width="100%" height="700" frameBorder="0">Loading…</iframe>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="max-w-3xl w-full mx-auto mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-indigo-800">Customer Reviews</h2>
          <div className="space-y-6 text-sm md:text-base">
            <div className="bg-white p-4 rounded shadow-md">
              <p className="mb-2">★★★★★</p>
              <p className="font-semibold">Customer: Emily</p>
              <p className="italic mb-2">Request: Japanese Product Delivery</p>
              <p>I am a textile artist and wanted to order washi paper yarn from Japan. Thanks to Ask Maeda-san, I was able to get materials only available locally. They even sent me some Japanese snacks along with it.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <p className="mb-2">★★★★★</p>
              <p className="font-semibold">Customer: Camy</p>
              <p className="italic mb-2">Request: Zoom Meeting</p>
              <p>I learned a lot about job hunting and sightseeing tips. Thank you!</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <p className="mb-2">★★★★★</p>
              <p className="font-semibold">Customer: David</p>
              <p className="italic mb-2">Request: Local Tour Guide</p>
              <p>I wanted to explore Japan with a local guide. Kohei took me to his favorite izakaya and restaurants. Thank you, Kohei!</p>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="max-w-3xl w-full mx-auto mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-indigo-800">Latest Blog Posts</h2>
          {posts.map((post) => (
            <div key={post.slug} className="bg-white p-4 rounded shadow-md mb-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-500 text-sm">{post.date}</p>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-blue-500 underline">Read More</Link>
            </div>
          ))}
        </section>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <Link href="/about">
            <button className="bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-900 transition font-serif">
              About Me
            </button>
          </Link>
          <Link href="/blog">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-serif">
              Visit Our Blog
            </button>
          </Link>
        </div>

        <div className="mb-6 text-center">
          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            Privacy Policy & Terms
          </a>
        </div>

        <footer className="mt-10 text-gray-600 text-center text-sm font-serif">
          © 2025 Ask Maeda-san. Making Japan Accessible.
        </footer>
      </div>
    </div>
  );
}
