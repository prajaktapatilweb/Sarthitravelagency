import { Box, Card, Container, Grid, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import Image from 'next/image';

export default function Offercard() {
    return (
        <div>
            <section id='treatments' className="events2" >
                <section
                    style={{
                        position: "relative",
                        background: "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
                        overflow: "hidden",
                        paddingBottom: "100px", // Ensures content stays above the wave
                        paddingTop: '100px'
                    }}
                >
                    <Container>
                        <Grid container spacing={2} sx={{ mb: 7 }}>

                            <Grid item xs={12} sm={6} md={3} lg={3} >
                                <Card sx={{ height: 1, overflow: "hidden", borderRadius: 3, position: "relative",backgroundColor:'transparent' }}>
                                    {/* ✨ Shine Effect Overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: "-100%",
                                            width: "80%",
                                            height: "70%",
                                            background:
                                                "linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 60%)",
                                            transform: "skewX(-30deg)",
                                            animation: "shineEffect 2s infinite linear ",
                                            // transition:'ease-in-out'
                                        }}
                                    />

                                    {/* 🔹 Top Offer Section */}
                                    <Box
                                        sx={{
                                            py: 3,
                                            px: 4,
                                            color: "primary.contrastText",
                                            flex: 1,
                                            background: "linear-gradient(135deg, #3E2BCE, #2DD3AA)",
                                            display: "flex",
                                            flexDirection: "column",
                                            textAlign: "center",
                                        }}
                                    >
                                        {/* 🎯 Offer Title */}
                                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                                            🚖 50% OFF on Your First Ride!
                                        </Typography>

                                        {/* 🎯 Offer Description */}
                                        <Typography variant="body2" sx={{ fontSize: 16, maxWidth: "80%", mb: 2 }}>
                                            Book your trip today and get a flat **50% discount**! Limited time offer.
                                        </Typography>
                                    </Box>

                                    {/* 🔥 Slanted Offer Section */}
                                    <Box
                                        sx={{
                                            pt: 4,
                                            pb: 5,
                                            px: 6,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background: "white",
                                            color: "white",
                                            position: "relative",
                                            clipPath: "polygon(100% 0, 100% 65%, 50% 100%, 0% 65%, 0% 0)",
                                            textAlign: "center",
                                        }}
                                    >
                                        {/* 🎯 Call to Action Button */}
                                        <Box
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
                                        </Box>
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
                        </Grid>
                    </Container>
                </section>
            </section>
        </div>
    )
}
