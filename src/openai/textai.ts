import OpenAI from 'openai'

const openai = new OpenAI({
  organization: import.meta.env.VITE_API_ORGANIZATION,
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true
})

export const queryAI = async (systemContent: string, userContent: string) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: systemContent
        },
        {
          role: 'user',
          content: userContent
        }
      ],
      temperature: 0.9,
      max_tokens: 4000
      // top_p: 1
    })

    return response
  } catch (error) {
    console.log(error)
  }
}

// Example of response format
// {
//   "choices": [
//     {
//       "finish_reason": "stop",
//       "index": 0,
//       "message": {
//         "content": "The 2020 World Series was played in Texas at Globe Life Field in Arlington.",
//         "role": "assistant"
//       },
//       "logprobs": null
//     }
//   ],
//   "created": 1677664795,
//   "id": "chatcmpl-7QyqpwdfhqwajicIEznoc6Q47XAyW",
//   "model": "gpt-3.5-turbo-0613",
//   "object": "chat.completion",
//   "usage": {
//     "completion_tokens": 17,
//     "prompt_tokens": 57,
//     "total_tokens": 74
//   }
// }
