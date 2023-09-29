import Container from './Container.tsx'
import { Box, Typography } from '@mui/material'
import React from 'react'

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}

function FooterSection() {
  const createLink = (text: React.ReactNode) => (
    <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
      {text}
    </a>
  )

  return (
    <Container sx={{ display: 'flex', justifyContent: 'space-between', margin: '60px 0' }}>
      <Box sx={boxStyle}>
        <Typography variant="h6">CUSTOMER SERVICE</Typography>
        {createLink(<Typography variant="subtitle2">CONTACT</Typography>)}
        {createLink(<Typography variant="subtitle2">TRACK ORDER</Typography>)}
        {createLink(<Typography variant="subtitle2">DELIVERY & RETURNS</Typography>)}
        {createLink(<Typography variant="subtitle2">PAYMENT</Typography>)}
        {createLink(<Typography variant="subtitle2">MAKE A RETURN</Typography>)}
        {createLink(<Typography variant="subtitle2">FAQ</Typography>)}
      </Box>
      <Box sx={boxStyle}>
        <Typography variant="h6">INFO</Typography>
        {createLink(<Typography variant="subtitle2">GIFT VOUCHERS</Typography>)}
        {createLink(<Typography variant="subtitle2">SIZE GUIDE</Typography>)}
        {createLink(<Typography variant="subtitle2">CAREERS AT MODNIKKY</Typography>)}
        {createLink(<Typography variant="subtitle2">ABOUT US</Typography>)}
        {createLink(<Typography variant="subtitle2">LEGAL POLICIES</Typography>)}
      </Box>
      <Box sx={boxStyle}>
        <Typography variant="h6">FOLLOW US</Typography>
        {createLink(<Typography variant="subtitle2">FACEBOOK</Typography>)}
        {createLink(<Typography variant="subtitle2">ODNOKLASSNIKI</Typography>)}
        {createLink(<Typography variant="subtitle2">INSTAGRAM</Typography>)}
      </Box>
      <Box sx={boxStyle}>
        <Typography variant="h6">CONTACT US</Typography>
        {createLink(<Typography variant="subtitle2">hello@modnikky.com</Typography>)}
        {createLink(<Typography variant="subtitle2">+7 910 832 26XX</Typography>)}
        {createLink(
          <Typography variant="subtitle2">
            Visit us at Shalalaeva 23, <br />
            Bologoe, Russia
          </Typography>,
        )}
      </Box>
    </Container>
  )
}

export default FooterSection
