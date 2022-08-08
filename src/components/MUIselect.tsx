import { Box, MenuItem, TextField } from '@mui/material'
import React ,{useState}from 'react'

export const MUIselect = () => {
    const [countries,setCountries]=useState<string[]>([])
    console.log({countries},)
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const {value}=event.target
        setCountries(typeof value==='string'? value.split(','):value )
    }
  return (
    <Box width='200px'>
        <TextField  select fullWidth label='Select Country' 
        onChange={handleChange} SelectProps={{multiple:true}} value={countries}  helperText='select your conuntry' color='secondary'>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='ET'>Ethiopia</MenuItem>
            <MenuItem value='US'>USA</MenuItem>

        </TextField>
    </Box>
  )
}
