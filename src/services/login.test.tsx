import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  const mockEmail = "kleber@email.com";
  window.alert = mockAlert;
  it("Deve exibir um alert com boas vindas", () => {
    login(mockEmail);

    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`);
  });

  it("Não deve exibir um alert com boas vindas", () => {
    login(mockEmail);

    expect(mockAlert).not.toHaveBeenCalledWith("Bem vindo!");
  });
});
