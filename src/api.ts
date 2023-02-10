const conta = {
  id: "1",
  email: "kleber@email.com",
  password: "123456",
  name: "Kleber Vasconcelos",
  balance: 2000.0,
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
