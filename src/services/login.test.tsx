import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  const mockEmail = "kleber@email.com";
  window.alert = mockAlert;
  it("Deve exibir um alert com boas vindas", async () => {
    await login(mockEmail);

    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`);
  });

  it("Não deve exibir um alert com boas vindas, caso o email seja válido!", async () => {
    await login(mockEmail);

    expect(mockAlert).not.toHaveBeenCalledWith("Bem vindo!");
  });

  it("Deve exibir um erro caso o email não seja válido", async () => {
    await login("emailinvalid@email.com");
    expect(mockAlert).toHaveBeenCalledWith("Email inválido!");
  });
});
