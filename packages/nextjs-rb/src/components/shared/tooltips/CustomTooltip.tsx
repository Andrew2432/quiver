import * as React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

interface Props {
  children: JSX.Element;
  tip: string;
}

function CustomTooltip({ children, tip }: Props): JSX.Element {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id={`tooltip-bottom`}>{tip}</Tooltip>}
    >
      {children}
    </OverlayTrigger>
  );
}

export default CustomTooltip;
