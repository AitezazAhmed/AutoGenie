

                import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const generateText = async (req, res) => {
  try {
    const { prompt } = req.body;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",  // ✅ working model
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
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