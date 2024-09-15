const botao = document.querySelector("button");

botao.addEventListener("click", (e) => {
  /* parar o evento quando ouver um input invalido */
  e.preventDefault();
  console.log("salve");
  const input = document.querySelector("input");
  if (input.value != "") {
    console.log(input.value);
    /* Metodo fetch */
    sendFormsData(input.value);
  }
});

async function sendFormsData(name) {
  console.log("Dado enviado: " + name);
  const login = await fetch("http://localhost:8000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
    }),
  });

  if (login.ok) {
    console.log("Formulario enviado");
  } else {
    console.log("Formulario não enviado");
  }
}
