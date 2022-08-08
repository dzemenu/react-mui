import { Box, FormControlLabel, Switch } from '@mui/material'
import React from 'react'

export const MUIswitch = () => {
    const [checked, setChecked] = React.useState(false)
    console.log({checked})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }
  return (
    <Box>
        <FormControlLabel label='dark mode' control={<Switch checked={checked} onChange={handleChange} />}/>
    </Box>
  )
}
