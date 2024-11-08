// JSX = JavaScript + XML (html)
import { Header } from "./components/Header";
import { Post } from "./Post";
import "./styles.css";


export function App() {
  return (
      <div>
        <Header />
        
        <Post
          author="Gabriel Godoi"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nemo modi consequuntur odit repudiandae itaque ea obcaecati aspernatur aliquid, labore debitis consectetur commodi assumenda eveniet at mollitia unde vel fuga."
        />
        <Post
          author="Leonardo Ribeiro"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nemo modi consequuntur odit repudiandae itaque ea obcaecati aspernatur aliquid, labore debitis consectetur commodi assumenda eveniet at mollitia unde vel fuga."
        />
      </div>
  );
}
