"use client";
import { useState } from "react";
import "./globals.css";
import Footer from "./Sleek/Footer/Footer";
import NavBoth from "./Sleek/Nav/NavBoth";
import Loading from "./Sleek/Loading/Loading";


export default function RootLayout({ children }) {
  const [loading, setloading] = useState(true)
  return (
 
    <html>
      <body>
      {
    loading ?(
  <Loading onFinish={() =>{setloading(false)}}/>
    )
 :(
  
<>
 
    <NavBoth/>
  <main>
   {children}
</main>
<Footer/>

</>
   
)}
      </body>
    </html>

  );
}
