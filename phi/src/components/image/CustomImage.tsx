import Image from "react-bootstrap/Image";
import { CustomImageProps } from "./CustomImageProps";

function CustomImage({ path, title }: CustomImageProps) {
  const url = `${process.env["NEXT_PUBLIC_STRAPI_URL"]}${path}`;
  return <Image src={url} alt={title} className={"img-fluid"} />;
}

export default CustomImage;
