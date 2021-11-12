import Image from 'next/image';
import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import useBreakpoint from '../../utils/hooks/useBreakpoint';
import useImageUrl from '../../utils/hooks/useImageUrl.hook';
import { ProjectSnapshotProps } from './SingleProjectCardProps';

function ProjectSnapshot({ snapshot }: ProjectSnapshotProps) {
  const { url, alternativeText, width, height } = snapshot;
  const imageUrl = useImageUrl(url);
  const breakpoint = useBreakpoint();

  return (
    <>
      <Image
        layout="responsive"
        objectFit="contain"
        width={width}
        height={height}
        className={`img-fluid img-responsive d-block w-100`}
        src={imageUrl}
        alt={alternativeText ?? ''}
      />
      {breakpoint !== 'xs' && (
        <Carousel.Caption>
          <p>{alternativeText}</p>
        </Carousel.Caption>
      )}
    </>
  );
}

export default ProjectSnapshot;
