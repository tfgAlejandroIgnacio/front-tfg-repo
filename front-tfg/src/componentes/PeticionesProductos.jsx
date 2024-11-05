const apiURL = "https://fakestoreapi.com/products";

export const PeticionGetProducto = async () => {
  const respuesta = await fetch(`${apiURL}`);
  return respuesta.json();
}

export const PeticionDeleteProducto = async (id) => {
  const respuesta = await fetch(`${apiURL}/${id}`, { method: "DELETE"});
  return respuesta.json();
}