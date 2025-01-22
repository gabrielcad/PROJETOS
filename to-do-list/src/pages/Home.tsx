import { Container, List } from "@mui/material";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <Container maxWidth="xs" style={{ backgroundColor: "white", marginTop: "5em", padding: "2em", borderRadius: "4px" }}>
        <Form />
      </Container>
      <List sx={{ bgcolor: "background.paper", marginTop: "1em" }}>
        <TodoItem value=""/>
      </List>

    </div>
  )

}