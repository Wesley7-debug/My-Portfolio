"use client";
import { useEffect, useState } from "react";
import "./globals.css";
//import Footer from "./Sleek/Footer/Footer";
import NavBoth from "./Sleek/Nav/NavBoth";
import Loading from "./Sleek/Loading/Loading";
import Head from "next/head";


export default function RootLayout({ children }) {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("loading");
    if (hasLoaded === "true") {
      setloading(false); // Skip loading screen
    }
  }, []);
  

  const handleFinishLoading = () => {
    sessionStorage.setItem("loading", "true");
   setloading(false);
  };

  return (
 
    <html>
      <body className="h-screen" >
      {
    loading ?(
  <Loading onFinish={handleFinishLoading}/>
  
    )
 :(

<>
<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Eugene Fidelis" />
        <meta
          name="Eugene Fidelis"
          content="Official site or portfolio of Eugene Fidelis. Discover projects, skills, and more."
        />
        <title>Eugene Fidelis</title>
      </Head>
    <NavBoth/>
  <main>
   {children}
</main>


</>
   
)}
      </body>
    </html>

  );
}
