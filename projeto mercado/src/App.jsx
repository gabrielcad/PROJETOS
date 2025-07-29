
import { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";

function App() {
  const [produtos, setProdutos] = useState(() => {
    const localData = localStorage.getItem("produtos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }, [produtos]);

  const adicionarOuAtualizarProduto = (novoProduto) => {
    setProdutos((prev) => {
      const existente = prev.find((p) => p.nome.toLowerCase() === novoProduto.nome.toLowerCase());
      if (existente) {
        const atualizado = {
          ...existente,
          precoAtual: novoProduto.precoAtual,
          historico: [
            ...existente.historico,
            ...novoProduto.historico
          ]
        };
        return prev.map((p) => (p.id === existente.id ? atualizado : p));
      } else {
        return [...prev, novoProduto];
      }
    });
  };

  const toggleProduto = (id) => {
    setProdutos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, ativoNaLista: !p.ativoNaLista } : p
      )
    );
  };

  return (
    <div>
      <h1>Lista de Compras</h1>
      <ProductForm onSave={adicionarOuAtualizarProduto} />
      <hr />
      <h3>Produtos cadastrados:</h3>
      <ul>
        {produtos.map((p) => (
          <li key={p.id}>
            <input
              type="checkbox"
              checked={!p.ativoNaLista}
              onChange={() => toggleProduto(p.id)}
            />
            <span style={{ textDecoration: !p.ativoNaLista ? "line-through" : "none" }}>
              {p.nome} - R$ {p.precoAtual.toFixed(2)}
            </span>
            <ul>
              {p.historico.map((h, i) => (
                <li key={i}>Histórico: R$ {h.preco.toFixed(2)} em {h.data}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
