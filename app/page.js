import Link from "next/link";
import Header from "../components/Header"

export default function Home() {
  console.log("Executing...");
  
  // Using the Link component allows you to use client side rendering, but using an '<a>' anchor tag can use the SSR feature of NextJS

  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}