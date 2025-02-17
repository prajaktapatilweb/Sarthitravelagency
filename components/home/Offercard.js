import { Box, Card, Container, Grid, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import Image from 'next/image';
import Heading from './Heading';
import { headList4 } from '../constants/titlefile';

export default function Offercard() {
    var DetailObject = [
        {
            img: "/images/offercard1.jpg",
            title: 'Sedan',
          

        },
        {
            img: "/images/offercard2.jpg",
            title: 'SUV',
         
        },
        {
            img: "/images/vehicles/car3.jpg",
            title: 'MUV',
          

        },

        {
            img: "/images/vehicles/car1.jpg",
            title: 'Hatchback',
           
           

        }
    ]
    return (
        <div>

            <Box id='offers' sx={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/offerback2.jpg")`, backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover", pt: 10, pb: 7 }}  >
                <Container>
                    <Heading data={headList4}></Heading>
                    <Grid container spacing={2} sx={{ mb: 7 }}>
                                                    {DetailObject.map((item, i) => (
                                                        <Grid item xs={12} sm={6} md={3} lg={3} key={i}>
                            <Card sx={{ height: 1, overflow: "hidden", borderRadius: 3, position: "relative", backgroundColor: 'transparent', }}>
                                {/* ✨ Shine Effect Overlay */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: "-100%",
                                        width: "80%",
                                        height: "40%",
                                        zIndex:1 ,
                                        background:
                                            "linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 60%)",
                                        transform: "skewX(-30deg)",
                                        animation: "shineEffect 2s infinite linear ",
                                        // transition:'ease-in-out'
                                    }}
                                />
  <Box sx={{ width: "100%", height: "180px",position:'relative'}}>
                      <Image
                        src={item.img}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="car services"
                        style={{ borderTop: '2px solid #d70030', borderLeft: '1.5px solid #d70030', borderRight: '1.9px solid #d70030',borderTopLeftRadius:15,borderTopRightRadius:15}}
                      />
                    </Box>
                                {/* <Image src={item.img} alt="offer" width={100} height={100} layout='responsive' objectFit='cover'  /> */}


                                {/* 🔥 Slanted Offer Section */}
                                <Box
                                    sx={{
                                        mt: -1,
                                        pt: 4,
                                        pb: 5,
                                        px: 6,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: "#d70030",
                                        color: "black",
                                        position: "relative",
                                        clipPath: "polygon(100% 0, 100% 65%, 50% 100%, 0% 65%, 0% 0)",
                                        textAlign: "center",

                                        // ✅ Add border using ::before
                                        "&::before": {
                                            content: '""',
                                            position: "absolute",
                                            marginBottom: 0.2,
                                            marginLeft: 0.2,
                                            marginRight: 0.2,
                                            top: 0, // Expand border outside
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: "lightgrey",

                                            clipPath: "polygon(100% 0, 100% 65%, 50% 100%, 0% 65%, 0% 0)", // ✅ Same shape as main box
                                            zIndex: -9, // ✅ Places border behind the main box
                                        },
                                    }}
                                >

                                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1, color: 'black' }}>
                                        🚖 50% OFF on Your First Ride!
                                    </Typography>

                                    {/* 🎯 Offer Description */}
                                    <Typography variant="body2" sx={{ fontSize: 16, maxWidth: "80%", mb: 2, color: 'black' }}>
                                        Book your trip today and get a flat **50% discount**! Limited time offer.
                                    </Typography>
                                    {/* 🎯 Call to Action Button */}
                                    {/* <Box
                                            component="button"
                                            sx={{
                                                backgroundColor: "white",
                                                color: "#3E2BCE",
                                                borderRadius: "20px",
                                                padding: "10px 20px",
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                                cursor: "pointer",
                                                border: "2px solid red",
                                                transition: "0.3s",
                                                "&:hover": {
                                                    backgroundColor: "#2DD3AA",
                                                    color: "white",
                                                },
                                            }}
                                        >
                                            Grab Offer Now
                                        </Box> */}
                                </Box>

                                {/* ✨ Global CSS for Shine Animation */}
                                <style jsx global>{`
    @keyframes shineEffect {
      0% {
        left: -100%;
      }
      100% {
        left: 100%;
      }
    }
  `}</style>
                            </Card>



                        </Grid>
                                                    ))}
                    </Grid>
                </Container>

            </Box>
        </div>
    )
}
