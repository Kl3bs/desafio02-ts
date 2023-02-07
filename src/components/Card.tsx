import { Box, Text, Input, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { login } from "../services/login";
import { api } from "../api";

export const Card = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await api;
      console.log(data);
    };

    getData();
  });

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
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          colorScheme="teal"
          size="md"
          width="100%"
          onClick={() => login(email)}
        >
          Entrar
        </Button>
      </Box>
    </Box>
  );
};
