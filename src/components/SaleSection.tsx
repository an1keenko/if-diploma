import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box, Button, Typography } from '@mui/material'
import Arrow from '../icons/Arrow.tsx'
import Container from './Container.tsx'
import Loading from './Loading.tsx'

interface SaleItem {
  id: number
  images: string[]
  name: string
  price: {
    value: number
  }
  discountPercent: number
}

const convertPrice = (value: number) => (value / 100).toFixed(2)

function SaleSection() {
  const [items, setItems] = useState<SaleItem[]>([])
  const discountPercentages = [20, 50, 30]

  useEffect(() => {
    fetch('https://if-modnikky-api.onrender.com/api/catalog')
      .then((response) => response.json())
      .then((data) => {
        const itemsWithDiscount = data.map((item: SaleItem, index: number) => ({
          ...item,
          discountPercent: discountPercentages[index % discountPercentages.length],
        }))
        setItems(itemsWithDiscount)
      })
      .catch((error) => console.error('Error:', error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    nextArrow: (
      <Button
        sx={{
          position: 'absolute',
          transform: 'translate(-1em, -4em)',
          '&.slick-next:before': {
            display: 'none',
          },
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Arrow />
      </Button>
    ),
  }

  const calculateDiscountedPrice = (price: number, discountPercent: number) => {
    const discountAmount = (price * discountPercent) / 100
    return price - discountAmount
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        #MODNIKKY_<b>Sale</b>
      </Typography>
      {items.length === 0 && <Loading />}
      <Box sx={{ mt: '80px' }}>
        {items.length > 0 && (
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.id}>
                <img src={item.images[0]} alt={item.name} style={{ width: '300px', height: '400px' }} />
                <Typography
                  sx={{
                    position: 'absolute',
                    transform: 'translateY(-24px)',
                    width: '48px',
                    height: '24px',
                    color: '#FFF',
                    backgroundColor: '#D7302D',
                    textAlign: 'center',
                  }}
                >
                  -{item.discountPercent}%
                </Typography>
                <Box sx={{ display: 'flex', gap: '12px', mt: '12px', alignItems: 'center' }}>
                  <Typography sx={{ textDecoration: 'line-through' }}>${convertPrice(item.price.value)}</Typography>
                  <Typography sx={{ fontWeight: '700', fontSize: '1.1rem', color: '#D7302D' }}>
                    ${convertPrice(calculateDiscountedPrice(item.price.value, item.discountPercent))}
                  </Typography>
                </Box>
              </div>
            ))}
          </Slider>
        )}
      </Box>
    </Container>
  )
}
export default SaleSection
