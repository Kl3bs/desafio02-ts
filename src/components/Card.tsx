import { Box, Text, Input, Button } from "@chakra-ui/react";
import { welcome } from "../services/welcome";

export const Card = () => {
  return (
    <Box
      minHeight="100vh"
      backgroundColor="#fff"
      p="25px"
      display="flex"
      justifyContent="center"
    >
      <Box
        w="60%"
        maxHeight="fit-content"
        backgroundColor="#ffffff"
        borderRadius="25px"
        p="25px"
        display="flex"
        flexDir="column"
        gap="20px"
        textAlign="center"
      >
        <Text fontSize="4xl">Fazer Login</Text>
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="teal" size="md" width="100%" onClick={welcome}>
          Button
        </Button>
      </Box>
    </Box>
  );
};
