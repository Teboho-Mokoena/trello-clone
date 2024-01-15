import { Configuration, OpenAIApi } from "openai";

const  coonfiguration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(coonfiguration);

export default openai;