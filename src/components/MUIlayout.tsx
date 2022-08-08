import { Box, Divider, Stack ,Grid, Paper} from '@mui/material'
import React from 'react'

export const MUIlayout = () => {
  return (
    <Paper sx={{
      padding:'20px',
    }} elevation={4}>
    <Stack sx={{
        border:'1px solid'

    }} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem/>}>
    <Box sx={{
        backgroundColor:'primary.main',
        color:'white',
        height:'150px',
        width:'150px',
        padding:'16px',
        '&:hover':{
            backgroundColor:'primary.light',
        }
    }}>MUIlayout</Box>
    <Box display='flex' height='150px' width='150px' bgcolor='success.light' p={2}></Box>
    </Stack>
    <Grid container rowSpacing={2} columnSpacing={1}>
      <Grid item xs={3}>
        <Box bgcolor='primary.main' p={2}>grid 1</Box>
      </Grid>
      <Grid item xs={9}>
        <Box bgcolor='success.main' p={2}>grid 2</Box>
      </Grid>
      <Grid item xs={6}>
        <Box bgcolor='warning.main' p={2}>grid 3</Box>
      </Grid>
      <Grid item xs={6}>
        <Box bgcolor='secondary.main' p={2}>grid 4</Box>
      </Grid>
    </Grid>
    </Paper>
  )
}
