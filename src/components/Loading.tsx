import { Box, CircularProgress, Typography } from '@mui/material'

function Loading() {
  return (
    <Box
      sx={{
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
      }}
    >
      <Typography variant="h4" color="inherit">
        Loading...
      </Typography>
      <CircularProgress color="inherit" />
    </Box>
  )
}

export default Loading
