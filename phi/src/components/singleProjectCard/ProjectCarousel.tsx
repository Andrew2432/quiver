import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { SnapshotType } from '../../newTypes/SnapshotType';
import useBreakpoint from '../../utils/hooks/useBreakpoint';
import ProjectSnapshot from './ProjectSnapshot';
import { ProjectCarouselProps } from './SingleProjectCardProps';

function createProjectSnapshot(snapshot: SnapshotType, index: number) {
  return (
    <Carousel.Item key={index}>
      <ProjectSnapshot snapshot={snapshot} />
    </Carousel.Item>
  );
}

function ProjectCarousel({ snapshots }: ProjectCarouselProps) {
  const breakpoint = useBreakpoint();

  return (
    <Carousel className={`my-3`} interval={2000} fade={true}>
      {React.Children.toArray(
        snapshots.map(({ url, alternativeText, width, height }, index) => (
          <Carousel.Item key={index}>
            <Image
              width={width}
              height={height}
              className={`img-fluid d-block w-100`}
              src={`${process.env['NEXT_PUBLIC_STRAPI_URL']}${url}`}
              alt={alternativeText ?? ''}
            />
            {breakpoint !== 'xs' && (
              <Carousel.Caption>
                <p>{alternativeText}</p>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        ))
      )}
    </Carousel>
  );
}

export default ProjectCarousel;
