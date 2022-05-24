import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Input(props) {
  
  return (
    <TextField
    margin="normal"
    required
    fullWidth
    id={props.id}
    label={props.label}
    name={props.name}
    autoComplete={props.autoComplete}
    autoFocus
  />
  );
}
