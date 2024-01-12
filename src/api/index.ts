import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const openaiImageQuery = async (prompt:string) => {
    try {
        const response = await openai.images.generate({
            prompt,
            model: 'dall-e-3',
            n: 1,
            size: '1024x1024'
        })

        console.log({ response })
    
        return response.data[0].url || null
    } catch (error) {
        console.error({error})
        return null
    }
}