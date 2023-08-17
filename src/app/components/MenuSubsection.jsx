import { Typography } from '@mui/material'
import React from 'react'

export default function MenuSubsection({children}) {
  return (
    <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontFamily: 'Raleway', fontSize: '20px' }} m={2}>
      {children}
    </Typography>
  )
}
