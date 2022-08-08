import React, { useRef,useState } from 'react'
import { Stack,TextField,InputAdornment } from '@mui/material'
import { Visibility } from '@mui/icons-material'
export const MUItextFeild = () => {
    let passwordRef=useRef <HTMLInputElement | null>(null)
    const [value,setValue]=useState("")
    const handleVisible=()=>{
        if(passwordRef && passwordRef.current)
        {passwordRef.current?.focus()
            passwordRef.current.innerText='not password'
        console.log(passwordRef.current.innerText)}
    }
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}> 
        <TextField label='name' variant='outlined'/>
        <TextField label='name' variant='filled'/>
        <TextField label='name' variant='standard'/>
        </Stack>

        <Stack direction='row' spacing={2}> 
        <TextField label='small secondary' size='small' color='secondary' />
        <TextField label='large error' size='small' color='error' />
        <TextField label='medium warning' size='medium' color='warning' />
        </Stack>
       
       <Stack direction='row' spacing={2}>
        <TextField label='form input' required value={value}error={!value } helperText={!value ? 'required':''} onChange={(e)=>setValue(e.target.value)}/>
        <TextField label='password' type='password' helperText='password is required' required/>
        <TextField label='Read only' inputProps={{readOnly:true}}/>
       </Stack>

       <Stack direction='row' spacing={2}>
        
        <TextField label='start' InputProps={{startAdornment:<InputAdornment position='start'>kg</InputAdornment>,}}/>
        <TextField label='end' InputProps={{endAdornment:<InputAdornment position='end'>$</InputAdornment>,}}/>
        <TextField label='password' ref={passwordRef} type='password' InputProps={{endAdornment:<InputAdornment position='end'><Visibility onClick={handleVisible} style={{cursor: 'pointer'}}/></InputAdornment>,}}/>
       </Stack>
        </Stack>
  )
}
