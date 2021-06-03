import http from "../util/banco";

export const findAllClientes = async () => {
  return http.get("/cliente/listar").then((response) => {
    return response.data;
  });
};

export const findClienteById = async (id) => {
  return http
    .get(`/cliente/alterar/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const createCliente = async (cliente) => {
  console.log(" passando pela rotina de inclusão de cliente ");
  return http({
    method: "post",
    url: "/cliente/salvar",
    data: cliente,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res.data);
    return res.data;
  });
};

export const updateCliente = async (cliente) => {
  return http({
    method: "post",
    url: `/cliente/update/${cliente.id}`,
    data: cliente,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};
