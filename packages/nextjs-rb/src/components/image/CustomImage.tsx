import Image from "react-bootstrap/Image";
import { CustomImageProps } from "./CustomImageProps";

function CustomImage({ url, alternativeText }: CustomImageProps) {
  const imageUrl = `${process.env["NEXT_PUBLIC_STRAPI_URL"]}${url}`;
  return <Image fluid src={imageUrl} alt={alternativeText} />;
}

export default CustomImage;
