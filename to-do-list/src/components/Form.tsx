import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

interface FormProps {
  onAddTodo: (newTodo: string) => void; // Função para adicionar uma nova tarefa
}

export default function Form({ onAddTodo }: FormProps) {
  const [text, setText] = useState<string>("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      onAddTodo(text); // Passa o texto para a função do componente pai
      setText(""); // Limpa o campo de texto
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Paper>
        <div style={{ display: "flex"}}>
          <TextField
            style={{width: 500}}            
            id="outlined-basic"
            placeholder="digite a tarefa aqui ..."
            label="Tarefa 📖"
            variant="outlined"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </Paper>
      <div style={{ display: "flex", marginRight: "2px" }}>
        <Button
          variant="outlined"
          onClick={handleAddTodo}
          style={{ marginLeft: "1em", width: 200 }}
        >
          Criar
        </Button>
      </div>
    </div>
  );
}
