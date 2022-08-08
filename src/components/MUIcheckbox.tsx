import { Bookmark, BookmarkBorder } from '@mui/icons-material'
import { Box, FormControlLabel ,Checkbox, FormGroup} from '@mui/material'
import React, { useState } from 'react'

export const MUIcheckbox = () => {
    const [checked, setChecked] = React.useState(false)
    const [skills,setSkills]=useState<string []>([])
    console.log({checked})
    console.log({skills})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }
    const handSkillChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const {value,checked}=event.target
        if(checked){
            setSkills([...skills,value])
        }else{
            setSkills(skills.filter(skill=>skill!==value))
        }
    }
  return (
    <Box>
        <FormControlLabel label='accept terms and conditions' 
        control={<Checkbox  checked={checked} onChange={handleChange} />} 
           
          />
          <Box>
            <Checkbox icon={<BookmarkBorder />} checkedIcon={< Bookmark/>}/>
          </Box>
          <Box >
            <FormGroup >
          <FormControlLabel label='HTML' 
        control={<Checkbox value='html' checked={skills.includes('html')} onChange={handSkillChange} />} 
           
          /><FormControlLabel label='CSS' 
        control={<Checkbox value='css' checked={skills.includes('css')} onChange={handSkillChange} />} 
           
          /><FormControlLabel label='JAVASCRIPT'
        control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handSkillChange} />} 
           
          />
          </FormGroup>
          </Box>
    </Box>
  )
}
