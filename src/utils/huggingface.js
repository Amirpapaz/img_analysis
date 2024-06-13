import { HfInference } from "@huggingface/inference"

const HF_ACCESS_TOKEN = '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'
const inference = new HfInference(HF_ACCESS_TOKEN)
const model = "Salesforce/blip-image-captioning-large"

export async function getImageCaption(file, url) {
  try {
    const imgUrl = file || url
    console.log("Fetching image from:", imgUrl)
    
    const response = await fetch(imgUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`)
    }
    
    const imageBlob = await response.blob()
    console.log("Image blob fetched:", imageBlob)

    const result = await inference.imageToText({
      data: imageBlob,
      model: model,
    })
    console.log("Inference result:", result)

    return result.generated_text
  } catch (error) {
    console.error("Error in getImageCaption:", error)
    throw error
  }
}


