'use client'
import Navbar from "@/components/navbar";
import "../../app/globals.css";
import Footer from "@/components/footer";
import {Cart} from "@/components/cart";

export default function CartPage() {


  return (
   <>
      <div className="flex flex-col bg-white">
        <Navbar />
      </div>

      <Cart />

      <Footer />
   
   </>
  );
}