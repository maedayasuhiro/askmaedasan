import React from "react";
import { motion } from "framer-motion";
import { UserIcon, CreditCardIcon, ClipboardCheckIcon, CheckCircleIcon, CurrencyYenIcon } from '@heroicons/react/solid';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Ask Maeda-san - Your Private Japanese Concierge</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        Need something from Japan? Whether it's a unique product, local shop purchase, or special request - Ask Maeda-san will handle it for you!<br />
        <strong>Local Japanese staff will fulfill your request directly in Japan.</strong>
    <div className="max-w-4xl mx-auto my-10">
  <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
  <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-6">

    {/* Step 1 */}
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-blue-500 text-white p-4 rounded-full mb-2">
        <UserIcon className="h-8 w-8" />
      </div>
      <p className="text-center">User <br/> Submits Request</p>
    </motion.div>

    {/* Arrow */}
    <div className="text-2xl">➡️</div>

    {/* Step 2 */}
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="bg-green-500 text-white p-4 rounded-full mb-2">
        <CreditCardIcon className="h-8 w-8" />
      </div>
      <p className="text-center">Maeda-san <br/> Confirms Payment</p>
    </motion.div>

    <div className="text-2xl">➡️</div>

    {/* Step 3 */}
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div className="bg-yellow-500 text-white p-4 rounded-full mb-2">
        <ClipboardCheckIcon className="h-8 w-8" />
      </div>
      <p className="text-center">Local Staff <br/> Completes Task</p>
    </motion.div>

    <div className="text-2xl">➡️</div>

    {/* Step 4 */}
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1 }}
    >
      <div className="bg-purple-500 text-white p-4 rounded-full mb-2">
        <CheckCircleIcon className="h-8 w-8" />
      </div>
      <p className="text-center">User Confirms <br/> Completion</p>
    </motion.div>

    <div className="text-2xl">➡️</div>

    {/* Step 5 */}
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3 }}
    >
      <div className="bg-red-500 text-white p-4 rounded-full mb-2">
        <CurrencyYenIcon className="h-8 w-8" />
      </div>
      <p className="text-center">Local Staff <br/> Gets Paid</p>
    </motion.div>

  </div>
</div>

      </p>
    </div>
  );
}
