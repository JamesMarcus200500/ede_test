import { Alert, Box } from '@mui/material'
import React from 'react'

export default function WarningAlert({ children }) {
  return (
    <Alert severity="info" sx={{ width: '100%' }}>
      {children}
    </Alert>
  )
}
