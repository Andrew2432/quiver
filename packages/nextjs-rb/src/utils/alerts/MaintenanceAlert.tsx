import * as React from 'react';
import Alert from 'react-bootstrap/Alert';

const { useState } = React;

function MaintenanceAlert() {
  const [isOpen, setIsOpen] = useState(true);

  if (isOpen) {
    return (
      <Alert variant="warning" onClose={() => setIsOpen(!isOpen)} dismissible>
        <Alert.Heading>Website under maintenance!</Alert.Heading>
        <p>This site is under construction. Contents are subject to change.</p>
      </Alert>
    );
  }

  return null;
}

export default MaintenanceAlert;
