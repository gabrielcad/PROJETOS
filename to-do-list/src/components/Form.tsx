import { Button, Paper, TextField } from '@mui/material'
import { useState } from 'react'

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
    <div>
        <Paper >
          <div style={{ display: "flex", justifyContent: "center" }}>

            <TextField 
            id="outlined-basic" 
            placeholder='digite a tarefa aqui ...' 
            label="Tarefa 📖"
            variant="outlined" onChange={(e) => setText(e.target.value)} />
            <Button 
            variant="outlined" 
            onClick={handleAddTodo}>Adicionar</Button>

          </div >
        </Paper>
    </div>
  )
}