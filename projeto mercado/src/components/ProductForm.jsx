
import { useState } from "react";

const ProductForm = ({ onSave }) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoProduto = {
      id: Date.now().toString(),
      nome,
      categoria,
      precoAtual: parseFloat(preco),
      historico: [
        {
          data: new Date().toISOString().split("T")[0],
          preco: parseFloat(preco),
        },
      ],
      ativoNaLista: true,
    };

    onSave(novoProduto);
    setNome("");
    setPreco("");
    setCategoria("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Produto</h2>
      <input
        type="text"
        placeholder="Nome do produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />
      <input
        type="number"
        step="0.01"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        required
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ProductForm;
