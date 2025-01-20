import { Container, List } from "@mui/material";
import "./App.css";
import Form from './components/Form.tsx';
import TodoItem from "./components/TodoItem.tsx";
import { Header } from "./components/Header.tsx";

function App() {
  return (

    <div>
      <Header />

      <Container maxWidth="xs" style={{ backgroundColor: "white", marginTop: "5em", padding: "2em", borderRadius: "4px" }}>
        <Form />
      </Container>
      <List sx={{ bgcolor: "background.paper", marginTop: "1em" }}>
          <TodoItem />
        </List>

    </div>
  );
}

export default App;
