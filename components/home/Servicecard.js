import { Box, Card, Container, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Heading from './Heading';
import { headList2 } from '../constants/titlefile';

export default function Servicecard() {
    var Details = [
        {
          icons: "/images/icons/trip.png",
          icons1: "/images/icons/root1.png",
          title: 'Fast Pickup',
          desc:'There are many variations of majority have suffered alteration in some form injected humour randomised words.'
      },
          {
              icons: "/images/icons/rupee.png",
              icons1: "/images/icons/implant1.png",
              title: 'Special Discounts',
              desc:'Restore your smile with durable and natural-looking dental implants.'
          },
          {
            icons: "/images/icons/driver1.png",
            icons1: "/images/icons/veeners1.png",
            title: 'Expert Drivers',
            desc:'Transform your smile with custom veneers for a flawless look.'
        },
        
        {
          icons: "/images/icons/serviceicon.png",
          icons1: "/images/icons/serviceicon.png",
          title: '24/7 Support',
          desc:'Rebuild and enhance your smile with a personalized reconstruction plan.'
  
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
            <Box sx={{py:8}}>
            <Container> 
                <Heading data={headList2} />
            <Grid container spacing={2}>
  {Details.map((item, i) => (
      <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: 'flex' }}>
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
            <Card
                sx={{ height: 1,width:'100%' }}
            >
                <Box sx={{ display: 'flex', px:3,pt:3 }}>
                <Box
  sx={{
    mr: 3,
    alignSelf: "center",
    backgroundColor: "primary.main",
    borderRadius: "50%", // Makes it a circle
    width: 55, // Adjust size of the circle
    height: 55, // Keep it same as width for a perfect circle
    display: "flex", // Enables flexbox for centering
    alignItems: "center", // Vertically centers the icon
    justifyContent: "center", // Horizontally centers the icon
    p: 1, // Padding for some spacing
  }}
>
  <Image src={item.icons} alt="icon" width={33} height={33} /> {/* Increased size */}
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
                                mr: 2,
                            }}
                        >
                            <Box
                                sx={{
                                   
                                    width: '100%',
                                    fontWeight: 500,
                                    color: 'text.primary',
                                }}
                                varient='h5'
                            >
                                {item.title}
                            </Box>

                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                                   px:4,
                                    width: '100%',
                                    color: 'text.secondary',
                                }}
                                component='p'
                            >
                                {item.desc}
                            </Box>
            </Card>
            </motion.div>
            </Grid>
  ))}

</Grid>
</Container>
</Box>
        </div>
    )
}
