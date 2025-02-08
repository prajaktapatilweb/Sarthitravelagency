import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Drgallery from "./Drgallery";
import { Box } from "@mui/material";
import { detailspointer } from "./feature.data";
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
        backgroundImage: `url("/images/headerback2.png")`,
      }}
    >
      <Grid
        container
        spacing={0}
      >
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
           <video
        src="/images/aboutgif.mp4"
        width="100%"
        height="150%"
        style={{
          borderRadius: "7px",
        }}
        autoPlay
        loop
        muted
        playsInline
      />
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
              variant="h1"
              sx={{
                fontWeight: 600,
                borderLeft: "4px solid #01a6a2",
                paddingLeft: "10px",
                lineHeight: 1.5,
                color: "#2f58b1",
                textShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              A Legacy of Trust and Care
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontSize: { sm: 18, md: 20 },
                fontWeight: 400,
                color: "primary.light",
                pb: 1,
                paddingLeft: "15px",
              }}
            >
              Serving our community since 2014 with pride.
            </Typography>

            <Typography sx={{ mt: 2, color: "#333" }}>
              Smile Solutions Advanced Dental Care and Implant Centre, a premier
              dental clinic in Borivali West, is dedicated to providing top-tier
              dental care tailored to meet the unique needs of each patient.
              Led by Dr. Heeral Chikhal, an MDS Prosthodontist and
              Implantologist, the clinic utilizes advanced technology and proven
              treatment protocols to ensure optimal outcomes.
              <br />
              <br />
              Joining her is Dr. Kalpesh Dey, an MDS Endodontist and Cosmetic
              Dentist, who specializes in root canal treatments and aesthetic
              enhancements. Together, they form a dynamic team that prioritizes
              patient comfort and satisfaction while delivering a wide range of
              services, from routine check-ups to complex dental implants. At
              Smile Solutions, you can expect a welcoming environment where
              your smile is the top priority. Experience the difference in
              dental care today!
</Typography>
              <br />


              <Grid container spacing={2}>
                {detailspointer.map(({ title, description, icon }, index) => (
                  <Grid key={String(index)} item xs={12} md={6}>
                    <Box
                      sx={{
                        px: 2,
                        pt: 1.2,
                        boxShadow: 1,
                        borderRadius: 4,
                        border: "1px solid #E0E0E0",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          mr: 1,
                          backgroundImage: 'linear-gradient(to right, #2f58b1 0%, #01a6a2 100%)',
                          // backgroundColor: "primary.main",
                          borderRadius: "50%",
                          height: 36,
                          width: 36,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "primary.contrastText",
                          "& svg": {
                            fontSize: 20,
                          },
                        }}
                      >
                        {icon}
                      </Box>
                      <Box
                        sx={{ display: "flex", flex: 1, flexDirection: "column" }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontSize: "1rem",
                            color: "primary.light",
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography  sx={{ lineHeight: 1.3, fontSize: '15px', pt: 1, pb: 2 }}>
                          {description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>

        
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Clinicinfo;
