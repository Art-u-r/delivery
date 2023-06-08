import React, { useState } from 'react';
import { Alert } from 'reactstrap';

function AlertSuccess({ success }) {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert isOpen={visible} toggle={onDismiss}>
      {success}
    </Alert>
  );
}

export default AlertSuccess;
