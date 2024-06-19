import { HfInference } from "@huggingface/inference"

const HF_ACCESS_TOKEN = `${import.meta.env.VITE_API_URL}`
const inference = new HfInference(HF_ACCESS_TOKEN)
let modelTracker = 0
const models = ["Salesforce/blip-image-captioning-large","nlpconnect/vit-gpt2-image-captioning","dblasko/blip-dalle3-img2prompt"]

export function resetmodelTracker(){
  modelTracker = 0
}

export async function getImageCaption(file, url,regenerate) {
  try {
    const imgUrl = file || url
    console.log("Fetching image from:", imgUrl)
    
    const response = await fetch(imgUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`)
    }
    
    const imageBlob = await response.blob()
    console.log("Image blob fetched:", imageBlob)

    if(regenerate === true){
      modelTracker = modelTracker + 1   

      if(modelTracker === models.length) {
        modelTracker = 0
      }
    }
    const result = await inference.imageToText({
      data: imageBlob,
      model: models[modelTracker],
    })
    console.log("Inference result:", result)

    return result.generated_text
  } catch (error) {
    console.error("Error in getImageCaption:", error)
    throw error
  }
}


