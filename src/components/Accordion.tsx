"use client";
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  useTheme,
} from "../lib/mui";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "./Theme";
export default function AccordionItem() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {" "}
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            est blanditiis, corporis quidem minus modi saepe non ipsa soluta
            quae culpa veniam aliquid commodi, rem suscipit dignissimos quos
            vero impedit. Dignissimos voluptas corporis, aperiam accusamus ea
            facilis, sequi rerum nobis similique saepe nulla. Non inventore
            quis, modi commodi consequatur id! Debitis fuga id rerum, eaque
            optio amet nesciunt iusto delectus? 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
