"use client";
import React from "react";
import { Box, useTheme, Typography } from "../lib/mui";
import { tokens } from "./Theme";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures, mockGeographyData as data } from "@/data/mockData";
interface GeoChartProps {
  isDashboard: Boolean;
}
export default function GeoChart({ isDashboard }: GeoChartProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      tooltip={(feature) => {
        return (
          <Box
            sx={{
              backgroundColor: colors.primary[400],
              display: "flex",
              width: "fit-content",
              padding: "5px",
              borderRadius: "8px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: feature.feature.color,
                height: "15px",
                width: "15px",
                borderRadius: "50px",
                margin: "0 5px",
              }}
            ></Box>
            <Box>
              <Typography variant="h6" color={colors.greenAccent[400]}>
                {feature.feature.value}
              </Typography>
            </Box>
          </Box>
        );
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      colors="RdYlBu"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
}
