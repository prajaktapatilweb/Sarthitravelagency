import React, { useState } from "react";
import { Box, Card, Container, Typography } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import Heading from "./Heading";
import { headList2 } from "../constants/titlefile";
import { useTheme, styled } from "@mui/material/styles";

export default function Dentalservices() {
  var DetailObject = [
    { img: "/images/services/maincoach1.webp", title: "Roundtrip Cabs", para: "Agile coaching helps individuals, teams, and organizations adopt Agile methodologies." },
    { img: "/images/services/maincoach6.webp", title: "Oneway Drops", para: "Scrum Master coaching facilitates the adoption of Scrum principles." },
    { img: "/images/services/maincoach6.webp", title: "Local Rentals", para: "Life coaching helps individuals achieve their personal and professional goals." },
    { img: "/images/services/maincoach2.webp", title: "Airport Transfers", para: "Career coaching helps individuals navigate career development and transitions." }
  ];

  const StyledDots = styled("ul")(({ theme }) => ({
    "&.slick-dots": {
        position: "relative",
        textAlign: "center",
        "& li": {
            marginRight: theme.spacing(1),
            "&.slick-active>div": {
                backgroundColor: theme.palette.primary.main,
            },
        },
    },
}));

  const settings = {
    className: "center",
    autoplay: true,
    centerMode: true,
    infinite: true,
    centerPadding: "5px", // Adjust how much of the side slides are visible
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
            appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
            customPaging: () => (
                <Box
                    sx={{
                        height: 15,
                        width: 15,
                        backgroundColor: "divider",
                        display: "inline-block",
                        borderRadius: '50%',
                    }}
                />
            ),
    focusOnSelect: true, // Clicking a side slide moves it to the center
    beforeChange: (current, next) => setActiveSlide(next), // Track center slide
  };
 

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="services">
      <Box sx={{ py: "50px" }}>
        <Heading data={headList2} />
        <Container>
          <div className="slider-container">
            <Slider {...settings}>
              {DetailObject.map((item, i) => (
                <div key={i}>
                  <Card
                    sx={{
                      height: "100%",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "10px",
                      background: "white",
                      mt:3,
                      mb:5,
                      transform: `scale(${i === activeSlide ? 1.1 : 0.85})`, // ✅ Center slide is bigger
                      transition: "transform 0.5s ease-in-out",
                    }}
                  >
                    {/* Image */}
                    <Box sx={{ width: "100%", height: "250px", position: "relative" }}>
                      <Image
                        src={item.img}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="car services"
                       
                      />
                    </Box>

                    {/* Title & Description */}
                    <Box sx={{ pt: 2, pb: 4, textAlign: "center" }}>
                      <Typography gutterBottom variant="h5"  className='paras'>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "black", px: 3 }}>
                        {item.para}
                      </Typography>
                    </Box>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </Box>
    </section>
  );
}
