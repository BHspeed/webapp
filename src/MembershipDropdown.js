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
        <InputLabel id="demo-simple-select-label">Membership</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={choice}
          label="Membership"
          onChange={handleChange}
        >
          <MenuItem value={"SingleMembership"}>SingleMembership</MenuItem>
          <MenuItem value={"FamilyMembership"}>Family Membership</MenuItem>
          <MenuItem value={"JustMe Membership"}>Just Me Membership</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
