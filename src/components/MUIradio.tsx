import { Box, FormControl, FormControlLabel, FormLabel, RadioGroup,Radio } from '@mui/material'
import React from 'react'

export const MUIradio = () => {
    const [value, setValue] = React.useState('')
    console.log({value})
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }
  return (
    <Box>
        <FormControl>
            <FormLabel>Years of Experience</FormLabel>
           <RadioGroup value={value} onChange={handleChange}>
                <FormControlLabel value='1-2' control={<Radio  color='secondary'/>} label='1-2' />
                <FormControlLabel value='2-4' control={<Radio />} label='2-4' />

                <FormControlLabel value='4-6' control={<Radio />} label='4-6' />
           </RadioGroup>
        </FormControl>
    </Box>
  )
}
