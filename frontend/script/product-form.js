const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const payload = new URLSearchParams(formData).toString();

  try {
    await fetch("http://localhost:3000/product", {
      method: "post",
      body: payload,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    event.target.reset();
    console.log(`Produto inserido com sucesso!`);
  } catch (error) {
    console.log(`Erro ao inserir o produto:`, error);
  }
};

const [form] = document.forms;
form.addEventListener("submit", handleSubmit);
