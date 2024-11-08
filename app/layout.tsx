import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed w-full ">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
