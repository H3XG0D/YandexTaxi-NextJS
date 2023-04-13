import Head from "next/head";
import taxiIcon from "../../assets/images/taxiIcon.png";
import { FC, useEffect, useState } from "react";
import Script from "next/script";
import Loader from "../UI/Loader";

interface ILayout {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children, title }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{title} | React Taxi</title>
        <meta name="description" content="Created by Sivtsev Ivan"></meta>
        <link rel="shortcut icon" href={taxiIcon.src} type="image/png"></link>
      </Head>

      <Script
        strategy="beforeInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
      />

      <div
        style={{ maxWidth: 480 }}
        className="mx-auto relative overflow-hidden"
      >
        {isLoading ? <Loader /> : children}
      </div>
    </div>
  );
};

export default Layout;
