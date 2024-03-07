import React from "react";
import { Box, Button, Container, Heading, Input, List, ListItem, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaGoogle, FaSearch, FaUpload } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Mock function to simulate connecting to Google Search Console
  const connectToSearchConsole = () => {
    // This would actually be an OAuth flow in a real application
    toast({
      title: "Connected to Google Search Console",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  // Mock function to submit pages to the Google Indexing API
  const submitPagesToIndexingAPI = () => {
    // This function would make an HTTP request to your backend
    toast({
      title: "Pages submitted to Google Indexing API",
      description: "Your pages will be indexed shortly.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Google Search Console Connector
        </Heading>
        <Button leftIcon={<FaGoogle />} colorScheme="red" onClick={connectToSearchConsole}>
          Connect to Google Search Console
        </Button>

        <Box w="100%">
          <Heading as="h2" size="md" mb={4}>
            Indexing Status
          </Heading>
          {/* This would be dynamically loaded from the API */}
          <List spacing={3}>
            <ListItem>
              <Stack direction="row" justifyContent="space-between">
                <Text>/index.html</Text>
                <Button size="sm" leftIcon={<FaSearch />}>
                  Check Status
                </Button>
              </Stack>
            </ListItem>
            {/* More list items would be mapped here */}
          </List>
        </Box>

        <Box w="100%">
          <Heading as="h2" size="md" mb={4}>
            Submit Pages to Index
          </Heading>
          <Stack spacing={4} direction="row" align="center">
            <Input placeholder="Enter page URLs" />
            <Button colorScheme="blue" leftIcon={<FaUpload />} onClick={submitPagesToIndexingAPI}>
              Submit
            </Button>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
