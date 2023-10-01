import React from 'react'
import { Box } from '@mui/material'

function Container({ children, sx }: { children: React.ReactNode; sx?: React.CSSProperties }) {
  return <Box sx={{ p: '0 120px', ...sx }}>{children}</Box>
}

export default Container
