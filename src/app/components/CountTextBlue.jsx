import { Typography } from '@mui/material'
import React from 'react'

export default function CountTextBlue({children}) {
  return (
    <Typography sx={{
      color: '#217FCE',
      textAlign: 'center',
      fontFamily: 'Keep Calm',
      fontSize: '40px',
      fontStyle: 'normal',
      fontWeight: 500
    }}>
      {children}
    </Typography>
  )
}
