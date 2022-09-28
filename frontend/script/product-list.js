const getProducts = async () => {
  try {
    const products = await (
      await fetch("http://localhost:3000/product")
    ).json();
    return products;
  } catch (error) {
    console.log(`Erro ao obter a lista de produtos:`, error);
  }
};

const init = async () => {
  const products = await getProducts();
  const list = document.querySelector(".product-list");

  const htmlList = products.reduce((acc, product) => {
    const li = `
    <li class="product">
      <span class="product-name">${product.name}</span>
      <ul class="attribute-list">
        <li class="attribute">
          <span class="label">Preço</span>
          <span class="value price">${product.price}</span>
        </li>
        <li class="attribute">
          <span class="label">Quantidade</span>
          <span class="value">${product.quantity}</span>
        </li>
      </ul>
    </li>`;

    return acc + li;
  }, "");

  list.innerHTML = htmlList;

  setTimeout(init, 1000);
};

init();
