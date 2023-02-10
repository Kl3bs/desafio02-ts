import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import CardInfo from "../components/CardInfo";

const Conta = () => {
  interface UserData {
    id: string;
    email: string;
    password: string;
    name: string;
    balance: number;
  }

  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data: UserData | any = await api;
      setUserData(data);
    };

    getData();
  }, []);

  if (userData && id !== userData.id) {
    navigate("/");
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData ? (
          <>
            {" "}
            <CardInfo
              mainContent={`Bem vindo,${userData?.name}!`}
              content={`${userData?.email}`}
            ></CardInfo>
            <CardInfo
              mainContent={`Saldo`}
              content={`R$ ${userData?.balance}`}
            ></CardInfo>
          </>
        ) : (
          <Center>
            <Spinner size="xl" color="black"></Spinner>
          </Center>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
