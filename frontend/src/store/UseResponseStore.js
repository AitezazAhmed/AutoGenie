// store/UseResponseStore.js
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
export const useResponseStore = create((set) => ({
  generatedText: null, // state
  generatedquote:null,
  generatedcode:null,
  generatedname:null,
  generatedhashtag:null,
  generatedanswer:null,
  textgenerator: async (data) => { // action 
    try {
      const res = await axiosInstance.post("/generate-text", { prompt: data });
      console.log(prompt)
      set({ generatedText: res.data.output }); // update state]
    } catch (error) {
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
    }
  },
    quotegenerator: async (data) => { // action
    try {
      const res = await axiosInstance.post("/quote-Generator", { prompt: data });
     
      set({ generatedquote: res.data.output }); // update state]
      console.log()
    } catch (error) {
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
    }
  },
    codegenerator: async (data) => { // action
    try {
      const res = await axiosInstance.post("/code-Generator", { prompt: data });
     
      set({ generatedcode: res.data.output }); // update state]
      console.log()
    } catch (error) {
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
    }
  },
     namegenerator: async (data) => { // action
    try {
      const res = await axiosInstance.post("/name-Generator", { prompt: data });
     
      set({ generatedname: res.data.output }); // update state]
      console.log()
    } catch (error) {
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
    }
  },
    hashtaggenerator: async (data) => { // action
    try {
      const res = await axiosInstance.post("/hashtag-Generator", { prompt: data });
     
      set({ generatedhashtag: res.data.output }); // update state]
      console.log()
    } catch (error) {
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
    }
  },
      answergenerator: async (data) => { // action
    try {
      const res = await axiosInstance.post("/answer-Generator", { prompt: data });
     
      set({ generatedanswer: res.data.output }); // update state]
      console.log()
    } catch (error) {
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
    }
  },



}

));

