const getPosts = async () => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  const data = await respuesta.json();
  console.log(data[0]);
};

const agregarPost = async () => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ASFasfhpq983hfDFASDFasdf89sadfhsRafuas9",
    },
    body: {
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      userId: 1,
    },
  });
  const data = await respuesta.json();
  console.log(data);
};

getPosts();
agregarPost();
