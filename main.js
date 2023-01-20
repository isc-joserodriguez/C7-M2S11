const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const guardar = document.getElementById("guardar");
const form = document.getElementById("form");

const guardarUsuario = async () => {
  const url = "https://todo-app-bs.herokuapp.com/v1/user/signup";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: nombre.value,
      lastName: apellido.value,
      email: correo.value,
      password: contrasena.value,
      confirmPassword: contrasena.value,
    }),
  });
  const data = await response.json();
  console.log(data);
};

form.addEventListener("submit", async (e) => {
  e.preventDefault(); //Para que no se recargue la página
  await guardarUsuario();
});

guardar.addEventListener("click", async (e) => {
  await guardarUsuario();
});

/* const nuevoUser = async () => {
  const respuesta = await axios.post(
    "https://todo-app-bs.herokuapp.com/v1/user/signup",
    {
      firstName: "Maria2",
      lastName: "Juarez2",
      email: "correo2@maria.com",
      password: "password",
      confirmPassword: "passsword",
    }
  );
  console.log(respuesta);
  console.log(respuesta.data);
};

nuevoUser(); */