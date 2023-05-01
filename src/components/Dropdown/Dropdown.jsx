import { Box } from './Dropdown.styled';
import { useState } from 'react';
import Select from 'react-select';
const options = [
  { value: 'show all', label: 'show all' },
  { value: 'follow', label: 'follow' },
  { value: 'following', label: 'following' },
];
export const Dropdown = ({ onSelect }) => {
  const [_, setSelectedOption] = useState(null);
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    onSelect(selectedOption);
  };

  return (
    <Box>
      <Select
        defaultValue={options[0]}
        onChange={handleChange}
        options={options}
      />
    </Box>
  );
};
