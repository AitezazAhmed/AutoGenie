import express from "express"
import { generateAnswer, generateCode, generateHashtag, generateName, generateText,quoteGenerator } from "../controllers/api.controller.js"
const router =express.Router();

router.post("/generate-text",generateText)
router.post("/quote-Generator",quoteGenerator)
router.post("/code-Generator", generateCode);
router.post("/name-Generator", generateName);
router.post("/hashtag-Generator", generateHashtag);
router.post("/answer-Generator", generateAnswer);

export default router