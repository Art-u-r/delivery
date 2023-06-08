import React, { useState } from 'react';
import { Alert } from 'reactstrap';

function AlertWarning({ isEmpty }) {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="danger" isOpen={visible} toggle={onDismiss}>
      {isEmpty}
    </Alert>
  );
}

export default AlertWarning;
