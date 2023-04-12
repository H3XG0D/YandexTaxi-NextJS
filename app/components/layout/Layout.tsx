import { FC, useState } from "react";

interface ILayout {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children, title }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return <div>{children}</div>;
};

export default Layout;
