import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Avatar, Box } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from "next/image";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const fadeLeftVariants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Clinicinfo = () => {
  return (
    <Box
      id="aboutus"
      sx={{
        py: 10,
       backgroundColor:'white'
      }}
    >
      <Grid container spacing={0} >
        {/* Left Side - Gallery */}
        {/* Left Side - Gallery */}
        <Grid
          item
          xs={12}
          md={6}
        >
          <motion.div
            variants={fadeLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
 
           <Box sx={{p:1}}>
            <div className='imgbox'>
            <div className='content'>
            <Image
        src="/images/aboutimg.jpg"
        alt="Car Rental"
        layout="fill"
        objectFit="cover"  
        style={{borderRadius: "5px"}}
      />
</div>
</div>
</Box>

          </motion.div>
        </Grid>

        {/* Right Side - Text Content */}
        <Grid
          item
          xs={12}
          md={6}
          textAlign="justify"
          sx={{ px: { xs: 3, sm: 3, md: 2 }, mt: { xs: 3, sm: 4, md: 1 } }}
        >
          <motion.div
            className="textcontainer"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
             <Typography
              component="h1"
              sx={{
                fontSize: { sm: 18, md: 20 },
                fontWeight: 400,
                color: "primary.main",
               
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 600,
                lineHeight: 1.5,
                color: "black",
                textShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
             We Provide Trusted Cab Service In The World
            </Typography>

           

            <Typography sx={{ mt: 1, color: "#333" }}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
            Joining her is Dr. Kalpesh Dey, an MDS Endodontist and Cosmetic
              Dentist, who specializes in root canal treatments and aesthetic
              enhancements. Together, they form a dynamic team that prioritizes
              patient comfort and satisfaction while delivering a wide range of
              services, from routine check-ups to complex dental implants.            
</Typography>
<Typography
  sx={{
    color: "gray",
    fontSize: "1rem",
    lineHeight: "1.5",
  }}
  component="div"
>
  <ul style={{ paddingLeft: "0",}}>
    <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <CheckCircleIcon sx={{ color: "primary.main", fontSize: "1.2rem", marginRight: "8px" }} />
      MDS in Prosthodontics and Implantology
    </li>
    <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <CheckCircleIcon sx={{ color: "primary.main", fontSize: "1.2rem", marginRight: "8px" }} />
      13+ Years of experience
    </li>
    <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <CheckCircleIcon sx={{ color: "primary.main", fontSize: "1.2rem", marginRight: "8px" }} />
      Former Assistant Professor at GDC, Mumbai
    </li>
    <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <CheckCircleIcon sx={{ color: "primary.main", fontSize: "1.2rem", marginRight: "8px" }} />
      Government Dental College Alumni, Mumbai
    </li>
  </ul>



                   </Typography>
          
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Clinicinfo;
