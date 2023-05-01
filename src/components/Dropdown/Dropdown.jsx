import { Box } from './Dropdown.styled';
import { useState } from 'react';
import Select from 'react-select';
const options = [
  { value: 'show all', label: 'show all' },
  { value: 'follow', label: 'follow' },
  { value: 'following', label: 'following' },
];
export const Dropdown = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    onSelect(selectedOption);
  };

  return (
    <Box>
      <Select
        placeholder="tweets"
        defaultValue={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </Box>
  );
};
