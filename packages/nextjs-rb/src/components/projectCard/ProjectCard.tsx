import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useImageUrl from '../../utils/hooks/useImageUrl.hook';
import MDXRenderer from '../mdxRenderer/MDXRenderer';
import CustomTooltip from '../shared/tooltips/CustomTooltip';
import { ProjectCardProps } from './ProjectCardProps';

function ProjectCard({ project, theme }: ProjectCardProps) {
  const { isTop, snapshots, title, description, slug, deployedLink } = project;

  console.log(isTop);

  const borderForTopProject = isTop
    ? `border border-5 border-${theme === 'light' ? 'dark' : 'light'}`
    : null;

  const imageUrl = useImageUrl(snapshots[0]?.url) ?? '';

  return (
    <Col lg={4} sm={12} className={`my-3`}>
      <Card bg={theme} className={`h-100 ${borderForTopProject}`}>
        <Card.Header>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Title className={`d-flex justify-content-between`}>
            <h2>
              <strong>{title}</strong>
            </h2>
            {isTop && (
              <CustomTooltip tip="Top Project">
                <FontAwesomeIcon icon={faStar} className={`my-auto`} />
              </CustomTooltip>
            )}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <MDXRenderer content={description} />
        </Card.Body>
        <Card.Footer>
          <Row className={`justify-content-around my-2`}>
            <Link href={`/portfolio/projects/${slug}`} passHref>
              <Button>More Details</Button>
            </Link>
            <a
              href={deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Project Demo URL"
            >
              <Button variant="success">Live Demo</Button>
            </a>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default ProjectCard;
