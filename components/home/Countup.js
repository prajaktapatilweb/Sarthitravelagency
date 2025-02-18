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

import { Card, } from '@mui/material';
import CountUp from 'react-countup';

export default function Countup() { 
    var Details = [
        {
            startnumber: '1000',
            numbers: '10600',
          title: 'Happy Smiles',
        },
        {
            startnumber: '1',
            numbers: '13',
          title: 'Experience Years',
        },
        {
          startnumber: '0',
          numbers: '4.9',
          title: 'Google Ratings',
          decimals: 1,
        },
      ];
    
    

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
           {/* <div class="offer-card">
        <div class="discount-badge">50% OFF</div> 
        <img src="/images/headerback1.jpg" alt="Offer Image" />
        <div class="offer-content">
            <h2>Special Travel Deal</h2>
            <p>Book your roundtrip today and get a flat 50% discount! Hurry, limited time offer.</p>
            <button class="offer-btn">Grab Offer</button>
        </div>
        </div> */}
            <Box>
           <motion.div
  className="textcontainer"
  variants={fadeUpVariants}
  initial="hidden"         // Start in the hidden state
  whileInView="visible"    // Animate to the visible state when in view
  viewport={{ once: true }} // Optionally only animate once
>

      

                <Grid container spacing={0} textAlign='center' sx={{pt:2,pb:7,padding:0}}>
                {Details.map((item, i) => ( 
                     <Grid item xs={6} sm={3} md={3} key={i}>   
 <CountUp
                    end={item.numbers}
                    duration={5}
                    start={item.startnumber}
                    
                    decimals={item.decimals ? item.decimals : 0}
                    className='paras'
                  />{' '}
                  <span className='paras'>+</span>
                  <Typography variant='h6'  sx={{  color: {xs:'white',sm:'primary.dark'}, cursor: 'pointer',pb:2 }}>

                    {item.title}
                  </Typography>
                  </Grid>
))}
              
</Grid>
         
            </motion.div>
            </Box>
        </div>
    );
}




