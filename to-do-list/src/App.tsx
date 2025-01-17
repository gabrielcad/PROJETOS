import { Container, List } from "@mui/material";
import "./App.css";
import Form from './components/Form.tsx';
import TodoItem from "./components/TodoItem.tsx";

function App() {
  return (

    <Container maxWidth="xs" style={{ backgroundColor: "white", marginTop: "9em" }}>
      <Form />
      <List>
        <TodoItem />
      </List>
    </Container>

  );
}

export default App;
