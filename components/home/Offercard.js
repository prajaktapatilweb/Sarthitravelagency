import { Box, Card, Container, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import Image from 'next/image';

export default function Offercard() {
  return (
    <div>
         <div class="offer-card">
        <div class="discount-badge">50% OFF</div> 
        <img src="/images/headerback1.jpg" alt="Offer Image" />
        <div class="offer-content">
            <h2>Special Travel Deal</h2>
            <p>Book your roundtrip today and get a flat 50% discount! Hurry, limited time offer.</p>
            <button class="offer-btn">Grab Offer</button>
        </div>
        </div>
<Container>
        <Grid container spacing={2} sx={{ mb: 7 }}>
                        
                            <Grid item xs={12} sm={6} md={3} lg={3} >
        <Card
      sx={{ height: 1 }}
      contentStyle={{ padding: 0, display: 'flex', flexDirection: 'column' }}
    >
      <Box
        sx={{
          py: 5,
          px: 6,
          color: 'primary.contrastText',
          flex: 1,
          backgroundColor: 'red',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            component='h3'
            sx={{
              fontWeight: 500,
              fontSize: 16,
            }}
          >
           nnkhf
          </Box>
          <Box
            sx={{
              ml: 'auto',
            }}
          >
            <SearchIcon
              sx={{
                cursor: 'pointer',
                display: 'block',
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            py: 4,
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <Box
            component='h1'
            sx={{
              fontWeight: 400,
              fontSize: { xs: 24, sm: 36, md: 64, xl: 96 },
            }}
          >
            -32<sup>0</sup>
          </Box>
          <Box
            component='p'
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 14,
            }}
          >
            <Image
              style={{
                marginRight: 12,
              }}
              src={'/assets/images/weather/weather1.png'}
              alt='weather'
              width={24}
              height={25}
            />
           kdhhdh
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
            py: 5,
            px: 6,
            display: "flex",
            justifyContent: "space-between",
            background: "#3E2BCE", // Change color as needed
            color: "white",
            position: "relative",
            clipPath: "polygon( 100% 0, 100% 65%, 50% 100%, 0% 65%, 0% 0)", 
            // clipPath: "polygon(0 0, 100% 0, 100% 40%, 50% 100%)", // ✅ Slanted Bottom
          }}
      >
       mun
      </Box>
    </Card>
    </Grid>
    </Grid>
    </Container>
    </div>
  )
}
