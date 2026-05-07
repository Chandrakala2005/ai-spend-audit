"use client";

import { useState } from "react";

export default function Home() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [result, setResult] = useState("");
  const generateAudit = () => {
  const spendAmount = Number(spend);

  if (tool === "chatgpt" && spendAmount > 100) {
    setResult(
      "You may be overspending on ChatGPT. Consider reducing Team seats or switching some users to Plus."
    );
  } else if (tool === "cursor" && spendAmount > 50) {
    setResult(
      "Cursor Business may be unnecessary for small teams. Consider Cursor Pro."
    );
  } else {
    setResult(
      "Your current AI spending appears reasonably optimized."
    );
  }
};

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-5xl font-bold text-center">
          AI Spend Audit
        </h1>

        <p className="text-gray-400 text-center mt-4">
          Discover where your startup is overspending on AI tools.
        </p>

        <div className="mt-10 space-y-6">

          <select
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
            value={tool}
            onChange={(e) => setTool(e.target.value)}
          >
            <option value="">Select Tool</option>
            <option value="chatgpt">ChatGPT</option>
            <option value="cursor">Cursor</option>
            <option value="claude">Claude</option>
            <option value="copilot">GitHub Copilot</option>
          </select>

          <input
            type="text"
            placeholder="Current Plan"
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          />

          <input
            type="number"
            placeholder="Monthly Spend ($)"
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
            value={spend}
            onChange={(e) => setSpend(e.target.value)}
          />

         <button
  onClick={generateAudit}
  className="w-full bg-white text-black p-4 rounded-xl font-semibold"
>
  Generate Audit
</button>
{result && (
  <div className="bg-zinc-900 border border-zinc-700 p-6 rounded-xl mt-6">
    <h2 className="text-2xl font-bold mb-2">
      Audit Result
    </h2>

    <p className="text-gray-300">
      {result}
    </p>
  </div>
)}

        </div>
      </div>
    </main>
  );
}