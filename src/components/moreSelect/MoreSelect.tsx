import React from 'react'
import './MoreSelect.css'
import { TextField, MenuItem, Divider, Button } from '@mui/material'
import { storyOptions } from '../../utils/constants'

const MoreSelect = () => {
  const [value, setValue] = React.useState('')
  const [valid, setValid] = React.useState(false)

  React.useEffect(() => {
    setValid(value.length > 0)
  }, [value])

  const handleClick = () => {
    console.log(value)
  }

  return (
    <div className="container">
      <Divider sx={{ mb: 3 }} />
      <TextField
        id="more-select"
        select
        required
        label="Show me more"
        size="small"
        color="secondary"
        defaultValue={''}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        sx={{ width: 180, mr: 3 }}
      >
        {storyOptions.map((op: string) => (
          <MenuItem key={op} value={op}>
            {op}
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
    </div>
  )
}

export default MoreSelect
