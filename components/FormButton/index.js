import React from 'react';
import { Button, Stack } from '@mui/material';

export default function FormButton({ label, className, disabled }) {
    return (
      <Stack spacing={2} className={className}>
        <Button variant="contained" color="success" disabled={disabled}>{label}</Button>
      </Stack>
    );
  }