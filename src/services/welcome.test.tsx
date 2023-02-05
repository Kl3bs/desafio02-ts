import { welcome } from "./welcome";

describe("welcome", () => {
  const mockWelcome = jest.fn();
  window.alert = mockWelcome;
  it("deve mostrar um aler com a mensagem", () => {
    welcome();
    expect(mockWelcome).toHaveBeenLastCalledWith(
      "Olá, seja bem vindo ao Dio Bank!"
    );
  });
});
