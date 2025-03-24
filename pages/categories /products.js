import React from "react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Japanese Product Introductions</h1>

      <p className="text-center max-w-2xl mx-auto mb-10">
        Learn about unique and popular Japanese products!
      </p>

      <div className="text-center">
        <p>Coming Soon: Product highlights...</p>
      </div>

      <footer className="mt-10 text-center text-gray-600">
        <Link href="/blog">← Back to Blog</Link>
      </footer>
    </div>
  );
}
