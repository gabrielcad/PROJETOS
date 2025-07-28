// Criar e listar tarefas

function enviarDados() {

  const input = document.getElementById("meuInput");
  const inputValue = input.value.trim();

  // IF caso usuário enviar o input sem valor
  if (inputValue === "") return;

  // Aqui eu listo o valor do input e salvo como li

  const ul = document.getElementById("listaDados");
  const li = document.createElement("li");
  li.style.display = 'inline-flex'
  li.alignItems = 'center'


  //  Aqui eu adiciono o checkbox no começo de cada tarefa

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "2px";
  checkbox.style.width = "28px";
  checkbox.style.color = "#00FF00;";


  const textoTarefa = document.createElement("span");
  textoTarefa.textContent = inputValue

  li.appendChild(checkbox);
  li.appendChild(textoTarefa)
  ul.appendChild(li);

//Aqui é a função pra adicionar um line through quando der check na tarefa

  checkbox.addEventListener("change", function () {
    textoTarefa.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  // aqui eu reseto o valor do input após clicar no botão adicionar
  input.value = "";

};



// Se eu fosse resumir a diferença de SSR, SPA e SSG
// SSR - É o servidor que monta o front pro usuário monta o dom(html) no backend e o navegador do usuario redenreriza o front.
// SPA - É a maquina do usuário que monta o front e informações que são sensiveis ou que dependem de uma consulta no banco são feitas por request para o backend.
// SSG seria uma aplicação estática que não sofre alteração, é montada e mantem aquilo, não tem entrada de dados.
// Dinamico é quando os dados sofrem alterações, tem dados no banco que podem ser alterados e etc..