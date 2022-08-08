import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";

export const MUIaccordion = () => {
  const [expanded, setExpanded] = React.useState<string |false>(false);
  const handleChange = (isExpanded:boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  }
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          id="panel1-header"
          aria-controls="panel1-content"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur perspiciatis tempora nobis commodi autem repellendus
            earum eos labore saepe odit nihil vel rem inventore voluptatibus
            dolores, nemo placeat vero? Itaque.
          </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          id="panel2-header"
          aria-controls="panel2-content"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur perspiciatis tempora nobis commodi autem repellendus
            earum eos labore saepe odit nihil vel rem inventore voluptatibus
            dolores, nemo placeat vero? Itaque.
          </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          id="panel3-header"
          aria-controls="panel3-content"
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur perspiciatis tempora nobis commodi autem repellendus
            earum eos labore saepe odit nihil vel rem inventore voluptatibus
            dolores, nemo placeat vero? Itaque.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
