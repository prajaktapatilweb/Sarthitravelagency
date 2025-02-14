import { Suspense, lazy } from "react";
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
import { MainLayout } from '../components/layout';
import Dentalservices from '../components/home/Dentalservices';
import Contact from '../components/home/Contact';
import Clinicinfo from "../components/home/Clinicinfo";
import DrHeeral from "../components/home/DrAkshay";
import Servicecard from "../components/home/Servicecard";
import Cartypes from "../components/home/Cartypes";
import Offercard from "../components/home/Offercard";
import TabsIntroduction from "../components/home/TabsIntroduction";
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>
      {/* <Countdown /> */}
      <Servicecard/>

      <Dentalservices/>
      {/* <Cartypes/> */}
<TabsIntroduction/>
      <Offercard/>
      <Clinicinfo></Clinicinfo>


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

