import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContaInfo = () => {
  return (
    <>
      <Text fontSize="xl" fontWeight="bold">
        Informações de conta
      </Text>

      <Link to="/conta/1">Conta</Link>
    </>
  );
};

export default ContaInfo;
