import './Header.css'
import { Wishlist } from '../icons/Wishlist'
import { Search } from '../icons/Search'
import { Box, Button, Typography } from '@mui/material'
import '../assets/background.jpg'
import './Header.css'

const noWrap = {
  whiteSpace: 'nowrap',
}

export const Header = () => {
  return (
    <Box className="header" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box
        sx={{
          padding: '40px 120px',
          height: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundImage: 'url(../assets/background.jpg)',
          color: 'white',
        }}
      >
        <Box sx={{ display: 'flex', gap: '80px' }}>
          <Typography variant="body1" color="white" sx={noWrap}>
            NEW ARRIVALS
          </Typography>
          <Typography variant="body1">SHOP</Typography>
          <Typography variant="body1">COLLECTIONS</Typography>
        </Box>
        <Typography variant="h4" sx={{ fontWeight: '700' }}>
          MODNIKKY
        </Typography>
        <Box sx={{ display: 'flex', gap: '80px' }}>
          <Typography variant="body1" sx={noWrap}>
            <Search />
            SEARCH
          </Typography>
          <Typography variant="body1" sx={noWrap}>
            SIGN IN
          </Typography>
          <Typography variant="body1">BAG</Typography>
          <Typography variant="body1">
            <Wishlist />
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: '150px 150px' }}>
        <Typography variant="h3" color="white" sx={{ fontWeight: '700px' }}>
          NEW COLLECTION
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: '20px', maxWidth: '800px', width: '100%', fontSize: '24px', fontWeight: '400px' }}
        >
          Our easiest chuck-on-and-go staples come with a serious style heritage that’s liberating, sexy, comfy and
          supremely cool.
        </Typography>
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            mt: '30px',
            p: '20px 40px',
            fontSize: '18px',
            color: 'white',
          }}
        >
          SHOP NEW ARRIVALS
        </Button>
      </Box>
    </Box>
  )
}
