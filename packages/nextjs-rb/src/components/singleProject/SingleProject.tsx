import Head from 'next/head';
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import useImageUrl from '../../utils/hooks/useImageUrl.hook';
import SingleProjectCard from '../singleProjectCard/SingleProjectCard';
import { SingleProjectProps } from './SingleProjectProps';

function SingleProject({ project }: SingleProjectProps) {
  const imageUrl = useImageUrl(project.snapshots[0].url);

  return (
    <>
      <Head>
        <meta property="og:image" content={imageUrl} key="og:image" />
      </Head>
      <Container>
        <SingleProjectCard project={project} />
      </Container>
    </>
  );
}

export default SingleProject;
