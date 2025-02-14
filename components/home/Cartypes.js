import React, { useState } from 'react'
import { Box, Card, CardActions, Container, Grid, Hidden, Link, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Heading from './Heading';
import { headList2 } from '../constants/titlefile';

export default function Cartypes() {
    var DetailObject = [
        {
            img: "/images/vehicles/car1.jpg",
            title: 'Sedan',
            subtitle: 'e.g. Toyota Prius, VW Passat',
            passenger: '4',
            oil:'Petrol',
            rates:200

        },
        {
            img: "/images/vehicles/car2.jpg",
            title: 'SUV',
            subtitle: 'e.g. Toyota Prius, VW Passat',
            passenger: '6',
            oil:'Disel',
            rates:200

        },
        {
            img: "/images/vehicles/car3.jpg",
            title: 'MUV',
            subtitle: 'e.g. Toyota Prius, VW Passat',
            passenger: '7',
            oil:'Petrol',
            rates:100

        },

        {
            img: "/images/vehicles/car1.jpg",
            title: 'Hatchback',
            subtitle: 'e.g. Toyota Prius, VW Passat',
            passenger: '7',
            oil:'Disel',
            rates:200

        }
    ]



    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger each child (card) by 0.2 seconds
            },
        },
    };




    return (
        <div>
            <section id="treatments">
                <Box sx={{ paddingTop: "50px" }}>

                    <Container component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.6,
                                x: { type: 'spring', stiffness: 60 },
                                opacity: { duration: 0.6 },
                                ease: 'easeIn',
                                duration: 1,
                            }}
                        >
                            <Grid container spacing={2} sx={{ mb: 7 }}>
                                {DetailObject.map((item, i) => (
                                    <Grid item xs={12} sm={6} md={3} lg={3} key={i}>
                                        <Card
                                            sx={{
                                                height: '100%',
                                                mx: { xs: 5, sm: 0 },
                                                display: 'flex',
                                                flexDirection: 'column',
backgroundColor:'transparent'
                                            }}
                                        >
                                            <Box>
                                            <div className='imgbox'>
                                            <div className='content'>
                                                <Image
                                                    src={item.img}
                                                    layout="fill"
                                                    objectFit="cover"  
                                                    style={{borderRadius: "5px"}}
                                                    alt='car services'
                                                ></Image>
                                                </div>
                                                </div>
                                            </Box>

                                               
                                                <Box sx={{  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', pt: 2, pb: 4,backgroundColor:'white',mx:2,mt:-4,borderRadius:3,zIndex:5,position:'relative',border:'1px outset lightgrey',  }}>
                                                <Typography
                                                    gutterBottom
                                                    variant='h2'
                                                    className='paras'
                                                    sx={{ textAlign: 'center',
                                                     }}
                                                >
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    variant='body1'
                                                    sx={{ textAlign: 'justify', color: 'black', px: 3, lineHeight: 1.7,fontWeight:500 }}
                                                >
                                                    <b> Passanger Capacity </b>: {item.passenger}<br />
                                                    {item.oil}<br/>
                                                    {item.rates} Km/h
                                                </Typography>


                                            </Box>
                                            {/* <CardActions disableSpacing sx={{ mt: "auto" }}>
                                        <Button size='large' sx={{ color: '#20509e' }}>
                                            <Link href={item.links} sx={{ textDecoration: 'none' }}>
                                                Learn More
                                            </Link>
                                        </Button>

                                    </CardActions> */}
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </motion.div>
                    </Container>
                </Box>
            </section>
        </div >
    )
}
