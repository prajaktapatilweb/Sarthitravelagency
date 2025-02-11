import { Box, Card, Container, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Heading from './Heading';
import { headList2 } from '../constants/titlefile';

export default function Servicecard() {
    var Details = [
        {
          icons: "/images/icons/trip1.png",
          title: 'Private & Custom Tours',
      },
          {
              icons: "/images/icons/relax.png",
              title: ' Hassle-Free Travel',
          },
          {
            icons: "/images/icons/serviceicon2.png",
            title: ' 24/7 Support',
        },
        
        {
          icons: "/images/icons/driver2.png",
          title: 'Verified & Expert Saarthis',
  
      },
      {
        icons: "/images/icons/cleaner.png",
        title: 'Clean & Well-Maintained Cars',

    },
    {
        icons: "/images/icons/location1.png",
        title: 'Doorstep Pickup & Drop',

    },
      ]
  

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
    return (
        <div>
             <Box sx={{zIndex:1,position:'relative'}}>
            <Box  sx={{
                width:'100%',
                backgroundColor: 'primary.main',  py:{xs:3,sm:3,md:3},
                mt: -5,
                '&:hover': {
                   
                    transition: 'box-shadow 0.3s ease',
                },
            }} > 
               
               
            <Grid container spacing={0}>
  {Details.map((item, i) => (
      <Grid item xs={12} sm={6} md={2} key={i} sx={{ display: 'flex' ,pb:2}}>
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
           
                <Box sx={{ display: 'flex',px:{xs:4,sm:2,md:1} }}>
                <Box
  sx={{
    mr: 1,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: "50%", // Makes it a circle
    width: 45, // Adjust size of the circle
    height: 45, // Keep it same as width for a perfect circle
    display: "flex", // Enables flexbox for centering
    alignItems: "center", // Vertically centers the icon
    justifyContent: "center", // Horizontally centers the icon
    p: 1, // Padding for some spacing
  }}
>
  <Image src={item.icons} alt="icon" width={33} height={33} style={{padding:2}} /> {/* Increased size */}
</Box>

                    <Box
                        sx={{
                            // width: 'calc(100% - 50px)',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                overflow: 'hidden',
                                mr: 1,
                            }}
                        >
                            <Box
                                sx={{
                                   
                                    width: '100%',
                                    fontWeight: 500,
                                    color: 'white',
                                }}
                                varient='h5'
                            >
                                {item.title}
                            </Box>

                        </Box>
                    </Box>
                </Box>
               
          
            </motion.div>
            </Grid>
  ))}

</Grid>

</Box>
</Box>

        </div>
    )
}
