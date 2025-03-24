import React from "react";
import Link from "next/link";

export default function BlogHomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Ask Maeda-san Blog</h1>

      <p className="text-center max-w-2xl mx-auto mb-10">
        Welcome to our blog! Discover Japanese food recipes, tourist spots, product introductions, and personal stories from Maeda-san.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Link href="/categories/recipes" className="bg-white p-6 rounded-xl shadow-xl text-center hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Japanese Food Recipes</h2>
          <p>Authentic recipes you can try at home!</p>
        </Link>

        <Link href="/categories/sightseeing" className="bg-white p-6 rounded-xl shadow-xl text-center hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Japanese Tourist Spots</h2>
          <p>Explore must-see locations in Japan.</p>
        </Link>

        <Link href="/categories/products" className="bg-white p-6 rounded-xl shadow-xl text-center hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Japanese Product Introductions</h2>
          <p>Learn about unique Japanese goods.</p>
        </Link>

        <Link href="/categories/maeda-blog" className="bg-white p-6 rounded-xl shadow-xl text-center hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Maeda-san's Personal Blog</h2>
          <p>Insights, stories, and more from Maeda-san.</p>
        </Link>
      </div>

      <footer className="mt-10 text-center text-gray-600">
        <Link href="/">← Back to Home</Link>
      </footer>
    </div>
  );
}
