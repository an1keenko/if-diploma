import { Box, Link, Typography } from '@mui/material'
import Next from '../icons/Next.tsx'
import { useEffect, useState } from 'react'
import Container from './Container.tsx'

interface Item {
  id: number
  name: string
  images: string[]
}

function MainSection() {
  const [items, setItems] = useState<Item[]>([]) // Используйте определенный интерфейс здесь

  useEffect(() => {
    fetch('https://if-modnikky-api.onrender.com/api/catalog')
      .then((response) => response.json())
      .then((data: Item[]) => {
        const items = data.map((item) => ({
          ...item,
        }))
        setItems(items)
      })
      .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <Container>
      <Box sx={{ display: 'flex', gap: '60px', m: '130px 10px 30px' }}>
        <Link href="https://www.instagram.com/" underline="hover" color="#000F08">
          <Typography variant="subtitle2">SHOP INSTAGRAM</Typography>
        </Link>
        <Link href="#" underline="hover" color="#000F08">
          <Typography variant="subtitle2">
            SHOP <Next style={{ marginLeft: '10px' }} />
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', height: '630px', gap: 0 }}>
        {items.length > 0 && (
          <Box style={{ display: 'flex' }}>
            <Box>
              <img
                key={items[5].id}
                src={items[8].images[0]}
                alt={`Item 1`}
                style={{ width: '630px', height: '630px', objectFit: 'cover' }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
              {items.slice(12, 16).map((item, index) => (
                <img
                  key={item.id}
                  src={item.images[0]}
                  alt={`Item ${index + 2}`}
                  style={{ width: '315px', height: '315px', objectFit: 'cover' }}
                />
              ))}
            </Box>
          </Box>
        )}
      </Box>
      <Typography variant="subtitle2" sx={{ m: '30px 10px' }}>
        #MODNIKKY
      </Typography>
    </Container>
  )
}

export default MainSection
