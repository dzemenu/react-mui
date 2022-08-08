import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const MUIcard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia component='img' height='150px' image="https://source.unsplash.com/random"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p">
            you can find different topics in the table of contents. On desktop,
            you should see it in the left sidebar. On mobile, you should see it
            after pressing an icon with arrows in the top left corner.
          </Typography>
        </CardContent>
        <CardActions>
          {" "}
          <Button>SHARE</Button> <Button>LEARN MORE</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
