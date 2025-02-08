import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from 'framer-motion';
import Heading from "./Heading";
import { headList3, headList9 } from "../constants/titlefile";
import StarIcon from "@mui/icons-material/Star";



const DrHeeral  = () => {

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

  // Define the fade-left animation variants
  const fadeLeftVariants = {
    hidden: { opacity: 0, x: -100, y: 0 },  // Start from the left (-100px offset) and slightly below (50px down)
    visible: {
      opacity: 1,
      x: 0,  // Move to original position horizontally
      y: 0,  // Move to original position vertically
      transition: {
        duration: 0.8,  // Duration of the animation
        ease: 'easeInOut',  // Easing function for a smooth motion

      },
    },
  };

  return (
    <>
      <Box id="Doctors" sx={{ pt: 0,pb:10,textAlign:'center',backgroundColor:'white' }}>
        <Container>
   <Heading  data={headList3}/>
        </ Container>

        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
        >


          <Grid item xs={12} sm={5} sx={{px:{xs:2,sm:0,md:5}}}>
            {/* Framer Motion div with whileInView to trigger zoom and position shift */}
            <motion.div
              initial={{ scale: 0.3, y: 0 }} // Start with normal scale and no shift
              whileInView={{ scale: 1, y: 20 }} // Zoom and move the image slightly upwards
              transition={{
                scale: { duration: 0.6, ease: 'easeInOut' }, // Zoom effect
                y: { duration: 0.6, ease: 'easeInOut', delay: 0.6 }, // Move down after zoom
              }}
              viewport={{ once: true }} // Animation triggers only once
            >
              <Box>
              <Image
                src="/images/dr/3.jpg"
                alt="Dr. Heeral Chikhal"
                width={100}
                height={100}
               layout="responsive"
               style={{borderBottomRightRadius:70,border:'1px solid white',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}
               
              />
              </Box>

            </motion.div>
          </Grid>
          <Grid item xs={12} sm={7}>
            <motion.div
              className="textcontainer"
              variants={fadeUpVariants}
              initial="hidden"         // Start in the hidden state
              whileInView="visible"    // Animate to the visible state when in view
              viewport={{ once: true }} // Optionally only animate once
            >
              <Box sx={{ px: 2 }}>
                <Box
                  sx={{

                    color: "text.primary",
                    lineHeight: 1.5,
                    marginBottom: 2.5,
                    fontSize: 17,
                    textAlign: "justify",
                    mt: 2,
px:2
                  }}
                >
                 <Typography variant="h3" sx={{color:'primary.dark',fontWeight:500,borderLeft:'4px solid #01a6a2',lineHeight:1.5,paddingLeft: '10px',mt:{xs:5,sm:1,md:0}}}>Dr. Heeral Chikhal</Typography>
                  <Typography variant="h5" sx={{color:'primary.light',fontWeight:600, paddingLeft: '15px',textAlign:'left'}}>  MDS - Prosthodontist & Implantologist</Typography>
                 <br></br>
                  <Typography>
                  Dr. Heeral Chikhal is a highly qualified Prosthodontist and Implantologist, recognized as one of the best female dentists in Borivali West, Mumbai. With over 13 years of experience, she specializes in full mouth rehabilitation, veneers, smile designing, implants, dentures, teeth whitening, crowns, and bridges. Dr. Chikhal is dedicated to providing personalized care that meets the unique needs of each patient, utilizing advanced technology and techniques to achieve optimal results.<br></br>
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
      <StarIcon sx={{ color: "#ffc107", fontSize: "1.2rem", marginRight: "8px" }} />
      MDS in Prosthodontics and Implantology
    </li>
    <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <StarIcon sx={{ color: "#ffc107", fontSize: "1.2rem", marginRight: "8px" }} />
      13+ Years of experience
    </li>
    <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <StarIcon sx={{ color: "#ffc107", fontSize: "1.2rem", marginRight: "8px" }} />
      Former Assistant Professor at GDC, Mumbai
    </li>
    <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <StarIcon sx={{ color: "#ffc107", fontSize: "1.2rem", marginRight: "8px" }} />
      Government Dental College Alumni, Mumbai
    </li>
  </ul>



                   </Typography>

                </Box>

                {/* <input type="checkbox" class="check" /> */}

              </Box>
            </motion.div>
          </Grid>
         
          <Grid item xs={12} sm={7} sx={{p:3}} order={{xs:1,md:0}}>
            <motion.div
              className="textcontainer"
              variants={fadeUpVariants}
              initial="hidden"         // Start in the hidden state
              whileInView="visible"    // Animate to the visible state when in view
              viewport={{ once: true }} // Optionally only animate once
            >
                <Box
                  sx={{

                    color: "text.primary",
                    lineHeight: 1.5,
                    marginBottom: 2.5,
                    fontSize: 17,
                    textAlign: "justify",
                    mt: 2,

                  }}
                >
                    <Typography variant="h3" sx={{color:'primary.dark',fontWeight:500,borderLeft:'4px solid #01a6a2',lineHeight:1.5,paddingLeft: '10px',mt:{xs:5,sm:1,md:0}}}>Dr. Kalpesh Dey</Typography>
                  <Typography variant="h5" sx={{color:'primary.light',fontWeight:600,paddingLeft:'15px',textAlign:'left'}}> MDS - Endodontist & Cosmetic Dentist</Typography>
                 <br></br>
                  <Typography>
                 
                  Dr. Kalpesh Dey is an accomplished Endodontist and Cosmetic Dentist, known as a leading dentist in Borivali West. He specializes in root canal treatments, single sitting root canals, and aesthetic enhancements. With a strong focus on patient comfort, Dr. Dey ensures high-quality dental care for all his patients.<br/>
                  </Typography>
                  <Typography
  sx={{
    color: "gray",
    fontSize: "1rem",
    lineHeight: "1.4",
  }}
  component="div"
>
  <ul style={{ paddingLeft: "0" }}>
    <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <StarIcon sx={{ color: "#ffc107", fontSize: "1.2rem", marginRight: "8px" }} />
      MDS in Endodontics and Cosmetic Dentistry
    </li>
    <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <StarIcon sx={{ color: "#ffc107", fontSize: "1.2rem", marginRight: "8px" }} />
      13+ Years of experience
    </li>
    <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <StarIcon sx={{ color: "#ffc107", fontSize: "1.2rem", marginRight: "8px" }} />
      Former Assistant Professor at GDC, Mumbai
    </li>
    <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <StarIcon sx={{ color: "#ffc107", fontSize: "1.2rem", marginRight: "8px" }} />
      Government Dental College Alumni, Mumbai
    </li>
  </ul>
</Typography>

                   

                </Box>

                {/* <input type="checkbox" class="check" /> */}

              
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={5} sx={{px:{xs:2,sm:0,md:5} ,pb:{xs:0,sm:0,md:9}}} order={{xs:0,md:1}}>
            {/* Framer Motion div with whileInView to trigger zoom and position shift */}
            <motion.div
              initial={{ scale: 0.3, y: 0 }} // Start with normal scale and no shift
              whileInView={{ scale: 1, y: 20 }} // Zoom and move the image slightly upwards
              transition={{
                scale: { duration: 0.6, ease: 'easeInOut' }, // Zoom effect
                y: { duration: 0.6, ease: 'easeInOut', delay: 0.6 }, // Move down after zoom
              }}
              viewport={{ once: true }} // Animation triggers only once
            >
              <Box
>
              <Image
                src="/images/dr/2.jpg"
                alt="Dr. Heeral Chikhal"
                width={100}
                height={100}
               layout="responsive"
               
               style={{borderTopLeftRadius:70,border:'1px solid white',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}
               
              />
              </Box>

            </motion.div>
          </Grid>
          
        </Grid>

      </Box>
    </>
  );
};
export default DrHeeral;
