import { Container, List, Paper } from "@mui/material";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";
import { Header } from "../components/Header";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [checked, setChecked] = useState<string[]>([]); // Itens selecionados

  const addTodo = (newTodo: string) => {
    if (newTodo.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  };

  const handleToggle = (value: string) => {
    setChecked((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleDelete = (value: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo !== value));
    setChecked((prevChecked) => prevChecked.filter((item) => item !== value));
  };

  return (
    <div>
      <Header />

      <Container
        maxWidth="lg"
        minWidth=""
        style={{
          backgroundColor: "white",
          marginTop: "5em",
          padding: "2em",
          borderRadius: "4px",
        }}
      >
        <Form onAddTodo={addTodo} />
      </Container>
      <Container
        style={{
          backgroundColor: "transparent",
          borderRadius: "4px",
        }}
      >
        <List sx={{ marginTop: "1em" }}>
          {todos.map((todo) => (
            <div style={{ marginTop: "1em" }}>
              <TodoItem
                key={todo}
                value={todo}
                checked={checked.includes(todo)}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </List>
      </Container>
    </div>
  );
}
