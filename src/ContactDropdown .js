import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [choice, setChoice] = React.useState('');

  const handleChange = (event) => {
    setChoice(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Best Contact</InputLabel>
        <Select
          labelId="demo-simples-select-label"
          id="demo-simple-select"
          value={choice}
          label="Best Contact"
          onChange={handleChange}
        >
          <MenuItem value={"Phone Number"}>Phone Number</MenuItem>
          <MenuItem value={"Email Address"}>Email Address</MenuItem>
          <MenuItem value={"Either Or"}>Either Or</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
