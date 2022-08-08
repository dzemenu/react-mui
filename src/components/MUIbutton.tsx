import React, { useState } from "react";
import { Button, ButtonGroup, IconButton, Stack ,ToggleButton, ToggleButtonGroup} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { FormatBold ,FormatItalic,FormatUnderlined} from "@mui/icons-material";
export const MUIbutton = () => {
    const [format,setFormat]=useState <string |null>(null)
    console.log({format,})
    const handleChange=(_event:React.MouseEvent<HTMLElement>,updatedFormat:string |null)=>
    {
        setFormat(updatedFormat)
       
    }
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Small
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Small
        </Button>
        <IconButton color="primary" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary">

        <Button >
          Left
        </Button>
        <Button >
          Middle
        </Button>
        <Button >
          right
        </Button>
        </ButtonGroup>
        
        
      </Stack>
      <Stack
      direction='row'>
        <ToggleButtonGroup onChange={handleChange} value={format} orientation='vertical' size="small" exclusive>
            <ToggleButton value='bold'><FormatBold/></ToggleButton>
            <ToggleButton value='italic'><FormatItalic/></ToggleButton>
            <ToggleButton value='underline'><FormatUnderlined/></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
