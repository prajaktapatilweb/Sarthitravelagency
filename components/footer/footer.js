import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {


  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#122346",
        py:3,
        color: "primary.contrastText",
      }}
    >
      <Container sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: { xl: 1300 } }}>
        <Grid container spacing={2} alignItems='center' justifyContent='center'>
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <Image src="/images/logosmile.jpg" width={120} height={70} className="pngback" objectFit="contain"></Image>


            
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
              At Smile Solutions Advanced Dental Care and Implant Centre, we provide exceptional dental care in a welcoming environment, recognized as one of the top dental clinics in Borivali West, Mumbai. Our dedicated team is here to help you achieve a healthy, beautiful smile. Contact us today to schedule your appointment!
              </Typography>
            
             
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sx={{}}>
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Site Links
            </Typography>
            <Typography variant="h5" sx={{ mb: 1}}>
              <Link href="/#" className="footermenu" style={{color:'#c8b2a7'}}>
                Home
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#aboutus" className="footermenu" style={{color:'#c8b2a7'}}>
                About
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#treatments" className="footermenu" style={{color:'#c8b2a7'}}>
                Treatments
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#testimonials" className="footermenu" style={{color:'#c8b2a7'}}>
                Testimonials
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#gallery" className="footermenu" style={{color:'#c8b2a7'}}>
                Gallery
              </Link>
            </Typography>
          
          

             

            {/* <FooterNavigation /> */}
          </Grid>

         
          <Grid item xs={12} md={5}>
            <Typography variant="h4"  gutterBottom>
              Get In Touch
            </Typography>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.5672553770064!2d72.8495047!3d19.2289469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b13004776005%3A0x3aceadc2de3ffd17!2sSmile%20Solutions%20Advanced%20Dental%20Care%20and%20Implant%20Centre!5e1!3m2!1sen!2sin!4v1737632833947!5m2!1sen!2sin" width="100%" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ marginBottom: 3, marginTop: 3,marginRight:4 }}></iframe>
            {/* <FooterSocialLinks /> */}

          </Grid>

      

          {/* <Whatsappnew /> */}
          <Grid item xs={12} sx={{ textAlign: 'center' }}>

            {/* Designed by <b>Prajakta Bhushankumar Patil</b> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
