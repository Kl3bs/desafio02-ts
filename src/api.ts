const conta = {
  email: "kleber@email.com",
  password: "123456",
  name: "Kleber Vasconcelos",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
