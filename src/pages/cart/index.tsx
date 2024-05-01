'use client'
import Navbar from "@/components/navbar";
import "../../app/globals.css";
import Footer from "@/components/footer";
import {Cart} from "@/components/cart";
import { LangProvider } from "@/context/langContext";

export default function CartPage() {


  return (
   <LangProvider>
      <div className="flex flex-col bg-white">
        <Navbar />
      </div>

      <Cart />

      <Footer />
   
   </LangProvider>
  );
}