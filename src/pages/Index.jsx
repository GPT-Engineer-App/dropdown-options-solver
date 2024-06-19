import React, { useState } from "react";
import { Container, Text, VStack, Box, FormControl, FormLabel } from "@chakra-ui/react";
import Select from "react-select";

const options = [
  { value: "1", manager: "John Doe", center_code: "CC001", department: "HR", id: "1" },
  { value: "2", manager: "Jane Smith", center_code: "CC002", department: "Finance", id: "2" },
  { value: "3", manager: "Mike Johnson", center_code: "CC003", department: "IT", id: "3" },
  { value: "4", manager: "Emily Davis", center_code: "CC004", department: "Marketing", id: "4" },
];

const formatOptionLabel = ({ manager, center_code, department, id }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
    <div style={{ flex: 1, padding: '0 5px' }}><strong>Manager:</strong> {manager}</div>
    <div style={{ flex: 1, padding: '0 5px' }}><strong>Center Code:</strong> {center_code}</div>
    <div style={{ flex: 1, padding: '0 5px' }}><strong>Department:</strong> {department}</div>
    <div style={{ flex: 1, padding: '0 5px' }}><strong>Id:</strong> {id}</div>
  </div>
);

const Index = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Enhanced Dropdown Form</Text>
        <Box width="100%">
          <FormControl>
            <FormLabel>Select Options</FormLabel>
            <Select
              isMulti
              name="options"
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleChange}
              value={selectedOptions}
              formatOptionLabel={formatOptionLabel}
              styles={{
                option: (provided) => ({
                  ...provided,
                  display: 'flex',
                  justifyContent: 'space-between',
                }),
              }}
            />
          </FormControl>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;