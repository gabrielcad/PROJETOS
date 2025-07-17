// Criar e listar tarefas

function enviarDados() {

  const input = document.getElementById("meuInput");
  const inputValue = input.value.trim();

  if (inputValue === "") return;

  const ul = document.getElementById("listaDados");
  const li = document.createElement("li");
  li.textContent = inputValue;
  ul.appendChild(li);

  input.value = "";

// Preciso adicionar um checkbox no começo de cada tarefa

  function inserirCheckbox(){
    const list = document.getElementById("listaDados");
    const check = document.createElement("li");
    checkbox.type='checkbox';
    checkbox.value = inputValue;
  };


// Depois quero marcar a linha da tarefa com um risco

  const taskList = document.getElementById('taskList');

li.addEventListener('click', function(event) {
  const target = event.target;

  if (target.tagName === 'LI') {
    target.classList.toggle('completed');
  }
});
};

 

// Se eu fosse resumir a diferença de SSR, SPA e SSG 
// SSR - É o servidor que monta o front pro usuário monta o dom(html) no backend e o navegador do usuario redenreriza o front.
// SPA - É a maquina do usuário que monta o front e informações que são sensiveis ou que dependem de uma consulta no banco são feitas por request para o backend.
// SSG seria uma aplicação estática que não sofre alteração, é montada e mantem aquilo, não tem entrada de dados.
// Dinamico é quando os dados sofrem alterações, tem dados no banco que podem ser alterados e etc..