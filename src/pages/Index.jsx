import React, { useState } from "react";
import { Container, Text, VStack, Box, FormControl, FormLabel } from "@chakra-ui/react";
import Select from "react-select";

const options = [
  { value: "manager", label: "Manager" },
  { value: "center_code", label: "Center Code" },
  { value: "department", label: "Department" },
  { value: "id", label: "Id" },
];

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
            />
          </FormControl>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;