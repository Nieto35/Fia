import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: '/delivery.png',
  },
  title: "Fia Valencia",
  description: "Pagina para comprar comida de fia Valencia.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const styleObject = { backgroundColor: 'white' };
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/delivery.ico" />
      </head>
      
      <body className={`${inter.className} bg-white`} style={styleObject}>{children}</body>
    </html>
  );
}
