export const BackstorySystemPrompt =
  "You will get a comma separated list with information about a DnD character. If the name is missing, name the character yourself. Use this to create a new character and it's backstory."

export const getBackstoryPrompt = (
  name: string | null,
  race: string,
  cl: string,
  level: number,
  alignment: string
) => {
  return `Race: ${race}, Class: ${cl}, Level: ${level}, Alignment: ${alignment}, Name: ${name}`
}

export const getMoreInformationPrompt = (topic: string) => {
  if (topic === 'A lost battle') {
    return 'Describe a battle this character once lost.'
  } else if (topic === 'A victorious battle') {
    return 'Describe a battle this character won.'
  } else if (topic === 'Their companions') {
    return 'Who are the companions this character travels with?'
  } else {
    return "Describe this character's love Interest and how they met."
  }
}
