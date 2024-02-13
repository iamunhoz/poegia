import OpenAI from "openai"
import woodenImage from "src/lib/assets/wooden-wall-cropped.png"

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
})

export const openaiImageQuery = async (prompt: string) => {
  try {
    const response = await openai.images.generate({
      prompt,
      model: "dall-e-3",
      n: 1,
      size: "1024x1024",
    })

    if (!response.data[0].url) return null
    return new URL(response.data[0].url) || null
  } catch (error) {
    console.error({ error })
    return null
  }
}

export const openaiImageEdit = async () => {
  try {
    const response = await openai.images.createVariation({
      image: await fetch(woodenImage),

      //   model: "dall-e-3",
      n: 1,
      size: "1024x1024",
    })

    console.log({ response })

    return response.data[0].url || null
  } catch (error) {
    console.error({ error })
    return null
  }
}
