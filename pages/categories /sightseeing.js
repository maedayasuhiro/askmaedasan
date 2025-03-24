import React from "react";
import Link from "next/link";

export default function SightseeingPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Japanese Tourist Spots</h1>

      <p className="text-center max-w-2xl mx-auto mb-10">
        Explore must-visit sightseeing spots all over Japan!
      </p>

      <div className="text-center">
        <p>Coming Soon: Sightseeing guides...</p>
      </div>

      <footer className="mt-10 text-center text-gray-600">
        <Link href="/blog">← Back to Blog</Link>
      </footer>
    </div>
  );
}
