import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export default function SnackbarWarningMessage({ openState, handleClose, children }) {
  return (
    <Snackbar
      open={openState}
      onClose={handleClose}
      autoHideDuration={4000}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>{children}</Alert>
    </Snackbar>
  );
}
