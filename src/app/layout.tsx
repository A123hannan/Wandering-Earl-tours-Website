import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/navbar";
import Footer from "@/components/Footer/footer";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "900", "400", "700", "600", "500", "800"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
