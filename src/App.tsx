import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  const [value, setValue] = useState(0);

  return (
    <ChakraProvider>
      <Layout>
        <Card></Card>

        <div>
          <button
            onClick={() => {
              setValue(value + 1);
              console.log(value);
            }}
          >
            Click me
          </button>
          <h1>{value}</h1>
        </div>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
