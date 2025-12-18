import type { Metadata } from "next";
import { Outfit } from "next/font/google";  // importing fonts from google
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


//this metadata is edited for telling what a specific route is about. This is used for imporved SEO of our website.
export const metadata: Metadata = {
  title: "Shwetank's - Gym Arena",
  description: "Created by Shwetank Mishra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* to use any font in nextjs, we can do -> outfit.className */}
      <body
        className={`${outfit.className} antialiased`}
      >
        <header>Shwetank header</header>
        {children}
        <footer>Shwetank footer</footer>
      </body>
    </html>
  );
}
