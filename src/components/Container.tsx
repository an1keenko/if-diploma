import React from 'react'
import { Box } from '@mui/material'

function Container({ children }: { children: React.ReactNode }) {
  return <Box sx={{ p: '0 120px' }}>{children}</Box>
}

export default Container
