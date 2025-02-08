import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { Box, Button, Card, Container, Grid, Hidden, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme, useMediaQuery } from '@mui/material';
import Heading from './Heading';
import { headList2 } from '../constants/titlefile';

export default function Dentalservices() {
    var Details = [
      {
        icons: "/images/icons/root.png",
        icons1: "/images/icons/root1.png",
        title: 'Root Canal Treatment',
        desc:'Relieve pain and save your tooth with our gentle root canal treatment.'
    },
        {
            icons: "/images/icons/implant.png",
            icons1: "/images/icons/implant1.png",
            title: 'Dental implants',
            desc:'Restore your smile with durable and natural-looking dental implants.'
        },
        {
          icons: "/images/icons/veeners.png",
          icons1: "/images/icons/veeners1.png",
          title: 'Dental Veneers',
          desc:'Transform your smile with custom veneers for a flawless look.'
      },
      
      {
        icons: "/images/icons/dental-care2.png",
        icons1: "/images/icons/dental-care3.png",
        title: 'Full Mouth Reconstruction',
        desc:'Rebuild and enhance your smile with a personalized reconstruction plan.'

    },
    {
      icons: "/images/icons/whitening.png",
      icons1: "/images/icons/whitening1.png",
      title: 'Smile Designing',
      desc:'Create your perfect smile with personalized design solutions.'
  },
        {
            icons: "/images/icons/dental-care.png",
            icons1: "/images/icons/dental-care1.png",
            title: 'Crowns & Bridges',
            desc:'Enhance your smile with custom crowns and bridges that fit seamlessly.'
        },

      {
        icons: "/images/icons/dental-care2.png",
        icons1: "/images/icons/dental-care3.png",
        title: 'Dentures',
        desc:'Enjoy a natural-looking smile with custom-fit dentures.'
    },
      {
          icons: "/images/icons/braces.png",
          icons1: "/images/icons/braces1.png",
          title: 'Braces & Aligners',
          desc:'Achieve a straighter smile with our advanced braces and aligners.'
      },
      {
        icons: "/images/icons/dental-care.png",
        icons1: "/images/icons/dental-care3.png",
        title: 'Pediatric Dentistry',
        desc:'Ensure your child’s dental health with gentle, specialized care.'
    },

    ]

    

    // State to track if the card is hovered
    const [hoveredCard, setHoveredCard] = useState(null);

    // Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger each child (card) by 0.2 seconds
      },
    },
  };
  
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 }, // Start from below and invisible
    visible: {
      opacity: 1,
      y: 0, // Animate to its final position
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("md"));// For screens smaller than 'sm'
  const [visibleCards, setVisibleCards] = useState(4); // Initially show 4 cards on mobile screens

  // Function to show more cards
  const handleShowMore = () => {
    setVisibleCards(Details.length); // Show all the cards when the button is clicked
  };

    return (
        <div>
                <section  id="treatments"
  style={{
    position: "relative",
    background: "linear-gradient(to top, #e0e6f4, #e0e6f4)",
    overflow: "hidden",
    paddingBottom: "150px", // Ensures content stays above the wave
  }}
>
            <Box sx={{ paddingTop: "50px" }}>
              <Heading data={headList2} />
             {/* Framer Motion Container for the animation */}
        <Container component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
         
        <Grid container spacing={2}>
         {/* Show limited cards on mobile, and all cards on desktop */}
         {Details.slice(0, isMobile ? visibleCards : Details.length).map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex' }}>
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  backgroundColor: 'white',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: '"Poppins", sans-serif',
                  width: '100%',
                  height: '100%',
                  border:'1px solid lightgrey',
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                borderRadius:5,
                      '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'white',
                    '& .MuiAvatar-root': {
                      backgroundImage: 'linear-gradient(to right, #FFFFFF 0%, #FFFFFF 100%)',
                    },
                  },
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Grid container spacing={3} alignItems='center' justifyContent='center' textAlign='center'>
                  <Grid item xs={12} md={3}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        height: '100%',
                      }}
                    >
                      <Avatar
                        alt="R"
                        src=''
                        sx={{
                          width: 50,
                          height: 50,
                          backgroundImage: 'linear-gradient(to right, #2f58b1 0%, #01a6a2 100%)',
                          padding: 4,
                        }}
                      >
                        <Image
                          src={hoveredCard === i ? item.icons1 : item.icons}
                          width={40}
                          height={40}
                        />
                      </Avatar>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={9}>
                    <Typography variant='h4' sx={{ fontFamily: "League Spartan, sans-serif", fontWeight: 500, color: 'primary.dark', fontSize: '20px' }}>
                      {item.title}
                    </Typography>
                    <p style={{ marginTop: 3, textAlign: 'justify' }}>{item.desc}</p>
                  </Grid>
                </Grid>
              </Card>
            </motion.div>
          </Grid>
        ))}

        {/* Show "Explore More" button only if there are hidden cards */}
        {visibleCards < Details.length && (
          <Grid item xs={12} textAlign="center">
            <Hidden mdUp>
            <Button variant="contained" sx={{backgroundColor:'primary.light',mt:3}} onClick={handleShowMore}>
              Explore More
            </Button>
            </Hidden>
          </Grid>
        )}
      </Grid>
                </Container >
            </Box>

               {/* Wave Section */}
  <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "150px" }}>
 
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2550 450"
      preserveAspectRatio="none" /* Ensures scaling fits the container */
      style={{
        display: "block",
        width: "100%",
        height: "100%", // Height of the wave
      }}
    >
      <path
        fill="#ffffff"
        fillOpacity="1"
        d="M0,294L120,269.5C240,245,480,196,720,155.2C960,114,1200,82,1440,122.5C1680,163,1920,278,2160,269.5C2400,261,2640,131,2880,81.7C3120,33,3360,65,3600,130.7C3840,196,4080,294,4320,285.8C4560,278,4800,163,5040,106.2C5280,49,5520,49,5760,57.2C6000,65,6240,82,6480,138.8C6720,196,6960,294,7200,310.3C7440,327,7680,261,7920,212.3C8160,163,8400,131,8640,163.3C8880,196,9120,294,9360,294C9600,294,9840,196,10080,204.2C10320,212,10560,327,10800,359.3C11040,392,11280,343,11520,294C11760,245,12000,196,12240,187.8C12480,180,12720,212,12960,212.3C13200,212,13440,180,13680,187.8C13920,196,14160,245,14400,294C14640,343,14880,392,15120,383.8C15360,376,15600,310,15840,253.2C16080,196,16320,147,16560,130.7C16800,114,17040,131,17160,138.8L17280,147L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"
      ></path>
    </svg>
    
  </div>
            </section>
        </div >
    )
}
