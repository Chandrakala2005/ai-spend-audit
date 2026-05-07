"use client";

import { useState } from "react";

export default function Home() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [result, setResult] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [useCase, setUseCase] = useState("");
  const generateAudit = () => {
  const spendAmount = Number(spend);

  if (tool === "chatgpt" && spendAmount > 100) {
    setResult(
      "Potential Savings: $40/month ($480/year). Switch smaller teams from Team to Plus."
    );
  } else if (tool === "cursor" && spendAmount > 50) {
    setResult(
      "Potential Savings: $20/month ($240/year). Cursor Pro may be sufficient."
    );
  } else if (tool === "copilot" && spendAmount > 30) {
    setResult(
      "Potential Savings: $10/month ($120/year). Copilot Business may be unnecessary."
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
          <input
  type="number"
  placeholder="Team Size"
  className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
  value={teamSize}
  onChange={(e) => setTeamSize(e.target.value)}
/>

<select
  className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
  value={useCase}
  onChange={(e) => setUseCase(e.target.value)}
>
  <option value="">Primary Use Case</option>
  <option value="coding">Coding</option>
  <option value="writing">Writing</option>
  <option value="research">Research</option>
  <option value="data">Data Analysis</option>
  <option value="mixed">Mixed</option>
</select>

         <button
  onClick={generateAudit}
  className="w-full bg-white text-black p-4 rounded-xl font-semibold"
>
  Generate Audit
</button>
{result && (
  <div className="bg-zinc-900 border border-zinc-700 p-6 rounded-2xl mt-8 shadow-lg">
    
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold">
        Audit Result
      </h2>

      <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
        Savings Found
      </span>
    </div>

    <p className="text-gray-300 mt-6 text-lg leading-8">
      {result}
    </p>

    <div className="mt-6 border-t border-zinc-700 pt-6">
      <p className="text-sm text-gray-500">
        Credex can help reduce AI infrastructure costs further for growing teams.
      </p>
    </div>

  </div>
)}
        </div>
      </div>
    </main>
  );
}