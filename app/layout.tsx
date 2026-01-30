// import { Inter, Playfair_Display } from 'next/font/google'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
// const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} ${playfair.variable} bg-white text-gray-900 antialiased`}>
//         {children}
//       </body>
//     </html>
//   )
// }

import type { Metadata } from "next";
// 1. Đổi Inter thành Jost ở dòng import
import { Jost, Playfair_Display } from "next/font/google"; 
import "./globals.css";

// 2. Cấu hình font Jost (thay cho Inter)
const jost = Jost({ 
  subsets: ["latin"], 
  variable: "--font-jost" // Đặt tên biến CSS là --font-jost
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  title: "Laura Phan Portfolio",
  description: "Software Engineer & Full Stack Learner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Thay inter.variable bằng jost.variable ở thẻ body */}
      <body className={`${jost.variable} ${playfair.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}