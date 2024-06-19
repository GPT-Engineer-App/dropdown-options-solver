import React, { useState } from "react";
import { Container, Text, VStack, Box, FormControl, FormLabel, Button, Collapse, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import Select from "react-select";

const options = [
  { value: "1", manager: "John Doe", center_code: "CC001", department: "HR", id: "1" },
  { value: "2", manager: "Jane Smith", center_code: "CC002", department: "Finance", id: "2" },
  { value: "3", manager: "Mike Johnson", center_code: "CC003", department: "IT", id: "3" },
  { value: "4", manager: "Emily Davis", center_code: "CC004", department: "Marketing", id: "4" },
];

const formatOptionLabel = ({ manager, center_code, department, id }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
    <div style={{ flex: 1 }}><strong>Manager:</strong> {manager}</div>
    <div style={{ flex: 1 }}><strong>Center Code:</strong> {center_code}</div>
    <div style={{ flex: 1 }}><strong>Department:</strong> {department}</div>
    <div style={{ flex: 1 }}><strong>Id:</strong> {id}</div>
  </div>
);

const Index = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isModalOpen, onOpen, onClose } = useDisclosure();

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
            />
          </FormControl>
        </Box>
        <Button onClick={onToggle} mt={4}>
          Toggle Collapsible Section
        </Button>
        <Collapse in={isOpen} animateOpacity>
          <Box p={4} mt={4} border="1px" borderColor="gray.200" borderRadius="md" width="100%">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Manager</Th>
                  <Th>Center Code</Th>
                  <Th>Department</Th>
                  <Th>Id</Th>
                </Tr>
              </Thead>
              <Tbody>
                {selectedOptions.map(option => (
                  <Tr key={option.value}>
                    <Td>{option.manager}</Td>
                    <Td>{option.center_code}</Td>
                    <Td>{option.department}</Td>
                    <Td>{option.id}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Collapse>
        <Button onClick={onOpen} mt={4}>
          Open Modal
        </Button>
        <Modal isOpen={isModalOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Selected Options</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Manager</Th>
                    <Th>Center Code</Th>
                    <Th>Department</Th>
                    <Th>Id</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {selectedOptions.map(option => (
                    <Tr key={option.value}>
                      <Td>{option.manager}</Td>
                      <Td>{option.center_code}</Td>
                      <Td>{option.department}</Td>
                      <Td>{option.id}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Container>
  );
};

export default Index;