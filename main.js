/* fetch("https://random-d.uk/api/v2/quack")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((data) => {
    document.getElementById('imagen').setAttribute('src', data.url)
  }); */

const getImage = async () => {
  const respuesta = await fetch("https://random-d.uk/api/v2/quack");
  const data = await respuesta.json();
  document.getElementById("imagen").setAttribute("src", data.url);
};

const getMoneda = async () => {
  const respuesta = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/mxn.json"
  );
  const data = await respuesta.json();
  document.getElementById(
    "moneda"
  ).innerHTML = `1 Euro vale ${(+data.mxn).toFixed(3)} pesos mexicanos.`;
};

getImage();
getMoneda();
