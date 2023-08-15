import { Box, Button, Typography } from '@mui/material'
import { Dress } from '../icons/Dress.tsx'
import { Denim } from '../icons/Denim.tsx'
import { Tess } from '../icons/Tess.tsx'
import { Swimwear } from '../icons/Swimwear.tsx'
import { Tops } from '../icons/Tops.tsx'
import { Beauty } from '../icons/Beauty.tsx'

const buttonStyle = {
  maxWidth: '200px',
  width: '100%',
  height: '80px',
  borderRadius: '0px',
  backgroundColor: '#EDE7F0',
  color: '#000F08',
  fontSize: '20px',
  textTransform: 'none',
}

export const CategorySection = () => {
  return (
    <Box sx={{ height: '780px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', pt: '120px' }}>
        Shop by the <b>Category</b>
      </Typography>
      <Box sx={{ display: 'flex', gap: '24px', justifyContent: 'center', pt: '80px' }}>
        <Button sx={buttonStyle}>
          <Dress />
          Dresses
        </Button>
        <Button sx={buttonStyle}>
          <Tess />
          Tees
        </Button>
        <Button sx={buttonStyle}>
          <Swimwear />
          Swimwear
        </Button>
        <Button sx={buttonStyle}>
          <Denim />
          Denim
        </Button>
        <Button sx={buttonStyle}>
          <Tops />
          Tops
        </Button>
        <Button sx={buttonStyle}>
          <Beauty />
          Beauty
        </Button>
      </Box>
    </Box>
  )
}
