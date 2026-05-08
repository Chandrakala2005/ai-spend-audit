"use client";

import { useState } from "react";

export default function Home() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [result, setResult] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [useCase, setUseCase] = useState("");
  const [monthlySavings, setMonthlySavings] = useState(0);
const [yearlySavings, setYearlySavings] = useState(0);

const generateAudit = () => {
  const spendAmount = Number(spend);
  const team = Number(teamSize);
  if (!tool || !spend || !teamSize || !useCase) {
  setResult("Please fill all fields before generating the audit.");

  setMonthlySavings(0);
  setYearlySavings(0);

  return;
}

  if (tool === "chatgpt" && spendAmount > 100 && team <= 3) {

    setMonthlySavings(40);
    setYearlySavings(480);

    setResult(
      "Switch smaller teams from ChatGPT Team to Plus for better cost efficiency."
    );

  } else if (tool === "cursor" && spendAmount > 50) {

    setMonthlySavings(20);
    setYearlySavings(240);

    setResult(
      "Cursor Pro may be sufficient instead of Cursor Business."
    );

  } else if (tool === "copilot" && spendAmount > 30) {

    setMonthlySavings(10);
    setYearlySavings(120);

    setResult(
      "Copilot Business may be unnecessary for your current usage."
    );

  } else {

    setMonthlySavings(0);
    setYearlySavings(0);

    setResult(
      "Your current AI spending appears reasonably optimized."
    );
  }
};

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white p-8">
      <div className="max-w-2xl mx-auto">

        <div className="text-center">

  <span className="bg-white/10 border border-white/10 text-sm px-4 py-2 rounded-full">
    AI Cost Optimization Platform
  </span>

  <h1 className="text-6xl font-bold mt-6 leading-tight">
    Reduce AI Tool
    <span className="block text-zinc-400">
      Overspending Instantly
    </span>
  </h1>

  <p className="text-gray-400 text-center mt-6 max-w-2xl mx-auto text-lg">
    Analyze your AI subscriptions, identify unnecessary costs,
    and discover smarter pricing strategies for growing teams.
  </p>

</div>

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

    <div className="grid grid-cols-2 gap-4 mt-6">

      <div className="bg-black p-5 rounded-xl border border-zinc-800">
        <p className="text-gray-400 text-sm">
          Monthly Savings
        </p>

        <h3 className="text-3xl font-bold mt-2">
          ${monthlySavings}
        </h3>
      </div>

      <div className="bg-black p-5 rounded-xl border border-zinc-800">
        <p className="text-gray-400 text-sm">
          Annual Savings
        </p>

        <h3 className="text-3xl font-bold mt-2">
          ${yearlySavings}
        </h3>
      </div>

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