import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Ask Maeda-san - Your Japan Concierge</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        Need something from Japan? Whether it's a unique product, local shop purchase, or special request - Ask Maeda-san will handle it for you!<br />
        <strong>Local Japanese staff will fulfill your request directly in Japan.</strong>
      </p>

      <div className="mb-10 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">How It Works</h2>
        <ol className="list-decimal list-inside bg-white p-6 rounded-xl shadow-md">
          <li>User submits a request via the request form</li>
          <li>Maeda-san (Admin) confirms the payment</li>
          <li>Local Japanese staff completes the task</li>
          <li>Staff reports completion to Maeda-san</li>
          <li>User confirms task completion</li>
          <li>Local staff receives payment</li>
        </ol>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-4xl w-full mb-10">
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Product Purchase Request</h2>
          <form className="flex flex-col gap-4">
            <input className="border rounded p-2" placeholder="Product URL or Shop Name" />
            <input className="border rounded p-2" placeholder="Product Details (name, size, quantity)" />
            <input className="border rounded p-2" placeholder="Shipping Address" />
            <button className="mt-4 bg-blue-500 text-white py-2 rounded">Request for £30 + Shipping</button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Consultation Request</h2>
          <form className="flex flex-col gap-4">
            <textarea className="border rounded p-2" placeholder="Describe what you need help with in Japan" />
            <input className="border rounded p-2" placeholder="Your Email" />
            <button className="mt-4 bg-green-500 text-white py-2 rounded">Submit Consultation (£50 per request)</button>
          </form>
        </div>
      </div>

      <div className="max-w-3xl w-full mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Customer Reviews</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="mb-2">★★★★★</p>
            <p className="font-semibold">Customer: Emily</p>
            <p className="italic mb-2">Request: Japanese Product Delivery</p>
            <p>I am a textile artist and wanted to order washi paper yarn from Japan. Thanks to Ask Maeda-san, I was able to get materials only available locally. They even sent me some Japanese snacks along with it. It took a bit longer, but that's understandable as everything was sourced locally.</p>
          </div>

          <div className="bg-white p-4 rounded shadow-md">
            <p className="mb-2">★★★★★</p>
            <p className="font-semibold">Customer: Camy</p>
            <p className="italic mb-2">Request: Zoom Meeting</p>
            <p>I’m planning to study in Japan this fall and wanted to chat with a local. I used the consultation service and had a direct talk with Maeda-san. I learned a lot about job hunting in Japan and got great tips on sightseeing spots and restaurants. Thank you!</p>
          </div>

          <div className="bg-white p-4 rounded shadow-md">
            <p className="mb-2">★★★★★</p>
            <p className="font-semibold">Customer: David</p>
            <p className="italic mb-2">Request: Local Tour Guide</p>
            <p>I wanted to explore Japan with a local guide. Kohei accompanied me during my trip and took me to his favorite izakaya and restaurants. Thank you, Kohei!</p>
          </div>
        </div>
      </div>

      <footer className="mt-10 text-gray-600">© 2025 Ask Maeda-san. Making Japan Accessible.</footer>
    </div>
  );
}
