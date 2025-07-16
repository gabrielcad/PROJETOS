function enviarDados() {

  const input = document.getElementById("meuInput");
  const inputValue = input.value.trim();

  if (inputValue === "") return;

  const ul = document.getElementById("listaDados");
  const li = document.createElement("li");
  li.textContent = inputValue;
  ul.appendChild(li);

  input.value = "";

};

