import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const generateText = async (req, res) => {
  try {
    const { prompt } = req.body;
   const updatedPrompt = `
${prompt}
Please generate a clear, engaging response:
- Use emojis where appropriate 🎉
- Keep information accurate and professional
- Make headings **bold** (Markdown style) without using stars (*) around them
- Place each heading on a separate line
- Write in an attractive, reader-friendly style
- Do not use bullet points unless needed
`;
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",  // ✅ working model
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: updatedPrompt },
      ],
    });

    // extract the actual reply
    const reply = completion.choices[0].message.content;
    

  res.json({ output:reply }); }
   catch (error) {
    console.error("Groq error:", error);
    res.status(500).json({ error: "Something went wrong with Groq" });
  }
};



export const quoteGenerator = async (req, res) => {
  try {
    const { prompt } = req.body;
const updatedPrompt = prompt + 
  " Generate ONLY meaningful and engaging quotes. " +
  "Return each quote on a new line with numbering (1, 2, 3...). " +
  "Do not add headings, explanations, or extra text. " +
  "Each quote should be inside quotes (\"\") and end with an emoji.";
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",  // ✅ working model
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: updatedPrompt },
      ],
    });

    // extract the actual reply
    const reply = completion.choices[0].message.content;
  res.json({ output:reply }); }
   catch (error) {
    console.error("Groq error:", error);
    res.status(500).json({ error: "Something went wrong with Groq" });
  }
};
export const generateName = async (req, res) => {
  try {
    const { prompt } = req.body;

    const updatedPrompt = prompt + 
      " Generate ONLY unique, creative, and professional business names. " +
      "Return each name on a new line with numbering (1, 2, 3...). " +
      "Do not add headings, explanations, or extra text. " +
      "Each name should be concise, catchy, and brandable.";

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",  // ✅ working model
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: updatedPrompt },
      ],
    });

    // extract the actual reply
    const reply = completion.choices[0].message.content;
    res.json({ output: reply });

  } catch (error) {
    console.error("Groq error:", error);
    res.status(500).json({ error: "Something went wrong with Groq" });
  }
};

export const generateHashtag = async (req, res) => {
  try {
    const { prompt } = req.body;

    const updatedPrompt = prompt +
      " Generate ONLY trending, unique, and relevant hashtags for social media. " +
      "Return each hashtag on a new line with numbering (1, 2, 3...). " +
      "Do not add headings, explanations, or extra text. " +
      "Each hashtag must start with # and be short, catchy, and suitable for Instagram, TikTok, or Twitter.";

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",  // ✅ working model
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: updatedPrompt },
      ],
    });

    // extract the actual reply
    const reply = completion.choices[0].message.content;
    res.json({ output: reply });

  } catch (error) {
    console.error("Groq error:", error);
    res.status(500).json({ error: "Something went wrong with Groq" });
  }
};
export const generateAnswer = async (req, res) => {
  try {
    const { prompt } = req.body;

    const updatedPrompt =
      "You are an AI assistant. Answer the user's question clearly and concisely. " +
      "If the question is unclear, ambiguous, or you don't understand it, respond with: 'Please clarify your question.' " +
      "Do not generate unrelated content. Here is the question: " + prompt;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant", // ✅ working model
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: updatedPrompt },
      ],
    });

    // extract the actual reply
    const reply = completion.choices[0].message.content;
    res.json({ output: reply });

  } catch (error) {
    console.error("Groq error:", error);
    res.status(500).json({ error: "Something went wrong with Groq" });
  }
};



export const generateCode = async (req, res) => {
  try {
    const {  prompt } = req.body || {};
    if (!prompt) {
      return res
        .status(400)
        .json({ error: "Both 'language' and 'prompt' are required." });
    }
    const systemMsg = [
      "You are a code generator.",
      "Output MUST be ONLY the source code.",
      "No explanations, no comments, no markdown, no backticks.",
      "Write valid, runnable code in the requested language.",
      "If HTML is requested, output a complete minimal HTML document.",
      "If the user asks for a function/class/module, return exactly that artifact.",
    ].join(" ");
    const userMsg = `
Task: ${prompt}
Constraints:
- Do NOT include triple backticks.
- Do NOT include prose or headings.
- Keep it clean and idiomatic.`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0.2,
      max_tokens: 1200,
      messages: [
        { role: "system", content: systemMsg },
        { role: "user", content: userMsg },
      ],
    });

    const raw = completion?.choices?.[0]?.message?.content ?? "";
    const codeOnly = raw.trim();
    if (!codeOnly) {
      return res.status(502).json({ error: "Empty response from model." });
    }

    res.json({ output:codeOnly });
  } catch (err) {
    console.error("Groq code-gen error:", err?.message || err);
    res.status(500).json({ error: "Code generation failed" });
  }
};