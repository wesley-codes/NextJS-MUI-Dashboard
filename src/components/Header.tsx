"use client"
import React from 'react'
import { Typography,  useTheme} from "../lib/mui";
import { tokens } from './Theme';

interface HeaderProps  {
    title: String
    subtitle:String
}


export default function Header({title, subtitle}:HeaderProps) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <div className="mb-8">
    <Typography
      variant="h2"
      color={colors.grey[100]}
      fontWeight="bold"
      sx={{ m: "0 0 5px 0" }}
    >
      {title}
    </Typography>
    <Typography variant="h5" color={colors.greenAccent[400]}>
      {subtitle}
    </Typography>
  </div>
  )
}
