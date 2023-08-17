import { Alert } from '@mui/material'
import React from 'react'

export default function ErrorAlert({ children }) {
  return (
    <Alert severity="error" sx={{ width: '100%' }}>
      {children}
    </Alert>
  )
}
