import { Suspense, lazy } from "react";
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
import { MainLayout } from '../components/layout';
import Dentalservices from '../components/home/Dentalservices';
import Contact from '../components/home/Contact';
import Clinicinfo from "../components/home/Clinicinfo";
import DrHeeral from "../components/home/DrAkshay";
import Servicecard from "../components/home/Servicecard";
import Cartypes from "../components/home/Cartypes";
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>
      {/* <Countdown /> */}
      <Servicecard/>
      <Clinicinfo></Clinicinfo>

      <Dentalservices/>
      <Cartypes/>

      {/* <DrHeeral/> */}
      <Suspense fallback=
        {<div>Component are loading please wait...</div>}>
        {/* <Photogallery /> */}
        {/* <Awards/> */}
        {/* <Testimonial></Testimonial> */}
      </Suspense>
    
      <Contact></Contact> 
    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

