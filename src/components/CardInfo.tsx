import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../api";

interface ICardInfo {
  mainContent: string;
  content: string;
}

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
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
      backgroundColor="#22a6b3"
      color="white"
      padding={8}
      minHeight="120px"
      borderRadius="25px"
    >
      <Text fontSize="2xl" fontWeight="bold">
        {mainContent}
      </Text>
      <Text fontSize="xl"> {content}</Text>
    </Box>
  );
};

export default CardInfo;
