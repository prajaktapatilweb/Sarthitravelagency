import React from 'react'
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Avatar,  Box,  Typography } from "@mui/material";
import Image from "next/image";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import StarIcon from '@mui/icons-material/Star';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { motion} from "framer-motion";

export default function Countdown() { 
    var Details = [
        {
            icons: <SentimentSatisfiedAltIcon/>,
            title: <span>Rank Holder in Dentistry</span>,
           
        },
        {
            icons: <PersonAddAlt1Icon/>,
            title:  <span>  Digital Aligner Specialist </span>,
          

        },
        {
            icons:<VolunteerActivismIcon/>,
            title: <span> 16+ Years of Experience</span>,
            

        },


    ]

 // Define the fade-up animation variants
const fadeUpVariants = {
    hidden: { opacity: 0, y: 100 },  // Initial state: invisible and below the viewport
    visible: { 
      opacity: 1, 
      y: 0,  // Moves up to its original position
      transition: {
        duration: 0.8, // Duration of the animation
        ease: 'easeInOut', // Easing function
      },
    },
  };

    return (
        <div>
            <Box>
           <motion.div
  className="textcontainer"
  variants={fadeUpVariants}
  initial="hidden"         // Start in the hidden state
  whileInView="visible"    // Animate to the visible state when in view
  viewport={{ once: true }} // Optionally only animate once
>

            <Container>

                <Grid container spacing={0} alignItems='center' justifyContent='center' textAlign='center'>
                    {Details.map((item, i) => (

                        <Grid item xs={12} md={4} sx={{py:{xs:1,sm:1,md:0}}}>
                            <Grid container spacing={2} alignItems='center' justifyContent='center'>
                                <Grid item xs={3} md={3}  textAlign='right'>

                                    <Avatar alt="" src="" sx={{ margin: 'auto', width: '35', height: 35, backgroundImage: 'linear-gradient(to right, rgb(116,81,63) 10%, rgb(146,102,79) 90%)', padding: 3, }}>{item.icons}</Avatar>
                                </Grid>

                                <Grid item xs={9} md={9}>
                                        <Typography variant='h4' sx={{textAlign:'center', color: 'primary.dark', cursor: 'pointer',fontSize:{xs:17,sm:18,md:22} }}>
                                            {item.title}
                                        </Typography>
                                        <Typography sx={{textAlign:'justify',}}>Vehicula quam potenti in si pretium donec ultricies</Typography>
                                 
                                </Grid></Grid>

                        </Grid>

                    ))}


                </Grid>

            </Container>
            </motion.div>
            </Box>
        </div>
    );
}
