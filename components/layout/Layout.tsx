import { FC } from "react";
import Head from "next/head";
import Script from "next/script";
import favicon from "../../assets/images/favTaxi.png";

interface ILayout {
  title: string;
}

const Layout: FC<ILayout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | Ya App</title>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>
      <div
        style={{ maxWidth: "480px" }}
        className={"mx-auto relative overflow-hidden"}
      >
        {children}
        <Script
          strategy={"beforeInteractive"}
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
        ></Script>
      </div>
    </>
  );
};

export default Layout;
