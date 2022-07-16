const axios = require("axios");

const nuevoUser = async () => {
  const respuesta = await axios.post(
    "https://todo-app-bs.herokuapp.com/v1/user/signup",
    {
      firstName: "Maria",
      lastName: "Juarez",
      email: "correo@maria.com",
      password: "password",
      confirmPassword: "passsword",
    }
  );
  console.log(respuesta);
  console.log(respuesta.data);
};

nuevoUser();
