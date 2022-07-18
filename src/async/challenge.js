import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();

  return data;
}

const otherFetchData = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`);

    const productID = products[0].id;
    const product = await fetchData(`${urlApi}/products/${productID}`);

    const productCategoryID = product.category.id;
    const category = await fetchData(`${urlApi}/categories/${productCategoryID}`);

    console.log('tipo: ', typeof(products));
    console.log('Es array: ', Array.isArray(products));
    console.log('Cantidad de producos: ', products.length);
    console.log('Producto: ',product.title);
    console.log('Categoria: ',category.name);
    console.log('Objeto producto: ',product);
    
  } catch (error) {
    console.log(error);
  }
}

otherFetchData(API);