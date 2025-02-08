import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PhotoCardItem = ({ item }) => {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "15px",
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)", // Slight zoom effect
        },
      }}
    >
      {/* Image */}
      <Box sx={{ position: "relative", borderRadius: "15px",margin:'5px' }}>
        <Image
          alt="Happy Patients"
          src={`/images/patients/patient${item}.jpg`}
          width={100}
          height={100}
          layout="responsive"
          style={{
            borderRadius: "15px",
            border: "2px solid transparent",
            backgroundImage: "linear-gradient(to right, #2f58b1, #01a6a2)", // Gradient border effect
            padding: "1px",
          }}
        />
      </Box>

      {/* Overlay */}
      {/* <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
          color: "white",
          padding: "10px",
          textAlign: "center",
        }}
      > */}
        {/* <Typography variant="body1" sx={{ fontWeight: 600 }}>
          Patient #{item}
        </Typography> */}
      {/* </Box> */}
    </Box>
  );
};

export default PhotoCardItem;
