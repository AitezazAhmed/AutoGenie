
import { useState } from "react";
import { useResponseStore } from "../store/UseResponseStore";
const Businessnamegenerator = () => {
   const [input, setInput] = useState("");
      const { generatedname, namegenerator } = useResponseStore();
    
      const handleGenerate = () => {
        namegenerator(input); // call backend
      };
  return (
        <div className="min-h-screen bg-white flex flex-col items-center p-6 overflow-hidden">
      {/* Header */}
      <h1 className="text-3xl font-bold text-sky-600 mb-2">
        AutoGenie - Business Name Generator
      </h1>
      <p className="text-gray-500 mb-6">Generate business name instantly using AI</p>

      {/* Input */}
      <textarea
        className="w-full max-w-2xl h-40 border border-sky-300 rounded-xl p-4 focus:outline-sky-500"
        placeholder="Type your prompt here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Button */}
      <button
        onClick={handleGenerate}
        className="mt-4 px-6 py-2 bg-sky-500 text-white rounded-xl shadow-md hover:bg-sky-600"
      >
        Generate
      </button>

      {/* Output */}
      {generatedname && (
        <div className="mt-6 w-full max-w-2xl bg-sky-50 border border-sky-200 rounded-xl p-4 shadow">
          <h2 className="text-lg font-semibold text-sky-700 mb-2">
            Generated Name:
          </h2>
          <p className="text-gray-700">{generatedname}</p>
        </div>
      )}
    </div>
  )
}

export default Businessnamegenerator
