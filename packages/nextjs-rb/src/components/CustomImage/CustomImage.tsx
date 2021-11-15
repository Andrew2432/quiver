import Image from 'react-bootstrap/Image';
import useImageUrl from '../../utils/hooks/useImageUrl.hook';
import { CustomImageProps } from './CustomImageProps';

function CustomImage({ url, alternativeText }: CustomImageProps) {
  const imageUrl = useImageUrl(url);
  return <Image fluid src={imageUrl} alt={alternativeText} />;
}

export default CustomImage;
