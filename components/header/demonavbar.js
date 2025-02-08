import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Grid, Hidden, Link, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { Link as ScrollLink } from "react-scroll";
import { StyledButton } from "../styled-button";
import Navbar from "./navbar";

function ResponsiveAppBar() {

    const contactno1 = "9820097046";

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },

        animate: {
            x: 0,
            opacity: 1,
            transition: {

                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollbutton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }

    }

    return (

        <AppBar position="static">
            <section style={{ background: 'black', width: '100%', padding: 0, borderBottom: '1px solid white' }}>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            "@media (min-width: 768px)": {
                                flexDirection: "row",
                            },
                        }}
                    >
                        <Hidden mdDown>
                            <Box
                                sx={{
                                    width: "100%",
                                    // maxHeight: 300,
                                    "@media (min-width: 768px)": {
                                        width: "70%",
                                    },
                                }}
                            >
                                <IconButton aria-label="phone" style={{ color: 'white' }}>
                                    {" "}
                                    <CallTwoToneIcon />
                                </IconButton>

                                <Link href={`tel:${contactno1}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white', marginRight: 10 }}>
                                        9820097046
                                    </a>
                                </Link>


                                {/* <Link  href={`tel:${contactno2}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                    9923708233

                                    </a>
                                </Link>{" "} */}
                                <IconButton aria-label="email" style={{ color: 'white' }}>
                                    <EmailTwoToneIcon />{" "}
                                </IconButton>
                                <Link
                                    href={`mailto:${'smilesolutions99@gmail.com'}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                        smilesolutions99@gmail.com
                                    </a>
                                </Link>
                            </Box>
                        </Hidden>
                        <Box
                            sx={{
                                width: "100%",
                                textAlign: {
                                    xs: "center",
                                    sm: "center",
                                    md: "right",
                                },
                                // textAlign: 'right',
                                "@media (min-width: 768px)": {
                                    width: "30%",
                                },
                            }}
                        >
                            <IconButton aria-label="facebook">
                                {" "}
                                <a
                                    href="https://www.facebook.com/smilesolutionsdental/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="facebook"
                                >
                                    <FacebookIcon sx={{ color: "white" }} />{" "}
                                </a>
                            </IconButton>

                            <IconButton aria-label="instagram">
                                <a
                                    href="https://www.instagram.com/smilesolution_15"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="instagram"
                                >
                                    <InstagramIcon
                                        sx={{ color: "white", Width: 30, Height: 30 }}
                                    ></InstagramIcon>
                                </a>
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </section>

            <section style={{
                display: 'flex',
            }}>
                <Navbar />
            </section>
            <Box sx={{py:7, width: "100%",
    height: "500px",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/headerback1.jpg")`,
  
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
 color:'white',
 backgroundRepeat: "no-repeat",
                backgroundSize: "cover",}}>
                <Container>
                    <Grid container
                        alignItems="center"
                        justifyContent="center"
                        textAlign="left"
                    >
                        <Grid item
                            xs={12}
                            md={7}
                            sx={{px:{xs:2,sm:2,md:4}}}
                        >
                            <motion.div className="textcontainer" variants={textVariants}
                                initial="initial"
                                animate="animate"
                            >
                                <Box>
                                    <Typography
                                        variant="p"
                                        sx={{ lineHeight: 1.6, fontSize: 23 }}
                                    >
                                        {" "}
                                        Welcome To Taxica!
                                    </Typography>
                                    <Typography
                                        component="h2"
                                        sx={{
                                            // width: { md: 850 },
                                            position: "relative",
                                            fontSize: { xs: 35, md: 40, lg: 40 },
                                            mb: { xs: 3, sm: 2 },
                                            letterSpacing: 1.5,
                                            fontWeight: "bold",
                                           
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {" "}
                                        Book Taxi For Your Ride
                                    </Typography>
                                    <Hidden mdDown>

                                        <Typography
                                            component="span"
                                            sx={{
                                                fontSize: "18px",
                                                fontWeight: 400,
                                                position: "relative",
                                            }}
                                        >
                                            There are many variations of passages available the majority have suffered alteration in some form generators on the Internet tend to repeat predefined chunks injected humour randomised words look even slightly believable.
                                        </Typography>
                                    </Hidden>

                                    <Box sx={{ "& button": { mt: 4, mb: 7 } }}>
                                        <ScrollLink
                                            to="contactform"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={350}
                                        >
                                            <StyledButton
                                                color="white"
                                                size="large"
                                                variant="outlined"
                                                sx={{
                                                    mb: { xs: 3, sm: 0, md: 0 },
                                                    fontSize: 17,
                                                    border: "1px solid",
                                                    borderRadius: 1,
                                                    backgroundColor: 'primary.main',
                                                    borderColor: "white",
                                                    color: "white",
                                                }}
                                            >
                                               Explore More
                                            </StyledButton>
                                        </ScrollLink>
                                    </Box>

                                </Box>


                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            {/* <video
                                src="/images/aboutgif.mp4"
                                width="100%"
                                height="100%"
                               
                                autoPlay
                                loop
                                muted
                                playsInline
                            /> */}

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </AppBar>
    );
}
export default ResponsiveAppBar;
