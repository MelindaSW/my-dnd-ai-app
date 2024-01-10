export const getBackstoryPrompt = (
  name: string | null,
  race: string,
  cl: string,
  level: number,
  alignment: string
) => {
  return `Race: ${race}, Class: ${cl}, Level: ${level}, Alignment: ${alignment}, Name: ${name}`
}

export const BackstorySystemPrompt =
  "You will get content with information about a character. It will contain information about the character's name, race, class, alignment and level. If the name is missing, name the character yourself. Use this to create a new character and it's backstory."
