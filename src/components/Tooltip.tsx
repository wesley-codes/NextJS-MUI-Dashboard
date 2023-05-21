import { PieTooltipProps } from "@nivo/pie";
import React from "react";
import { Box, useTheme, Typography } from "../lib/mui";
import { BarDatum } from "@nivo/bar";
import { tokens } from "./Theme";
import { PointTooltipProps, SliceTooltip, SliceTooltipProps } from "@nivo/line";

// interface TooltipProps {
//   datum: PieTooltipProps<BarDatum> | SliceTooltipProps
// }

const Tooltip = ({ datum }: PieTooltipProps<BarDatum>) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        backgroundColor: colors.primary[400],
        display: "flex",
        width: "80px",
        padding: "5px",
        borderRadius: "8px",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: datum.color,
          height: "15px",
          width: "15px",
          borderRadius: "50px",
          margin: "0 5px",
        }}
      ></Box>
      <Box>
        <Typography variant="h6" color={colors.greenAccent[400]}>
          {datum.value}
        </Typography>
      </Box>
    </Box>
  );
};

export default Tooltip;
