import { type PropsWithChildren } from "react";

type ImageType = {
  src: string;
  alt: string;
};
type HeaderProps = PropsWithChildren<{
  image: ImageType;
}>;
const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <img src={image.src} />
      <div>{children}</div>
    </header>
  );
};

export default Header;
