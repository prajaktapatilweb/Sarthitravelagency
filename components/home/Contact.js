import React, { useState } from 'react';
import { Typography, Card, Link, Select, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Axios from 'axios';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import AppTextField from '../Formik/AppTextField';
import { Button, FormControl, Grid, InputLabel } from '@mui/material';
import CustomizedSelectFormik from '../Formik/CustomizedSelectFormik';
import { useRouter } from 'next/router';
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Heading from './Heading';
import { headList8 } from '../constants/titlefile';
import { motion } from "framer-motion";
import GoogleRecaptcha from '../GoogleRecaptcha';
import Image from 'next/image';
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs"; // ✅ Required for handling date values





const All = [
  { key: 1, text: 'Sedan - Dzire', value: 'Sedan - Dzire' },
  { key: 2, text: ' MUV - Toyota Rumion', value: ' MUV - Toyota Rumion' },
  { key: 3, text: 'SUV - Innova Crysta', value: 'SUV - Innova Crysta' },
  { key: 4, text: 'Shuttle Van - Urbania Force ', value: 'Shuttle Van - Urbania Force ' },
  { key: 5, text: 'Other', value: 'Other' }
];

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Please enter valid email ID'),
  mobilenumber: yup
    .string()
    .required('Mobile Number is mandatory')
    .matches(/^[0-9]+$/, 'Only digits are allowed for this field ')
    .length(10, 'Only 10 digit mobile number'),
  selection: yup.string(),
  recaptcha: yup.string().required('Please complete the reCAPTCHA'),  // Make reCAPTCHA required
});

const Contact = () => {
  const contactno1 = "9820097046";
  const contactno2 = "8169204284";
  const router = useRouter();

  const onSubmit = async (values, submitProps) => {
    console.log({ values })
    Axios.post("/api/nodemail", {
      name: values.name,
      email: values.email,
      mobileno: values.mobilenumber,
      msg: values.msg,
      selection: values.selection
    })
      .then(function (response) {
        router.push('/thankyou')
        submitProps.setSubmitting(false);
        submitProps.resetForm();
      })
      .catch(function (response) {
        console.log('Rrtt', response)
        alert("Error in submission. Please resubmit");
      });
  };

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


  const [selectedDate, setSelectedDate] = useState(dayjs()); // ✅ Initialize with current date
  return (


    <section id="contactform" class="contact" style={{ paddingTop: 50, paddingBottom: 50, backgroundColor: 'white' }}>

      <Container>

        <br />
        <motion.div
          className="textcontainer"
          variants={fadeUpVariants}
          initial="hidden"         // Start in the hidden state
          whileInView="visible"    // Animate to the visible state when in view
          viewport={{ once: true }} // Optionally only animate once
        >
          <Grid container spacing={2} alignItems='center' justifyContent='center'>
            {/* <Grid item xs={12} md={6} order={{xs:1,md:0}}>
              <Box sx={{border:'5px solid red',padding:2,borderTopRightRadius:'10%'}}>
             <Image src='/images/headerback1.jpg' width={100} height={100} layout='responsive' style={{borderTopRightRadius:'10%'}}></Image>
             </Box>
            </Grid> */}
            <Grid item xs={12} md={12} order={{ xs: 0, md: 1 }}>
              <Heading data={headList8} />
              {/* <Card sx={{ px: 3, py: 4,boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'  }}> */}
              <Formik
                validateOnChange={true}
                initialValues={{
                  name: '',
                  mobilenumber: '',
                  passengers: '',
                  carselection: '',
                  pickup: '',
                  dropaddress: '',
                  date: '',
                  time: '',
                  msg: '',
                  recaptcha: ''
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => (
                  <Form style={{ textAlign: 'left' }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <AppTextField
                          placeholder='name'
                          name='name'
                          label='Name'
                          sx={{
                            width: '100%',
                            '& .MuiInputBase-input': {
                              fontSize: 14,
                            },
                          }}
                          variant='outlined'
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <AppTextField
                          placeholder='Mobile Number'
                          name='mobilenumber'
                          label='Mobile Number'
                          sx={{
                            width: '100%',
                            '& .MuiInputBase-input': {
                              fontSize: 14,
                            },
                          }}
                          variant='outlined'
                        />

                      </Grid>
                      <Grid item xs={12} md={4}>
                        <AppTextField
                          placeholder='Passengers'
                          name='passengers'
                          label='Passengers'
                          sx={{
                            width: '100%',
                            '& .MuiInputBase-input': {
                              fontSize: 14,
                            },
                          }}
                          variant='outlined'
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <FormControl
                          sx={{
                            width: '100%',
                            '&.MuiInputBase-input': { fontSize: 14 },
                          }}
                        >
                          
                          <InputLabel id='demo-simple-select-label' >
                            Select Your Vehicle
                          </InputLabel>
                          <Field
                            name='selection'
                            as='select'
                            options={All}
                            component={CustomizedSelectFormik}
                          ></Field>
                        </FormControl>
                        {/* <FormControl fullWidth variant="outlined"> {/* ✅ Use `variant="outlined"` *
        <InputLabel id="demo-simple-select-label">Select your vehicle</InputLabel>
        <Field name="selection">
          {({ field }) => (
            <Select
              {...field}
              labelId="demo-simple-select-label"
              label="Select your vehicle"  // ✅ Ensures floating label moves correctly
            >
              {All.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        </Field>
      </FormControl> */}
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateTimePicker
                            // label="Select Date & Time"
                            value={selectedDate}
                            onChange={(newValue) => setSelectedDate(newValue)}
                            renderInput={(params) => <TextField {...params} fullWidth />}

                            sx={{width:'100%'}}
                          />
                        </LocalizationProvider>
                        <ErrorMessage name="date" component="div" style={{ color: "red" }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box>
                          <AppTextField
                            placeholder='Pick Up Address'
                            name='pickup'
                            label='Pick Up Address'
                            sx={{
                              width: '100%',
                              '& .MuiInputBase-input': {
                                fontSize: 14,
                              },
                            }}
                            variant='outlined'
                            multiline
                            rows='2'
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12}  md={6}>
                        <Box>
                          <AppTextField
                            placeholder='Drop Address'
                            name='dropaddress'
                            label='Drop Address'
                            sx={{
                              width: '100%',
                              '& .MuiInputBase-input': {
                                fontSize: 14,
                              },
                            }}
                            variant='outlined'
                            multiline
                            rows='2'
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12}  md={12}>
                        <Box>
                          <AppTextField
                            placeholder='Message'
                            name='msg'
                            label='Message'
                            sx={{
                              width: '100%',
                              '& .MuiInputBase-input': {
                                fontSize: 14,
                              },
                            }}
                            variant='outlined'
                            multiline
                            rows='4'
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} sx={{ mb: { xs: 3, lg: 3 } }}>
                        <GoogleRecaptcha />
                        <ErrorMessage name="recaptcha" component="div" style={{ color: 'red' }} />
                      </Grid>
                    </Grid>
                    <div>
                      <Button
                        variant='contained'
                        color='primary'
                        disabled={isSubmitting}
                        sx={{
                          textTransform: 'capitalize',
                          fontSize: 16,
                          minWidth: 160,
                          backgroundColor: 'primary.light'
                        }}
                        type='submit'
                      >
                        Submit
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
              {/* </Card> */}
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </section>


  );
};
export default Contact;
