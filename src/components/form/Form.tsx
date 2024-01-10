import React from 'react'
import { FormControl, TextField, MenuItem, Button, Typography } from '@mui/material'
import { DNDRaces, DNDClasses, DNDLevels, DNDAlignments } from '../../utils/constants'
import { getBackstoryPrompt, BackstorySystemPrompt } from '../../utils/prompts'
import { queryAI } from '../../openai/textai'
import { useAppDispatch } from '../../redux/hooks'
import { updateBackstory, updateIsThinking } from '../../redux/slices/AIresponseSlice'

interface form {
  name: string
  class: string
  race: string
  level: number
  alignment: string
}

const validate = (data: form) => {
  return (
    data.class !== null &&
    data.race !== null &&
    data.alignment !== null &&
    data.class.length > 0 &&
    data.race.length > 0 &&
    data.level > 0 &&
    data.alignment.length > 0
  )
}

const Form = () => {
  const dispatch = useAppDispatch()
  const [formState, setFormState] = React.useState({
    name: '',
    class: '',
    race: '',
    level: 0,
    alignment: ''
  })
  const [valid, setValid] = React.useState(false)

  React.useEffect(() => {
    setValid(validate(formState))
  }, [formState])

  const handleClick = async () => {
    dispatch(updateBackstory(''))
    dispatch(updateIsThinking(true))
    const response = await queryAI(
      BackstorySystemPrompt,
      getBackstoryPrompt(
        formState.name,
        formState.race,
        formState.class,
        formState.level,
        formState.alignment
      )
    )
    dispatch(updateBackstory(response?.choices[0].message.content))
    dispatch(updateIsThinking(false))
  }

  return (
    <FormControl
      sx={{
        display: 'flex',
        gap: 3,
        '@media (max-width: 873px)': {
          width: '100%'
        }
      }}
    >
      <Typography variant="h5">Create a character</Typography>
      <TextField
        id="name-field"
        label="Character name (Optional)"
        size="small"
        color="secondary"
        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
      />
      <TextField
        id="race-select"
        select
        required
        label="Race"
        size="small"
        color="secondary"
        defaultValue={''}
        onChange={(e) => setFormState({ ...formState, race: e.target.value })}
        value={formState.race}
      >
        {DNDRaces.map((race: string) => (
          <MenuItem key={race} value={race}>
            {race}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="class-select"
        select
        required
        label="Class"
        size="small"
        color="secondary"
        defaultValue={''}
        onChange={(e) => setFormState({ ...formState, class: e.target.value })}
        value={formState.class}
      >
        {DNDClasses.map((cl: string) => (
          <MenuItem key={cl} value={cl}>
            {cl}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="alignment-select"
        select
        required
        label="Alignment"
        size="small"
        color="secondary"
        defaultValue={''}
        onChange={(e) => setFormState({ ...formState, alignment: e.target.value })}
        value={formState.alignment}
      >
        {DNDAlignments.map((al: string) => (
          <MenuItem key={al} value={al}>
            {al}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="level-select"
        select
        required
        size="small"
        label="Level"
        color="secondary"
        defaultValue={''}
        onChange={(e) => setFormState({ ...formState, level: Number(e.target.value) })}
        value={formState.level}
      >
        {DNDLevels.map((lvl: number) => (
          <MenuItem key={lvl} value={lvl}>
            {lvl}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        color="secondary"
        disabled={!valid}
        onClick={handleClick}
      >
        Create
      </Button>
    </FormControl>
  )
}

export default Form
