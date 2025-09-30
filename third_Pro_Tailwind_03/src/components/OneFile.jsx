import React, { useState } from "react";

function OneFile() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-6 p-6 border rounded-2xl inline-block bg-gray-100 shadow-md">
      <h2 className="text-xl font-semibold mb-2">Counter Component</h2>
      <p className="text-lg mb-4">Count: {count}</p>
      <div className="space-x-3">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default OneFile;
