import { Rating, Stack } from '@mui/material'
import React from 'react'

export const MUIrating = () => {
    const [value, setValue] = React.useState<number |null>(null)
    console.log({value})
    const handleChange=(_event:React.ChangeEvent<{}>, newValue:number | null) => {
        setValue(newValue)
    }
  return (
    <Stack>
        <Rating value={value} onChange={handleChange} precision={0.5} size='large'/>
    </Stack>
  )
}
