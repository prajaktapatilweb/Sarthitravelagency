import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "../utils";
import { MUIProvider } from "../providers";
import "slick-carousel/slick/slick.css";
import "../assets/css/style.css";
import "../styles/react-slick.css";
import { useRouter } from "next/router";


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const { asPath } = useRouter()
  // console.log('RRRRR', asPath.split('/')[1] === 'blogs')
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <title>
          Dentist in Borivali West - Smile Solutions Advanced Dental Care

        </title>
        <meta name="title" content="Dentist in Borivali West - Smile Solutions Advanced Dental Care"></meta>
        <meta name='description' content="Experience exceptional care at our Dental Clinic in Borivali West, offering a range of treatments from routine check-ups to advanced procedures in a comfortable setting. Your smile is our priority!"></meta>
        <link rel="canonical" href=" https://www.smilesolutionsclinic.com/" />

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Smile Solutions Advanced Dental Care and Implant Centre",
              "image": "https://www.smilesolutionsclinic.com/_next/image?url=%2Fimages%2Fclinic%2Fclinics1.jpg&w=640&q=75",
              "@id": "",
              "url": "https://www.smilesolutionsclinic.com/",
              "telephone": "09820097046",
              "priceRange": "$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "807, 8th floor, Friends business bay, Lokmanya Tilak Road, Opp. Veer Savarkar garden, Above Malabar jewellers, Borivali West",
                "addressLocality": "Mumbai",
                "postalCode": "400092",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.2289469,
                "longitude": 72.8495047
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "20:30"
              },
              "sameAs": [
                "https://www.facebook.com/smilesolutionsdental/",
                "https://www.instagram.com/smilesolution_15/#"
              ]
            }
            ),
          }}
        />

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Dr. Heeral Chikhal",
              "image": "https://www.smilesolutionsclinic.com/_next/image?url=%2Fimages%2Fdr%2F3.jpg&w=1920&q=75",
              "@id": "",
              "url": "https://www.smilesolutionsclinic.com/",
              "telephone": "9820097046",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Borivali West",
                "addressLocality": "Mumbai",
                "postalCode": "400 092",
                "addressCountry": "IN"
              }
            }
            ),
          }}
        />

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Dr. Kalpesh Dey",
              "image": "https://www.smilesolutionsclinic.com/_next/image?url=%2Fimages%2Fdr%2F2.jpg&w=1920&q=75",
              "@id": "",
              "url": "https://www.smilesolutionsclinic.com/",
              "telephone": "8169204284",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Borivali West",
                "addressLocality": "Mumbai",
                "postalCode": "400 092",
                "addressCountry": "IN"
              }
            }
            ),
          }}
        />


        {/* Website Monitoring Code - */}

      </Head>
      <MUIProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </MUIProvider>
    </CacheProvider>
  );
}
