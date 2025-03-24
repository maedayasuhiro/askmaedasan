import React from "react";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy & Terms of Service</h1>

      {/* Privacy Policy */}
      <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
      <p className="mb-4 font-semibold">
        Ask Maeda-san (hereinafter referred to as "our website") is committed to protecting and appropriately managing your personal information.
      </p>

      <h3 className="text-xl font-semibold mb-2">1. Information We Collect</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Shipping address</li>
        <li>Product request details</li>
        <li>Other information provided through inquiries</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">2. Purpose of Use</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Processing product purchase requests and arranging shipments</li>
        <li>Responding to customer inquiries</li>
        <li>Providing necessary communications</li>
        <li>Improving our services through analysis</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">3. Provision to Third Parties</h3>
      <p className="mb-4">
        We will not provide your personal information to third parties without your consent, except in the following cases:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>When required by law</li>
        <li>When necessary to arrange product shipments (e.g., providing information to shipping carriers)</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">4. Management of Personal Information</h3>
      <p className="mb-8">
        We take appropriate security measures to prevent unauthorized access, loss, alteration, or leakage of personal information.
      </p>

      {/* Terms of Service */}
      <h2 className="text-2xl font-semibold mb-4">Terms of Service & Disclaimer</h2>
      <p className="mb-4 font-semibold">
        By using our service, you agree to the following terms.
      </p>

      <h3 className="text-xl font-semibold mb-2">1. Shipping Disclaimer</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Our responsibility is limited to <strong>arranging the shipment</strong> of products.</li>
        <li>We are <strong>not liable for any incidents, damage, delays, or accidents</strong> that occur during the shipping process.</li>
        <li>For any issues during shipping, please contact the respective shipping carrier.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">2. Returns & Exchanges</h3>
      <ul className="list-disc list-inside mb-4">
        <li>We <strong>do not accept returns or exchanges</strong> for customer convenience.</li>
        <li>We are <strong>not responsible for any defects or issues</strong> related to food, cosmetics, or other products after shipment.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">3. Prohibited Requests</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Requests involving products or activities that violate laws and regulations</li>
        <li>Requests for prohibited, illegal, or hazardous items</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">4. Customs Duties & Taxes</h3>
      <ul className="list-disc list-inside mb-8">
        <li>Any <strong>customs duties, taxes, or import fees</strong> that arise in the destination country are the responsibility of the customer.</li>
        <li>Please ensure you are aware of your country’s import regulations before placing an order.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Changes to the Policy</h3>
      <p className="mb-4">
        We may revise this Privacy Policy and Terms of Service without prior notice as necessary.
      </p>

      <footer className="mt-10 text-sm text-gray-500 text-center">
        © 2025 Ask Maeda-san. All rights reserved.
      </footer>
    </div>
  );
}

