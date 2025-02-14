import { Box, Container } from '@mui/material'
import React from 'react'
import Heading from './Heading'
import { headList3 } from '../constants/titlefile'
import CartypeTabs from './CartypeTabs'
import Cartypes from './Cartypes'

export default function TabsIntroduction() {
    return (
        <div>
            <Box id='courses' sx={{ background: "#f3f7f9", pt: 2, pb: 15 }}>
                <Container>
                    <Heading data={headList3}></Heading>
                    <br></br>

                    {/* <AppCard sx={{ pt: 7, pb: 15, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}> */}
                        <CartypeTabs data={[
                            { label: 'Sedan', panelData: <Cartypes/> },
                            { label: 'SUV ', panelData: 'eredr' },
                            { label: 'MUV', panelData: 'reqytety' },
                            { label: 'Hatchback', panelData: 'xvvcf' },
                        ]} />
                    {/* </AppCard> */}
                </Container>
            </Box>
        </div>
    )
}
