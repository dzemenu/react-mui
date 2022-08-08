import { Autocomplete, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

export const MUIautocomplete = () => {
    type Skill={
        id:number,
        label:string
    }
    const skills=['html','css','java','js','c++']
    const [skill,setSkill]=useState<Skill |null>(null)
    const skillOptions=skills.map((skill,index)=>({id:index,label:skill}))
    const [value,setValue]= useState <string |null>('')
    console.log({value})
    console.log({skill})
  return (
    <Stack spacing={2}>
        <Autocomplete  options={skills}
        renderInput={(params)=><TextField {...params} label='skills'/>}  value={value} 
        onChange={(event:any,newValue:string |null)=>setValue(newValue)} freeSolo />
<h6>with array input</h6>
<Autocomplete  options={skillOptions}
        renderInput={(params)=><TextField {...params} label='skills'/>}  value={skill} 
        onChange={(event:any,newValue:Skill |null)=>setSkill(newValue)} />
    </Stack>
  )
}
