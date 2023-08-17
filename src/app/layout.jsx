import { Providers } from "./store/Providers";
import Navigation from "./main-nav";
import Footer from "./components/Footer";
import "./globals.css";
import Script from "next/script";
import ProviderWrapper from "./providerwrapper";
// import ConnectionStatus from "./components/Connection";

export const metadata = {
  title: "Education plus learning platform",
  description: "can learn easily by using online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body suppressHydrationWarning={true}>
          <ProviderWrapper>
            <Navigation />
            {/* <ConnectionStatus /> */}
            {children}
            <Script src="https://apis.google.com/js/platform.js" async defer />
            <Footer />
          </ProviderWrapper>
        </body>
      </Providers>
    </html>
  );
}
