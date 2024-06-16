import { HfInference } from "@huggingface/inference"

const HF_ACCESS_TOKEN = `${import.meta.env.VITE_API_URL}`
const inference = new HfInference(HF_ACCESS_TOKEN)
let modelTracker = 0
const models = ["dblasko/blip-dalle3-img2prompt","Salesforce/blip-image-captioning-large","microsoft/trocr-base-handwritten"]

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


