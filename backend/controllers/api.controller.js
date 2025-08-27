import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const hf = new HfInference(process.env.HF_API_KEY);

export const generatetext = async (req, res) => {
  try {
    const { prompt } = req.body;

 const response = await hf.textGeneration({
  model: "gpt2",
  inputs: prompt,
  parameters: { max_new_tokens: 100 },
});


    res.json({ output: response.generated_text });
  } catch (error) {
    console.error("HuggingFace error:", error);
    res.status(500).json({ error: "Something went wrong with HuggingFace" });
  }
};
