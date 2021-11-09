import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { ProjectButtonProps } from './ProjectButtonProps';

function ProjectButton({ link, variant, icon, text }: ProjectButtonProps) {
  return (
    <Col lg={3} sm={12} className={`my-3`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Button variant={variant}>
          <FontAwesomeIcon icon={icon} /> {text}
        </Button>
      </a>
    </Col>
  );
}

export default ProjectButton;
