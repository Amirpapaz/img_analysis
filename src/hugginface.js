import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.API_KEY;

const inference = new HfInference(HF_ACCESS_TOKEN)
const model = "nlpconnect/vit-gpt2-image-captioning";
const imgUrl = "https://cdn.mos.cms.futurecdn.net/HjFE8NKWuCmgfHCcndJ3rK.jpg";

const response = await fetch(imgUrl);
const imageBlob = await response.blob();

const result = await inference.imageToText({
    data: imageBlob,
    model: model,
});

console.log(result)