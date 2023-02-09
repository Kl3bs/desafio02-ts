import { Box, Text, Input, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { login } from "../services/login";
import { api } from "../api";

interface UserData {
  email: string;
  password: string;
  name: string;
}

export const Card = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: UserData | any = await api;
      setUserData(data);
    };

    getData();
  }, []);

  console.log(userData);

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
        {userData === null ||
          (userData === undefined ? (
            <h1>Carregando...</h1>
          ) : (
            <h1>Informações carregadas!</h1>
          ))}
        <Text fontSize="4xl">Fazer Login</Text>
        {userData?.name}
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
