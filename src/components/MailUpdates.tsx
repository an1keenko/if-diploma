import Container from './Container.tsx'
import { Box, IconButton, InputBase, Typography } from '@mui/material'
import React, { useState } from 'react'

function MailUpdates() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('https://if-modnikky-api.onrender.com/api/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)
      } else {
        setMessage('Failed to subscribe')
      }
    } catch (error) {
      setMessage('An error occurred')
    }
  }

  return (
    <Container>
      {message ? (
        <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 400, mt: '90px' }}>
          {message}
        </Typography>
      ) : (
        <>
          <Typography variant="subtitle1" sx={{ textAlign: 'center', fontWeight: 400, mt: '90px' }}>
            SIGN UP FOR UPDATES
          </Typography>
          <Typography variant="subtitle2" sx={{ textAlign: 'center', mt: '8px' }}>
            Sign up for exclusive early sale access and tailored new arrivals.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box
              component="form"
              sx={{
                m: '40px auto',
                display: 'flex',
                alignItems: 'center',
                width: '600px',
                borderBottom: '1px solid #D8D8D8',
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                type="email"
                placeholder="Your email address"
                inputProps={{ 'aria-label': 'email address' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="join" onClick={handleSubmit}>
                <Typography color="#000F08">JOIN</Typography>
              </IconButton>
            </Box>
          </form>
        </>
      )}
    </Container>
  )
}

export default MailUpdates
