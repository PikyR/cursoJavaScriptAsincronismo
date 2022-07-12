import fetch, { Response } from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(ulrApi) {
  return fetch(ulrApi); 
}

/*
fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products);    
  })
  .catch(err => console.log(err))
;
*/

fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(`Productos: ${products.length}`);
    console.log(`Producto ID: ${products[0].id}`);
    return fetchData(`${API}/products/${products[0].id}`)
  })
  .then(response => response.json())
  .then(product => {
    console.log(`Titulo: ${product.title}`);
    console.log('Object: ', product);
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then(response => response.json())
  .then(category => {
    console.log(`Categoria: ${category.name}`);    
  })
  .catch(err => console.log(err))
  .finally(() => console.log('Operación finalizada'))
